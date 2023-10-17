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
      {path === "/browse" && (
        <>
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
        </>
      )}
      {path === "/browse/movies" && (
        <>
          <MovieList
            title={language[langId].trendingNow}
            movies={movies?.popularMovies}
          />
          <MovieList
            title={language[langId].actionMovies}
            movies={movies?.moviesByGenre?.Action}
          />
          <MovieList
            title={language[langId].crimeThrillerShowdown}
            movies={movies?.moviesByGenre?.Crime}
          />
          <MovieList
            title={language[langId].fantasyMovies}
            movies={movies?.moviesByGenre?.Fantasy}
          />
          <MovieList
            title={language[langId].horrorMovies}
            movies={movies?.moviesByGenre?.Horror}
          />
          <MovieList
            title={language[langId].thrillerMovies}
            movies={movies?.moviesByGenre?.Thriller}
          />
          <MovieList
            title={language[langId].familyDrama}
            movies={movies?.moviesByGenre?.Family}
          />
        </>
      )}
      {path === "/browse/tv" && (
        <>
          <MovieList
            title={language[langId].popularTvSeries}
            movies={tvSeries?.popularSeries}
          />
          <MovieList
            title={language[langId].sitcoms}
            movies={tvSeries?.tvSeriesByGenre?.Comedy}
          />
          <MovieList
            title={language[langId].crimeChronicles}
            movies={tvSeries?.tvSeriesByGenre?.Crime}
          />
          <MovieList
            title={language[langId].dramaSeries}
            movies={tvSeries?.tvSeriesByGenre?.Drama}
          />
          <MovieList
            title={language[langId].realityTvShows}
            movies={tvSeries?.tvSeriesByGenre?.Reality}
          />
          <MovieList
            title={language[langId].soapOperas}
            movies={tvSeries?.tvSeriesByGenre?.Soap}
          />
          <MovieList
            title={language[langId].talkShows}
            movies={tvSeries?.tvSeriesByGenre?.Talk}
          />
        </>
      )}
    </div>
  );
};

export default SecondaryContainer;
