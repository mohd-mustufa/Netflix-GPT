import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div>
        <Header home={true} />
      </div>
      <div className="absolute z-10 h-screen w-screen">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        className="absolute w-screen h-screen z-20 flex flex-col justify-center text-center text-white"
      >
        <div>
          <h1 className="font-bold text-5xl">
            Unlimited Movies, TV Series and more
          </h1>
          <h2 className="m-2 text-3xl">Watch anywhere. Cancel at any time.</h2>
          <button
            className="cursor-pointer hover:underline text-2xl"
            onClick={() => navigate("/login")}
          >
            Click here to get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
