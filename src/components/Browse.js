import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import useSeriesAiringToday from "../hooks/useSeriesAiringToday";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useMoviesByGenre from "../hooks/useMoviesByGenre";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Store the movies & TV Series data to the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useSeriesAiringToday();
  usePopularSeries();
  useTopRatedSeries();
  useMoviesByGenre();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
