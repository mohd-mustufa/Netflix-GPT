import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import moviesReducer from "../redux/moviesSlice";
import gptReducer from "../redux/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
