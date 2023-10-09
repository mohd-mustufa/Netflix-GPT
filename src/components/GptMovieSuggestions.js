import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, gptSearchText } = useSelector(
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
          <div className="text-white text-2xl font-bold mt-6 text-center p-4 bg-black bg-opacity-90 w-full">
            Search Results For: {gptSearchText}
          </div>
          <div className="m-6 mt-0 pl-2 pr-10 py-4 bg-black bg-opacity-90">
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
