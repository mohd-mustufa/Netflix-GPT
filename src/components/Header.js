import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <>
      {props?.home && (
        <div className="absolute z-30 flex justify-between w-full px-3 py-2">
          <img
            className="w-52"
            alt="logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          />
          <div>
            <button
              className="px-4 mx-10 my-4 font-medium text-sm text-white bg-red-700 rounded-lg cursor-pointer min-w-fit h-9"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
      {!props.home && (
        <div className="absolute z-30 flex justify-between w-full px-3 py-2 bg-gradient-to-b from-black">
          <Link to="/">
            <img
              className="w-52"
              alt="logo"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            />
          </Link>
          {user && (
            <div className="flex">
              <img
                className="mx-2 my-5 rounded-md w-11 h-11"
                src={user?.photoURL}
                alt="profile-img"
              />
              <button
                className="p-2 mx-2 my-5 font-medium text-white bg-red-600 rounded-lg cursor-pointer min-w-fit h-11"
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
