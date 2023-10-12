import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies
    ? nowPlayingMovies[nowPlayingMovies?.length - 1]
    : null;

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
