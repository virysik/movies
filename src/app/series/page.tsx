import List from "@/app/ui/series/list";
import { Box } from "@mui/material";
import { fetchConfig, fetchPopularSeries } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const series = await fetchPopularSeries(searchParams?.page || 1);
  const config = await fetchConfig();

  return (
    <Box component="main">
      <List series={series} config={config} />
    </Box>
  );
}
