import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    mainMovieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    moviesByGenre: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMainMovieTrailer: (state, action) => {
      state.mainMovieTrailer = action.payload;
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
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addMainMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addMoviesByGenre,
} = moviesSlice.actions;
