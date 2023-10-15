import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_SERIES_URL } from "../utils/constants";
import { addTopRatedSeries } from "../redux/tvSeriesSlice";
import { useEffect } from "react";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  // Adding this here so that we dont call the api everytime we come to the browse page
  const topRatedSeries = useSelector((store) => store.tvSeries.topRatedSeries);

  // Function to get the top rated series and put them in the store
  const getTopRatedSeries = async () => {
    const data = await fetch(TOP_RATED_SERIES_URL, API_OPTIONS);
    const jsonData = await data.json();
    dispatch(addTopRatedSeries(jsonData.results));
  };

  useEffect(() => {
    !topRatedSeries && getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
