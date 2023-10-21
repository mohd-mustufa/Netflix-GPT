import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (!poster) return;

  return (
    <div className="w-36 md:w-[180px] mr-2 relative">
      <img
        className="rounded-md cursor-pointer"
        src={MOVIE_POSTER_URL + poster}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
