import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    gptSearchText: null,
    noResult: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setGptSearchTrue: (state, action) => {
      state.showGptSearch = true;
    },
    setGptSearchFalse: (state, action) => {
      state.showGptSearch = false;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults, gptSearchText, noResult } =
        action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.gptSearchText = gptSearchText;
      state.noResult = noResult;
    },
  },
});

export default gptSlice.reducer;
export const {
  toggleGptSearchView,
  setGptSearchTrue,
  setGptSearchFalse,
  addGptMovieResults,
} = gptSlice.actions;
