import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_SERIES_URL } from "../utils/constants";
import { addPopularSeries } from "../redux/tvSeriesSlice";
import { useEffect } from "react";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  // Adding this here so that we dont call the api everytime we come to the browse page
  const popularSeries = useSelector((store) => store.tvSeries.popularSeries);

  // Function to get the popular series and put them in the store
  const getPopularSeries = async () => {
    const data = await fetch(POPULAR_SERIES_URL, API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addPopularSeries(jsonData.results));
  };

  useEffect(() => {
    !popularSeries && getPopularSeries();
  }, []);
};

export default usePopularSeries;
