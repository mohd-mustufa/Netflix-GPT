import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    gptSearchText: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults, gptSearchText } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.gptSearchText = gptSearchText;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
