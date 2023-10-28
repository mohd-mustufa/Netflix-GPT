import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  MOVIES_BY_GENRE_URL,
  MOVIE_GENRE_LIST_URL,
} from "../utils/constants";
import { addMovieGenreList, addMoviesByGenre } from "../redux/moviesSlice";
import { useEffect } from "react";

const useMoviesByGenre = () => {
  const dispatch = useDispatch();
  // Adding this here so that we dont call the api everytime we come to the browse page
  const moviesByGenre = useSelector((store) => store.movies.moviesByGenre);

  // Getting list of all genres
  const getMovieGenreList = async () => {
    const data = await fetch(MOVIE_GENRE_LIST_URL, API_OPTIONS);
    const jsonData = await data.json();

    const genreList = {};
    jsonData.genres.forEach(
      (genre) => (genreList[genre.name] = genre.id.toString())
    );

    const storeList = {};
    jsonData.genres.forEach((genre) => (storeList[genre.id] = genre.name));
    dispatch(addMovieGenreList(storeList));

    return genreList;
  };

  const getMoviesByGenreDataFromApi = async (genreList, genre) => {
    const url = MOVIES_BY_GENRE_URL + genreList[genre];
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    return jsonData.results;
  };

  useEffect(() => {
    const getMoviesByGenre = async () => {
      const genreList = await getMovieGenreList();
      const genres = Object.keys(genreList);

      // Looping over all the genres and getting the list of promises
      const promiseArr = genres.map((genre) =>
        getMoviesByGenreDataFromApi(genreList, genre)
      );
      const apiResults = await Promise.all(promiseArr);

      const genreMovies = {};
      for (let i = 0; i < genres.length; i++) {
        genreMovies[genres[i]] = apiResults[i];
      }
      dispatch(addMoviesByGenre(genreMovies));
    };

    if (!moviesByGenre) getMoviesByGenre();
  }, []);
};

export default useMoviesByGenre;
