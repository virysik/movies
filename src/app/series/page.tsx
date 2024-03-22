import { lusitana } from "@/app/ui/fonts";
import List from "@/app/ui/series/list";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPopularSeries } from "@/app/lib/data";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["popular series"],
    queryFn: fetchPopularSeries,
  });

  return (
    <main>
      <h1 className={`${lusitana.className}`} style={{ marginBottom: "2rem" }}>
        Series:
      </h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <List />
      </HydrationBoundary>
    </main>
  );
}
