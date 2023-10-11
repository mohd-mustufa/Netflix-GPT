import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langId = useSelector((store) => store.config.language);

  return (
    <div className="md:-mt-48 bg-black">
      <div className="w-full h-40 absolute bottom-0 bg-gradient-to-t from-black"></div>
      <MovieList
        title={language[langId].newReleases}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList
        title={language[langId].topRated}
        movies={movies?.topRatedMovies}
      />
      <MovieList
        title={language[langId].trendingNow}
        movies={movies?.popularMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
