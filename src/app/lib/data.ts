import { unstable_noStore as noStore } from "next/cache";
import axios, { AxiosResponse } from "axios";
import {
  Configuration,
  Movie,
  PopularMovies,
  PopularSeries,
} from "@/app/lib/definitions";

const BASE_URL = process.env.BASE_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export async function fetchConfig() {
  noStore();
  try {
    const { data }: AxiosResponse<Configuration> = await axios.get(
      "configuration"
    );
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch config");
  }
}

export async function fetchPopularMovies() {
  noStore();

  const { data }: AxiosResponse<PopularMovies> = await axios.get(
    "movie/popular?language=en-US&page=1"
  );
  return data;
}

export async function fetchPopularSeries() {
  noStore();

  const { data }: AxiosResponse<PopularSeries> = await axios.get(
    "tv/popular?language=en-US&page=1"
  );
  return data;
}

export async function fetchMovieById(id: string) {
  noStore();
  try {
    const { data }: AxiosResponse<Movie> = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch movie");
  }
}

const movieById = {
  adult: false,
  backdrop_path: "/87IVlclAfWL6mdicU1DDuxdwXwe.jpg",
  belongs_to_collection: {
    id: 726871,
    name: "Dune Collection",
    poster_path: "/wcVafar6Efk3YgFvh8oZQ4yHL6H.jpg",
    backdrop_path: "/ygVSGv86R0BTOKJIb8RQ1sFxs4q.jpg",
  },
  budget: 190000000,
  genres: [
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 12,
      name: "Adventure",
    },
  ],
  homepage: "https://www.dunemovie.com",
  id: 693134,
  imdb_id: "tt15239678",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Dune: Part Two",
  overview:
    "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
  popularity: 2101.535,
  poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  production_companies: [
    {
      id: 923,
      logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
      name: "Legendary Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2024-02-27",
  revenue: 695792913,
  runtime: 167,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Long live the fighters.",
  title: "Dune: Part Two",
  video: false,
  vote_average: 8.285,
  vote_count: 3246,
};
