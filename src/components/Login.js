import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import validateFormData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const handleFormData = () => {
    const message = validateFormData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value,
      isSignInForm
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="min-h-screen min-w-screen w-full h-full object-cover object-center"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto my-36 px-16 py-10 w-[450px] h-[500px] absolute right-0 left-0 bg-black bg-opacity-80 text-white rounded-lg"
      >
        <h1 className="my-5 font-medium text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="px-4 py-3 my-2 w-full bg-neutral-700 rounded-s rounded-e"
            type="text"
            placeholder="Full Name"
            name="name"
            ref={name}
          />
        )}
        <input
          className="px-4 py-3 my-2 w-full bg-neutral-700 rounded-s rounded-e"
          type="text"
          placeholder="Email Address"
          name="email"
          ref={email}
        />
        <input
          className="px-4 py-3 my-2 w-full bg-neutral-700 rounded-s rounded-e"
          type="password"
          placeholder="Password"
          name="password"
          ref={password}
        />

        <p className="text-md font-medium text-red-500">{errorMessage}</p>

        <button
          className="px-4 py-4 my-4 w-full bg-red-600 rounded-s rounded-e"
          onClick={handleFormData}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <span className="text-neutral-500">
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
        </span>
        <button
          className="hover:underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "Sign Up now." : "Sign In now."}
        </button>
      </form>
    </div>
  );
};

export default Login;
