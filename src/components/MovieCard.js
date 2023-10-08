import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-52 relative mr-4">
      <img
        className="rounded-md cursor-pointer"
        src={MOVIE_POSTER_URL + poster}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
