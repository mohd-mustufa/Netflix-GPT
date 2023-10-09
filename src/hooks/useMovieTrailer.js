import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMainMovieTrailer } from "../redux/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // Adding this here so that we dont call the api everytime we come to the browse page
  const movieTrailer = useSelector((store) => store.movies.mainMovieTrailer);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();

    // Check if we get a trailer video with name official trailer
    let filteredData = jsonData.results?.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    // If we dont, then just display any trailer
    if (!filteredData) {
      filteredData = jsonData.results?.filter(
        (video) => video.type === "Trailer"
      );
    }

    // When we dont get any trailers, then we just display any video related to the movie
    const trailer = filteredData[0] || jsonData.results[0];
    dispatch(addMainMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
