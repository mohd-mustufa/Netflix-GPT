import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (!poster) return;

  return (
    <div className="w-52 relative">
      <img
        className="rounded-md cursor-pointer max-h-[300px]"
        src={MOVIE_POSTER_URL + poster}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
