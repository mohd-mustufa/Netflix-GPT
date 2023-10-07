import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 col-span-9 rounded-md"
        />
        <button className="px-4 py-2 m-4 col-span-3 bg-purple-800 font-medium text-white text-lg rounded-md cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
