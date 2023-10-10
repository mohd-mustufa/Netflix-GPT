import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_URL_SMALL } from "../utils/constants";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const langId = useSelector((store) => store.config.language);

  return (
    <div className="relative">
      <div>
        <Header home={true} />
      </div>
      <div className="fixed z-10 h-screen w-screen">
        <img
          alt="background"
          src={BACKGROUND_URL_SMALL}
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
          <h1 className="m-2 font-bold text-3xl md:text-5xl">
            {language[langId].homePageMainHeader}
          </h1>
          <h2 className="m-2 text-xl md:text-3xl">
            {language[langId].homePageSubHeader}
          </h2>
          <button
            className="py-3 px-8 m-3 min-w-[12rem] font-medium text-xl text-white bg-red-600 rounded-md cursor-pointer"
            onClick={() =>
              navigate("/login", {
                state: {
                  home: true,
                },
              })
            }
          >
            {language[langId].getStarted}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
