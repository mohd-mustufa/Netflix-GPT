import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, gptSearchText, noResult } = useSelector(
    (store) => store.gpt
  );
  if (!movieNames) return;

  return (
    <>
      {movieResults.every((arr) => arr.length === 0) ? (
        <div className="text-red-600 text-2xl font-bold ml-[30%] bg-black max-w-fit p-4">
          Sorry, couldn't fetch any data. Please try again...
        </div>
      ) : (
        <>
          <div className="text-white text-xl md:text-3xl font-bold mx-4 md:mx-6 mt-4 md:mt-6 text-center px-4 pt-4 bg-black bg-opacity-90 w-[11/12]">
            {noResult
              ? "Your search for '" +
                gptSearchText +
                "' did not find any matches. However, here are similar suggestions you might like:"
              : "Search Results For: " + gptSearchText}
          </div>
          <div className="m-4 md:m-6 mt-0 md:mt-0 pl-2 pr-10 py-4 bg-black bg-opacity-90">
            {movieNames.map(
              (movieName, index) =>
                movieResults[index].length !== 0 && (
                  <MovieList
                    key={movieName}
                    title={movieName}
                    movies={movieResults[index]}
                  />
                )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GptMovieSuggestions;
