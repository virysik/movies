export type PopularMovies = {
  page: number;
  results: PopularMovie[];
  total_pages: number;
  total_results: number;
};

export type PopularMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type PopularSeries = {
  page: number;
  results: PopularSerie[];
  total_pages: number;
  total_results: number;
};

export type PopularSerie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: number;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type ImgConfig = {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
};

export type Configuration = {
  images: ImgConfig;
  change_keys: string[];
};
