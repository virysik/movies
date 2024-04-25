import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import {
  fetchPopularMovies,
  fetchConfig,
  fetchMovieById,
} from "@/app/lib/data";
import MovieById from "@/app/ui/movies/moviebyid";
import { Suspense } from "react";
import { OneMovieSkeleton } from "@/app/ui/skeletons";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <Box component="main">
      <Suspense fallback={<OneMovieSkeleton />}>
        <MovieById id={id} />
      </Suspense>
    </Box>
  );
}
