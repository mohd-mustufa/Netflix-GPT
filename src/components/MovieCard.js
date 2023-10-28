import React, { useState } from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  poster,
  name,
  title,
  background,
  genres,
  index,
  finalIndex,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const genreList = useSelector((store) =>
    title ? store.movies.moviesGenreList : store.tvSeries.tvSeriesGenreList
  );

  if (!poster) return;

  let genreNames = [];
  if (genreList) {
    genreNames = genres?.map((genreId) => genreList[genreId]);
  }

  return (
    <div
      className={`w-36 md:w-[180px] max-h-270 mr-2 relative transition-all duration-400 " ${
        isHovered ? "w-[270px] md:w-[340px] z-10" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          className=" rounded-md cursor-pointer transition-all"
          src={MOVIE_POSTER_URL + (isHovered ? background : poster)}
          alt="movie poster"
        />
      </div>
      {isHovered && (
        <div>
          <div className="text-white font-bold md:text-2xl whitespace-nowrap overflow-ellipsis truncate cursor:pointer">
            {title || name}
          </div>
          <div className="flex justify-between text-white text-xl md:text-3xl">
            <div className="flex space-x-1 space-y-1 cursor-pointer">
              <IoPlayCircleSharp
                title="Play"
                onClick={() => navigate("/player")}
              />
              <RiThumbUpFill title="Like" />
              <RiThumbDownFill title="Dislike" />

              <BsCheck title="Remove from List" />
              <AiOutlinePlus title="Add to my list" />
            </div>
            <div className="cursor-pointer">
              <BiChevronDown title="More Info" />
            </div>
          </div>
          <div className="text-white">{genreNames.join(", ")}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
