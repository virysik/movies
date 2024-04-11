import List from "@/app/ui/movies/list";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPopularMovies, fetchConfig } from "@/app/lib/data";
import { Box } from "@mui/material";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["popular movies"],
    queryFn: fetchPopularMovies,
  });
  await queryClient.prefetchQuery({
    queryKey: ["config"],
    queryFn: fetchConfig,
  });

  return (
    <Box component="main">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <List />
      </HydrationBoundary>
    </Box>
  );
}
