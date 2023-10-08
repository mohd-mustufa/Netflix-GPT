import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langId = useSelector((store) => store.config.language);

  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={language[langId].gptSearchBarPlaceholder}
          className="p-4 m-4 col-span-9 rounded-md text-lg"
        />
        <button className="px-4 py-2 m-4 col-span-3 bg-purple-800 font-medium text-white text-xl rounded-md cursor-pointer">
          {language[langId].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
