import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MovieList = ({ title, movies }) => {
  const [showControls, setShowControls] = useState(false);
  const [showLeftControl, setShowLeftControl] = useState(false);
  const [showRightControl, setShowRightControl] = useState(true);
  const listRef = useRef();

  // Setting the constants
  const largeTranslate = 752;
  const largeOffset = 48;
  const smallTranslate = 304;
  const smallOffset = 28;

  // Function to handle the movement of slider towards left or right
  const handleDirection = (direction) => {
    const windowWidth = window.innerWidth; // Width of the visible window
    const largeVisible = windowWidth - largeOffset * 2; // Width of the visible slider element
    const smallVisible = windowWidth - smallOffset * 2;
    const isLargeScreen = windowWidth < 768 ? false : true;

    // Getting the space the element has occupied towards the left of the  screen (not visible to user)
    const left =
      listRef.current.getBoundingClientRect().x -
      (isLargeScreen ? largeOffset : smallOffset);
    // Total width of the element including overflow
    const totalWidth = listRef.current.getBoundingClientRect().width;

    // Getting the space the element has occupied towards the right of the screen (not visible to user)
    const spaceLeft =
      direction === "right"
        ? totalWidth - (-left + (isLargeScreen ? largeVisible : smallVisible))
        : -left;

    // Setting how much px the slider should move on clicking the left / right button
    const move = isLargeScreen
      ? spaceLeft < largeTranslate
        ? spaceLeft
        : largeTranslate
      : spaceLeft < smallTranslate
      ? spaceLeft
      : smallTranslate;

    // Updating the states
    (left === 0 || left + move === 0) && direction === "left"
      ? setShowLeftControl(false)
      : setShowLeftControl(true);
    spaceLeft - move === 0 && direction === "right"
      ? setShowRightControl(false)
      : setShowRightControl(true);

    // Moving the slider
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${left + move}px)`;
      listRef.current.style.transition = "transform 0.3s ease-in-out";
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(-${move - left}px)`;
      listRef.current.style.transition = "transform 0.3s ease-in-out";
    }
  };

  useEffect(() => {}, [showLeftControl, showRightControl]);

  return (
    <div
      className="px-7 md:px-12 relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="text-xl md:text-2xl py-4 text-white">{title}</h1>
      {showControls && showLeftControl && (
        <div className="text-white text-3xl md:text-5xl z-10 cursor-pointer absolute left-0 top-40 md:top-44">
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
      )}
      <div className="flex overflow-x-hidden">
        <div className="flex" ref={listRef}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
      {showControls && showRightControl && (
        <div className="text-white text-3xl md:text-5xl z-10 cursor-pointer absolute right-0 top-40 md:top-44">
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      )}
    </div>
  );
};

export default MovieList;
