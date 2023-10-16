import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ trailerId, backgroundPath }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideoData);
  const [showVideo, setShowVideo] = useState(true);

  // Add the trailer data of the main movie to the store
  useTrailer(trailerId);

  useEffect(() => {
    // This will change the video screen to a photo screen after 2.5minutes
    // Hack to remove the youtube auto-suggestions at the end of video
    if (!trailerVideo?.key) setShowVideo(false);
    else setShowVideo(true);
    const timer = setTimeout(() => {
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
  }, [trailerVideo?.key]);

  return (
    <div>
      {showVideo && (
        <div className="hidden md:block md:-mt-24">
          <iframe
            className="w-full aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?&autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
      {!showVideo && (
        <img
          className="w-full max-h-screen min-h-[250px] aspect-video"
          src={"https://image.tmdb.org/t/p/original/" + backgroundPath}
          alt="poster"
        ></img>
      )}
    </div>
  );
};

export default VideoBackground;
