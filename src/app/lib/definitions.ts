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

export type Genre = {
  id: number;
  name: string;
};

export type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type ProdCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProdCountries = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLang = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProdCompanies[];
  production_countries: ProdCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLang[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type SeriesCreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
};

type SeriesLastEpisode = {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string | null;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

type SerieNetwork = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type SeriesSeason = {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string | null;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type Series = {
  adult: boolean;
  backdrop_path: string;
  created_by: SeriesCreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: SeriesLastEpisode;
  name: string;
  next_episode_to_air: string | null;
  networks: SerieNetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProdCompanies[];
  production_countries: ProdCountries[];
  seasons: SeriesSeason[];
  spoken_languages: SpokenLang[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};
