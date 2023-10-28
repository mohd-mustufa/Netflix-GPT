import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    moviesByGenre: null,
    trailerVideoData: null,
    moviesGenreList: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addMoviesByGenre: (state, action) => {
      state.moviesByGenre = action.payload;
    },
    addTrailerVideoData: (state, action) => {
      state.trailerVideoData = action.payload;
    },
    addMovieGenreList: (state, action) => {
      state.moviesGenreList = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addMoviesByGenre,
  addTrailerVideoData,
  addMovieGenreList,
} = moviesSlice.actions;
