import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useState } from "react";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.mainMovieTrailer);
  const movie = useSelector((store) =>
    store.movies?.nowPlayingMovies
      ? store.movies.nowPlayingMovies[store.movies.nowPlayingMovies.length - 1]
      : null
  );
  const [showVideo, setShowVideo] = useState(true);

  // Store the trailer data of the main movie to the store
  useMovieTrailer(movieId);

  useEffect(() => {
    // This will change the video screen to a photo screen after 2.5minutes
    // Hack to remove the youtube auto-suggestions at the end of video
    let timer = setTimeout(() => {
      setShowVideo(false);
      window.removeEventListener("resize", handleResize);
    }, 140000);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        clearTimeout(timer);
        setShowVideo(false);
        window.removeEventListener("resize", handleResize);
      }
    };

    // Initially check the screen size when the component mounts
    handleResize();

    // Add a listener to check for screen size changes
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the listener when the component unmounts
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {showVideo && (
        <div className="hidden md:block md:-mt-24">
          <iframe
            className="w-full aspect-video"
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
          className="w-full max-h-screen aspect-video"
          src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path}
          alt="poster"
        ></img>
      )}
    </div>
  );
};

export default VideoBackground;
