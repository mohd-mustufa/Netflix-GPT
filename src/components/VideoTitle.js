import React from "react";

const VideoTitle = ({ title, name, description }) => {
  return (
    <div className="pt-[30%] md:pt-[19%] px-4 md:px-12 absolute text-white">
      <h1 className="text-2xl md:text-5xl font-bold text-shadow md:text-shadow-sm shadow-black">
        {title || name}
      </h1>
      <p className="hidden md:block py-6 text-lg w-1/3 text-shadow shadow-black max-h-52">
        {description}
      </p>
      <div>
        <button className="bg-white px-2 md:px-10 py-1 md:py-2 md:pb-3 rounded-md text-black font-medium text-sm md:text-xl hover:opacity-80">
          <svg className="hidden md:inline w-6 h-6 mr-2">
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg className="w-3 h-3 inline md:hidden mr-2">
            <path
              d="M1.4 0.955 C1.4 0.173 2.218 0 2.962 0.318 L13.625 4.634 C14.294 4.92 14.294 5.08 13.625 5.366 L2.962 9.682 C2.218 10 1.4 9.827 1.4 9.045 V0.955 Z"
              fill="currentColor"
            ></path>
          </svg>
          Play
        </button>
        <button className="bg-gray-500 px-2 md:px-8 py-1 md:py-2 md:pb-3 ml-2 rounded-md font-medium text-sm md:text-xl bg-opacity-70 hover:bg-opacity-50">
          <svg className="w-6 h-6 hidden md:inline mr-2">
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg className="w-5 h-5 inline md:hidden mr-2">
            <path
              d="M10 1.33333C5.05448 1.33333 1.33333 5.05448 1.33333 10C1.33333 14.9455 5.05448 18.6667 10 18.6667C14.9455 18.6667 18.6667 14.9455 18.6667 10C18.6667 5.05448 14.9455 1.33333 10 1.33333ZM0 10C0 4.74551 4.74551 0 10 0C15.2545 0 20 4.74551 20 10C20 15.2545 15.2545 20 10 20C4.74551 20 0 15.2545 0 10ZM11.3333 8.88889V16H9.33333V8.88889H11.3333ZM10 7C10.7375 7 11.3333 6.40421 11.3333 5.66667C11.3333 4.92913 10.7375 4.33333 10 4.33333C9.26247 4.33333 8.66667 4.92913 8.66667 5.66667C8.66667 6.40421 9.26247 7 10 7Z"
              fill="currentColor"
            ></path>
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
