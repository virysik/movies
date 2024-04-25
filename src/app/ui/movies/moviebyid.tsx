import { Box, Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import {
  fetchPopularMovies,
  fetchConfig,
  fetchMovieById,
} from "@/app/lib/data";
import Link from "next/link";

export default async function MovieById({ id }: { id: string }) {
  const data = await fetchMovieById(id);
  const config = await fetchConfig();
  if (!data) {
    notFound();
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplate: { xs: "1fr/1fr", md: "1fr/ 1fr 1fr" },
        gap: { xs: "24px", md: "32px" },
      }}
    >
      <Box>
        <Box
          sx={{
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            srcSet={`${config?.images.secure_base_url}${config?.images.backdrop_sizes[0]}${data.backdrop_path} 300w,
          ${config?.images.secure_base_url}${config?.images.backdrop_sizes[1]}${data.backdrop_path} 780w,
          ${config?.images.secure_base_url}${config?.images.backdrop_sizes[2]}${data.backdrop_path} 1280w`}
            sizes="(min-width: 768px) calc(100%/2), 100vw"
            src={`${config?.images.secure_base_url}${config?.images.backdrop_sizes[3]}${data.backdrop_path}`}
            alt={data.title}
            loading="lazy"
          />
        </Box>
      </Box>
      <Box sx={{ color: "text.primary" }}>
        <Stack spacing={1} mb={4}>
          <Typography component="h2" variant="h4">
            {data.title}
          </Typography>
          <Typography
            sx={{ fontSize: "22px", fontWeight: 700, color: "primary.main" }}
          >
            {data.vote_average.toFixed(1)}
          </Typography>

          <Box>
            <Typography>
              Genres: {data.genres.map((e) => e.name).join(", ")}
            </Typography>
            <Typography>Release date: {data.release_date}</Typography>
            <Typography>Runtime: {data.runtime}</Typography>
            <Typography>Country: {data.origin_country.join(", ")}</Typography>

            <Typography>Vote count: {data.vote_count}</Typography>
            <Typography>Popularity: {data.popularity.toFixed()}</Typography>
          </Box>
          {data.homepage && (
            <MuiLink href={data.homepage} target="_blank">
              homepage
            </MuiLink>
          )}
          {data.tagline && <Typography>{data.tagline}</Typography>}

          <Typography>{data.overview}</Typography>
        </Stack>
        <MuiLink
          href="/"
          sx={{
            display: "block",
            maxWidth: "80px",
            p: "8px 20px",
            ml: { xs: "auto", md: "inherit" },
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            borderRadius: "6px",
            transition: "background-color 250ms ease-in-out",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          Go Back
        </MuiLink>
      </Box>
    </Box>
  );
}
