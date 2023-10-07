import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[19%] px-12 absolute text-white">
      <h1 className="text-6xl font-bold text-shadow-sm shadow-black">
        {title}
      </h1>
      <p className="py-6 text-lg w-1/3 text-shadow shadow-black max-h-52">
        {description}
      </p>
      <div>
        <button className="bg-white px-10 py-2 pb-3 rounded-md text-black font-medium text-xl hover:opacity-80">
          <svg className="w-6 h-6 inline mr-2">
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            ></path>
          </svg>
          Play
        </button>
        <button className="bg-gray-500 px-8 py-2 pb-3 ml-2 rounded-md font-medium text-xl bg-opacity-70 hover:bg-opacity-50">
          <svg className="w-6 h-6 inline mr-2">
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
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
