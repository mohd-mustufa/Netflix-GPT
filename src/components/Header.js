import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Removing user state logic handled by onAuthStateChanged
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    console.log("header");
    onAuthStateChanged(auth, (user) => {
      console.log("header auth");
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
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute z-10 flex justify-between w-full px-3 py-2 bg-gradient-to-b from-black">
      <img
        className="w-52"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
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
  );
};

export default Header;
