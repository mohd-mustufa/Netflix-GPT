import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvSeries = useSelector((store) => store.tvSeries);
  const langId = useSelector((store) => store.config.language);
  const path = window.location.pathname;

  return (
    <div className="md:-mt-48 bg-black">
      <div className="hidden md:block w-full h-40 absolute bottom-0 bg-gradient-to-t from-black"></div>
      <MovieList
        title={language[langId].newReleases}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList
        title={language[langId].airingToday}
        movies={tvSeries?.seriesAiringToday}
      />
      <MovieList
        title={language[langId].trendingNow}
        movies={movies?.popularMovies}
      />
      <MovieList
        title={language[langId].topRatedMovies}
        movies={movies?.topRatedMovies}
      />
      <MovieList
        title={language[langId].popularTvSeries}
        movies={tvSeries?.popularSeries}
      />
      <MovieList
        title={language[langId].topRatedTvSeries}
        movies={tvSeries?.topRatedSeries}
      />
    </div>
  );
};

export default SecondaryContainer;
