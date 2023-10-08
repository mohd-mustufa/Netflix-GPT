import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../redux/gptSlice";
import { setLanguage } from "../redux/configSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
        <div className="absolute z-30 flex justify-between w-full px-3 py-2">
          <img className="w-52" alt="logo" src={LOGO_URL} />
          <div>
            <button
              className="px-6 mx-10 my-4 font-medium text-lg text-white bg-red-600 rounded-md cursor-pointer min-w-fit h-10"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
      {!props.home && !user && (
        <div className="absolute z-30 flex justify-between w-full px-3 py-2 bg-gradient-to-b from-black">
          <Link to="/">
            <img className="w-52" alt="logo" src={LOGO_URL} />
          </Link>
        </div>
      )}
      {!props.home && user && (
        <div
          className={`z-30 flex justify-between w-full px-11 py-2 bg-gradient-to-b from-black fixed top-0 left-0 " 
            ${
              isScrolled
                ? "bg-black transition duration-700"
                : "transition duration-700"
            }
          `}
        >
          <Link to="/browse">
            <img className="w-36" alt="logo" src={LOGO_URL} />
          </Link>
          {user && (
            <div className="flex">
              <select
                name="language"
                className="bg-zinc-800 m-3 px-4 py-2 text-white rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES?.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <button
                className="px-4 p-2 mx-6 my-3 min-w-fit h-10 font-medium text-white text-md bg-purple-800 rounded-md cursor-pointer"
                onClick={handleGptSearchBtn}
              >
                GPT Search
              </button>
              <img
                className="mx-2 my-3 w-11 h-10 rounded-md"
                src={user?.photoURL}
                alt="profile-img"
              />
              <button
                className="px-4 pt-1 pb-3 mx-2 my-3 min-w-fit h-10 font-medium text-white text-lg bg-red-600 rounded-md cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
