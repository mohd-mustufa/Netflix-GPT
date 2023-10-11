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

  // This will change the video screen to a photo screen after 2.5minutes
  // Hack to remove the youtube auto-suggestions at the end of video
  // let timer = setTimeout(() => {
  //   console.log("executing timeout");
  //   setShowVideo(false);
  // }, 10000);

  // Store the trailer data of the main movie to the store
  useMovieTrailer(movieId);

  useEffect(() => {
    // let timeoutId;
    // if (window.innerWidth < 768) {
    //   setShowVideo(0);
    //   console.log("initial small: " + showVideo);
    // } else {
    //   setShowVideo(1);
    //   console.log("initial big: " + showVideo);
    //   timeoutId = setTimeout(() => {
    //     setShowVideo(0);
    //     console.log("timeout initial executed: " + timeoutId);
    //   }, 140000);
    //   console.log("timeout initial created: " + timeoutId);
    // }

    // const handleResize = () => {
    //   if (showVideo && window.innerWidth < 768) {
    //     setShowVideo(0);
    //     console.log("later small: " + showVideo);
    //     clearTimeout(timeoutId);
    //     console.log("timeout cleared less height: " + timeoutId + showVideo);
    //   } else if (!showVideo && window.innerWidth >= 768) {
    //     setShowVideo(1);
    //     console.log("later big: " + showVideo);
    //     timeoutId = setTimeout(() => {
    //       setShowVideo(0);
    //       console.log("timeout executed more height: " + timeoutId);
    //     }, 140000);
    //     console.log("timeout created more height: " + timeoutId);
    //     console.log(showVideo);
    //   }
    // };
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
