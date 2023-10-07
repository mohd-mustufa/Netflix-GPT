import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL_LARGE, BACKGROUND_URL_SMALL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10 h-screen w-screen">
        <img
          alt="background"
          src={BACKGROUND_URL_LARGE}
          className="object-cover object-center h-full w-full"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
