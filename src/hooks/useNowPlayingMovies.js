import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // Function to get the now playing movies and put them in the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
