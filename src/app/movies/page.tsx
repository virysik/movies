import { lusitana } from "@/app/ui/fonts";
import List from "@/app/ui/movies/list";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPopularMovies } from "@/app/lib/data";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["popular movies"],
    queryFn: fetchPopularMovies,
  });

  return (
    <main>
      <h1 className={`${lusitana.className}`} style={{ marginBottom: "2rem" }}>
        Movies:
      </h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <List />
      </HydrationBoundary>
    </main>
  );
}
