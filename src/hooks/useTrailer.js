import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideoData } from "../redux/moviesSlice";
import { useEffect } from "react";

const useTrailer = (trailerId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrailerVideoData = async () => {
      const path = window.location.pathname;
      const url =
        path === "/browse/tv"
          ? "https://api.themoviedb.org/3/tv/" +
            trailerId +
            "/videos?language=en-US"
          : "https://api.themoviedb.org/3/movie/" +
            trailerId +
            "/videos?language=en-US";

      const data = await fetch(url, API_OPTIONS);
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
      dispatch(addTrailerVideoData(trailer));
    };

    getTrailerVideoData();
  }, [trailerId, dispatch]);
};

export default useTrailer;
