import { lusitana } from "@/app/ui/fonts";
import List from "@/app/ui/movies/list";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPopularMovies } from "@/app/lib/data";
import { Box } from "@mui/material";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["popular movies"],
    queryFn: fetchPopularMovies,
  });

  return (
    <Box component="main" sx={{ my: 2, outline: "1px solid red" }}>
      <h1 className={`${lusitana.className}`}>Movies:</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <List />
      </HydrationBoundary>
    </Box>
  );
}
