export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_URL_SMALL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const BACKGROUND_URL_LARGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const DEFAULT_AVATAR =
  "https://occ-0-1492-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w200/";

export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const SERIES_AIRING_TODAY_URL =
  "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&without_genres=16";

export const POPULAR_SERIES_URL =
  "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&without_genres=16";

export const TOP_RATED_SERIES_URL =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&without_genres=16";

export const MOVIE_GENRE_LIST_URL =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

export const MOVIES_BY_GENRE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  process.env.REACT_APP_TMDB_KEY +
  "&page=2&with_genres=";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "हिंदी" },
  { identifier: "kn", name: "कन्नडा" },
  { identifier: "es", name: "Español" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
