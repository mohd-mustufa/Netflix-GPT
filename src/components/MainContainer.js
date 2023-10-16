import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const popularSeries = useSelector((store) => store.tvSeries?.popularSeries);

  const path = window.location.pathname;
  let trailerList;

  if (path === "/browse") {
    trailerList = nowPlayingMovies;
  } else if (path === "/browse/movies") {
    trailerList = popularMovies;
  } else if (path === "/browse/tv") {
    trailerList = popularSeries;
  }

  if (!trailerList) return;

  const trailer = trailerList ? trailerList[trailerList?.length - 1] : null;
  const { title, name, overview, id, backdrop_path } = trailer;

  return (
    <div>
      <VideoTitle title={title} name={name} description={overview} />
      <VideoBackground trailerId={id} backgroundPath={backdrop_path} />
    </div>
  );
};

export default MainContainer;
