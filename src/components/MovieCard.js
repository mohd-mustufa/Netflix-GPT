import React, { useState } from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster, name, title, background, genres }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
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
      className={`w-36 md:w-[180px] mr-2 relative transition-all duration-400 " ${
        isHovered ? "w-[270px] md:w-[335px] z-10" : ""
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
          <div className="text-white font-bold md:text-xl truncate cursor:pointer">
            {title || name}
          </div>
          <div className="flex justify-between text-white text-xl md:text-3xl">
            <div className="flex space-x-1 cursor-pointer">
              <IoPlayCircleSharp
                title="Play"
                onClick={() => navigate("/player")}
              />
              <RiThumbUpFill
                title="Like"
                onClick={() => {
                  setIsLiked((prevState) => !prevState);
                  setIsDisliked(false);
                }}
                style={{ color: isLiked ? "blue" : "inherit" }}
              />
              <RiThumbDownFill
                title="Dislike"
                onClick={() => {
                  setIsDisliked((prevState) => !prevState);
                  setIsLiked(false);
                }}
                style={{ color: isDisliked ? "blue" : "inherit" }}
              />

              <AiOutlinePlus title="Add to my list" />
            </div>
            <div className="cursor-pointer">
              <BiChevronDown title="More Info" />
            </div>
          </div>
          <div className="text-white truncate">{genreNames.join(", ")}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
