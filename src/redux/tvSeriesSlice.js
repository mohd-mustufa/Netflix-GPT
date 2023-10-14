import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    seriesAiringToday: null,
    popularSeries: null,
    topRatedSeries: null,
    mainSeriesTrailer: null,
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
    addMainSeriesTrailer: (state, action) => {
      state.mainSeriesTrailer = action.payload;
    },
  },
});

export default tvSeriesSlice.reducer;
export const {
  addSeriesAiringToday,
  addPopularSeries,
  addTopRatedSeries,
  addMainSeriesTrailer,
} = tvSeriesSlice.actions;
