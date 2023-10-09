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
      "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Shawshank Redemption, The Godfather, Spiderman, Aquaman, Avengers";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    const gptMovies = [
      "slkadjflksdjf",
      "Wonder Woman",
      "Avengers",
      "Zindagi Na Milegi",
      "Pursuit Of Happiness",
    ];
    const promiseArr = gptMovies.map((movie) => getMovieDataFromApi(movie));
    const apiResults = await Promise.all(promiseArr);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: apiResults,
        gptSearchText: searchText.current.value,
      })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[langId].gptSearchBarPlaceholder}
          className="p-4 m-4 col-span-9 rounded-md text-lg"
        />
        <button
          onClick={() => handleGptSearchClick()}
          className="px-4 py-2 m-4 col-span-3 bg-purple-800 font-medium text-white text-xl rounded-md cursor-pointer"
        >
          {language[langId].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
