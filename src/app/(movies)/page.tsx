import List from "@/app/ui/movies/list";
import { fetchPopularMovies, fetchConfig } from "@/app/lib/data";
import { Box } from "@mui/material";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const movies = await fetchPopularMovies(searchParams?.page || 1);
  const config = await fetchConfig();

  return (
    <Box component="main">
      <List movies={movies} config={config} />
    </Box>
  );
}
