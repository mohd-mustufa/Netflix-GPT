import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    seriesAiringToday: null,
    popularSeries: null,
    topRatedSeries: null,
    tvSeriesByGenre: null,
  },
  reducers: {
    addSeriesAiringToday: (state, action) => {
      state.seriesAiringToday = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addTvSeriesByGenre: (state, action) => {
      state.tvSeriesByGenre = action.payload;
    },
  },
});

export default tvSeriesSlice.reducer;
export const {
  addSeriesAiringToday,
  addPopularSeries,
  addTopRatedSeries,
  addTvSeriesByGenre,
} = tvSeriesSlice.actions;
