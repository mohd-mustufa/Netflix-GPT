import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-48">
      <div className="w-full h-40 absolute bottom-0 bg-gradient-to-t from-black"></div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"New Releases"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
