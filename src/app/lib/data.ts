import { unstable_noStore as noStore } from "next/cache";
import axios, { AxiosResponse } from "axios";
import {
  Configuration,
  Movie,
  PopularMovies,
  PopularSeries,
  Series,
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

export async function fetchPopularMovies(page: number) {
  noStore();
  try {
    const { data }: AxiosResponse<PopularMovies> = await axios.get(
      `movie/popular?language=en-US&page=${page}`
    );
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function fetchPopularSeries(page: number) {
  noStore();
  try {
    const { data }: AxiosResponse<PopularSeries> = await axios.get(
      `tv/popular?language=en-US&page=${page}`
    );
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tv series");
  }
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

export async function fetchSeriesById(id: string) {
  noStore();
  try {
    const { data }: AxiosResponse<Series> = await axios.get(`tv/${id}`);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch series");
  }
}
