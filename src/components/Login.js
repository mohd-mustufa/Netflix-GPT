import React, { useRef, useState } from "react";
import Header from "./Header";
import validateFormData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND_URL_LARGE, DEFAULT_AVATAR } from "../utils/constants";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const alreadyRegistered = location.state?.home ? false : true;
  const [isSignInForm, setIsSignInForm] = useState(alreadyRegistered);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const dispatch = useDispatch();

  const handleFormData = () => {
    const message = validateFormData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value,
      isSignInForm
    );
    setErrorMessage(message);

    // if form data is invalid and return w/o sign-in or sign-up
    if (message) return;

    if (!isSignInForm) {
      // Sign-Up
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: DEFAULT_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign-In
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  // Function to change the signin form to signup form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src={BACKGROUND_URL_LARGE}
          className="object-cover object-center w-screen h-screen"
        />
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.7) 100%)",
        }}
        className="absolute w-full h-full"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto my-36 px-16 py-10 w-[450px] h-[500px] absolute right-0 left-0 bg-black bg-opacity-80 text-white rounded-lg"
        >
          <h1 className="my-5 text-4xl font-medium">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              className="w-full px-4 py-3 my-2 bg-neutral-700 rounded-s rounded-e"
              type="text"
              placeholder="Full Name"
              name="name"
              ref={name}
            />
          )}
          <input
            className="w-full px-4 py-3 my-2 bg-neutral-700 rounded-s rounded-e"
            type="text"
            placeholder="Email Address"
            name="email"
            ref={email}
          />
          <input
            className="w-full px-4 py-3 my-2 bg-neutral-700 rounded-s rounded-e"
            type="password"
            placeholder="Password"
            name="password"
            ref={password}
          />

          <p className="font-medium text-red-500 text-md">{errorMessage}</p>

          <button
            className="w-full px-4 py-4 my-4 bg-red-600 rounded-s rounded-e"
            onClick={handleFormData}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <span className="text-neutral-500">
            {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          </span>
          <button
            className="cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
