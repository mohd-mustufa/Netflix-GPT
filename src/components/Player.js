import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Player = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideoData);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen">
      <div className="w-screen z-10 h-14 bg-black absolute">
        <button className="z-20">
          <BsArrowLeft
            className="text-5xl m-4 text-white cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </button>
      </div>
      <iframe
        className="h-full w-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          (trailerVideo?.key ? trailerVideo?.key : "qEVUtrk8_B4") +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Player;
