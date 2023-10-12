import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../redux/gptSlice";

const GptSearchBar = () => {
  const langId = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMovieDataFromApi = async (movieName) => {
    const url =
      "https://api.themoviedb.org/3/search/multi?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie/tv series recommendation system and suggest some movies/tv series for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies/tv series, with a seperator like the example result given ahead. Example Result: Shawshank Redemption; The Godfather; Narcos; Aquaman; Avengers. If you cannot find any movies/tv series to suggest based on the query then give me names of any 5 movies that I might like. In this case the first word of your result should be 'No gpt result' followed by 5 comma separated movie names like the example result given ahead. Example result: No gpt result; movie1; movie2; movie3; movie4; movie5";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split("; ");
    const promiseArr = gptMovies.map((movie) => getMovieDataFromApi(movie));
    const apiResults = await Promise.all(promiseArr);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: apiResults,
        gptSearchText: searchText.current.value,
        noResult: gptMovies[0] === "No gpt result" ? true : false,
      })
    );
  };

  return (
    <div className="pt-28 md:pt-24 flex justify-center">
      <form
        className="bg-black w-11/12 md:w-3/5 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[langId].gptSearchBarPlaceholder}
          className="p-2 md:p-4 my-4 mx-2 md:m-4 col-span-9 rounded-md text-sm md:text-lg"
        />
        <button
          onClick={() => handleGptSearchClick()}
          className="px-2 md:px-4 py-2 my-4 mx-2 md:m-4 col-span-3 bg-purple-800 font-medium text-white text-md rounded-md cursor-pointer"
        >
          {language[langId].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
