import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, SERIES_AIRING_TODAY_URL } from "../utils/constants";
import { addSeriesAiringToday } from "../redux/tvSeriesSlice";
import { useEffect } from "react";

const useSeriesAiringToday = () => {
  const dispatch = useDispatch();
  // Adding this here so that we dont call the api everytime we come to the browse page
  const seriesAiringToday = useSelector(
    (store) => store.tvSeries.seriesAiringToday
  );

  // Function to get the series airing today and put them in the store
  const getSeriesAiringToday = async () => {
    const data = await fetch(SERIES_AIRING_TODAY_URL, API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addSeriesAiringToday(jsonData.results));
  };

  useEffect(() => {
    !seriesAiringToday && getSeriesAiringToday();
  }, []);
};

export default useSeriesAiringToday;
