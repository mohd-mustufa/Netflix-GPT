import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import {
  addGptMovieResults,
  setGptSearchFalse,
  toggleGptSearchView,
} from "../redux/gptSlice";
import { setLanguage } from "../redux/configSlice";
import language from "../utils/languageConstants";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const langId = useSelector((store) => store.config.language);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isScrolled, setIsScrolled] = useState(false);

  // This is called when the user signs out, will redirect user to home page
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchBtn = () => {
    dispatch(toggleGptSearchView());
    if (showGptSearch)
      dispatch(addGptMovieResults({ movieNames: null, movieResults: null }));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If we get the user, then its a login/sign up event so we add the user data to store
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        if (window.location.pathname === "/login") navigate("/login");
        else navigate("/");
      }
    });

    // Function to handle the scroll event
    function handleScroll() {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts and unsubscribe
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <>
      {props?.home && (
        <div className="absolute z-30 flex justify-between w-full px-2 md:px-3 py-1 md:py-2">
          <img className="w-28 md:w-52" alt="logo" src={LOGO_URL} />
          <div className="flex md:block">
            <select
              name="language"
              className="bg-zinc-900 md:bg-black mx-2 my-2 md:m-3 px-1 md:px-4 h-10 text-white rounded-md"
              onChange={handleLanguageChange}
              value={langId}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              className="px-2 md:px-6 mx-2 md:mx-10 my-2 md:my-4 font-medium md:text-lg text-white bg-red-600 rounded-md cursor-pointer max-w-[70px] md:max-w-full md:min-w-fit h-15 md:h-10"
              onClick={() => navigate("/login")}
            >
              {language[langId].signIn}
            </button>
          </div>
        </div>
      )}
      {!props.home && !user && (
        <div className="absolute z-30 flex justify-between w-full px-3 py-2 bg-gradient-to-b from-black">
          <Link to="/">
            <img className="w-32 md:w-52" alt="logo" src={LOGO_URL} />
          </Link>
          <select
            name="language"
            className="bg-gray-800 my-2 md:my-3 md:mx-20 px-2 md:px-4 h-9 md:h-10 text-white rounded-md"
            onChange={handleLanguageChange}
            value={langId}
          >
            {SUPPORTED_LANGUAGES?.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {!props.home && user && (
        <div
          className={`z-30 flex flex-col md:flex-row md:justify-between w-full px-11 py-2 bg-gradient-to-b from-black fixed top-0 left-0 " 
            ${
              isScrolled
                ? "bg-black transition duration-700"
                : "transition duration-700"
            }
          `}
        >
          <Link to="/browse">
            <img
              className="-ml-10 md:mx-0 -my-2 md:my-0 w-32 md:w-36"
              alt="logo"
              src={LOGO_URL}
              onClick={() => {
                navigate("/browse");
                dispatch(setGptSearchFalse());
              }}
            />
          </Link>
          <div className="flex absolute top-4 md:top-7 right-2 md:right-auto md:left-52">
            <button
              className="text-white mr-4 md:mr-7 hidden md:block"
              onClick={() => {
                navigate("/browse");
                dispatch(setGptSearchFalse());
              }}
            >
              {language[langId].home}
            </button>
            <button
              className="text-white mr-4 md:mr-7"
              onClick={() => {
                navigate("/browse/movies");
                dispatch(setGptSearchFalse());
              }}
            >
              {language[langId].movies}
            </button>
            <button
              className="text-white mr-4 md:mr-7"
              onClick={() => {
                navigate("/browse/tv");
                dispatch(setGptSearchFalse());
              }}
            >
              {language[langId].tvSeries}
            </button>
            <button
              className="text-white mr-4 md:mr-7"
              onClick={() => {
                dispatch(setGptSearchFalse());
              }}
            >
              {language[langId].myList}
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <select
              name="language"
              className="bg-zinc-800 mb-4 mt-3 md:m-3 px-2 md:px-4 py-1 md:py-2 text-white rounded-md text-[13px] md:text-base"
              onChange={handleLanguageChange}
              value={langId}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              className="px-3 md:px-4 py-1 md:py-2 mx-6 my-3 min-w-fit h-9 md:h-10 font-medium text-white text-sm md:text-base bg-purple-800 rounded-md cursor-pointer"
              onClick={handleGptSearchBtn}
            >
              {showGptSearch
                ? language[langId].homepage
                : language[langId].gptSearch}
            </button>
            <img
              className="mx-2 my-3 w-11 h-10 rounded-md hidden md:block"
              src={user?.photoURL}
              alt="profile-img"
            />
            <button
              className="px-3 md:px-4 md:pt-1 md:pb-3 md:mx-2 my-3 min-w-fit h-9 md:h-10 font-medium text-white text-sm md:text-lg bg-red-600 rounded-md cursor-pointer"
              onClick={handleSignOut}
            >
              {language[langId].signOut}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
