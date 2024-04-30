import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchConfig, fetchMovieById } from "@/app/lib/data";
import MovieById from "@/app/ui/movies/moviebyid";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetchMovieById(id);
  const config = await fetchConfig();

  if (!data) {
    notFound();
  }

  return (
    <Box component="main">
      <MovieById data={data} config={config} />
    </Box>
  );
}
