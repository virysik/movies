import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchConfig, fetchMovieById, fetchSeriesById } from "@/app/lib/data";
import MovieById from "@/app/ui/series/seriebyid";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetchSeriesById(id);
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
