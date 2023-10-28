import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  TV_SERIES_BY_GENRE_URL,
  TV_SERIES_GENRE_LIST_URL,
} from "../utils/constants";
import {
  addTvSeriesByGenre,
  addTvSeriesGenreList,
} from "../redux/tvSeriesSlice";
import { useEffect } from "react";

const useTvSeriesByGenre = () => {
  const dispatch = useDispatch();
  // Adding this here so that we dont call the api everytime we come to the browse page
  const tvSeriesByGenre = useSelector(
    (store) => store.tvSeries.tvSeriesByGenre
  );

  // Getting list of all genres
  const getTvSeriesGenreList = async () => {
    const data = await fetch(TV_SERIES_GENRE_LIST_URL, API_OPTIONS);
    const jsonData = await data.json();

    const genreList = {};
    jsonData.genres.forEach(
      (genre) => (genreList[genre.name] = genre.id.toString())
    );

    const storeList = {};
    jsonData.genres.forEach((genre) => (storeList[genre.id] = genre.name));
    dispatch(addTvSeriesGenreList(storeList));

    return genreList;
  };

  const getTvSeriesByGenreDataFromApi = async (genreList, genre) => {
    const url = TV_SERIES_BY_GENRE_URL + genreList[genre];
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    return jsonData.results;
  };

  useEffect(() => {
    const getTvSeriesByGenre = async () => {
      const genreList = await getTvSeriesGenreList();
      const genres = Object.keys(genreList);

      // Looping over all the genres and getting the list of promises
      const promiseArr = genres.map((genre) =>
        getTvSeriesByGenreDataFromApi(genreList, genre)
      );
      const apiResults = await Promise.all(promiseArr);

      const genreTvSeries = {};
      for (let i = 0; i < genres.length; i++) {
        genreTvSeries[genres[i]] = apiResults[i];
      }
      dispatch(addTvSeriesByGenre(genreTvSeries));
    };

    if (!tvSeriesByGenre) getTvSeriesByGenre();
  }, []);
};

export default useTvSeriesByGenre;
