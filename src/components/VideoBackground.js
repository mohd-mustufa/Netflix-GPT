import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.mainMovieTrailer);
  const movie = useSelector((store) => store.movies?.nowPlayingMovies?.[16]);
  const [showVideo, setShowVideo] = useState(true);

  // This will change the video screen to a photo screen after 2.5minutes
  // Hack to remove the youtube auto-suggestions at the end of video
  setTimeout(() => {
    setShowVideo(false);
  }, 150000);

  // Store the trailer data of the main movie to the store
  useMovieTrailer(movieId);

  return (
    <div>
      {showVideo && (
        <div className="absolute -mt-24 -z-10">
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailer?.key +
              "?&autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
      {!showVideo && (
        <img
          className="w-screen aspect-video"
          src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path}
          alt="poster"
        ></img>
      )}
    </div>
  );
};

export default VideoBackground;
