"use client";

import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Configuration, Movie } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import {
  MediaGridStyles,
  MediaImgBoxStyles,
  ContentBoxStyles,
} from "@/app/ui/cardlist";

export default function MovieById({
  data,
  config,
}: {
  data: Movie;
  config: Configuration;
}) {
  const router = useRouter();
  const { secure_base_url, backdrop_sizes } = config.images;
  const { backdrop_path, title } = data;

  return (
    <Box sx={MediaGridStyles}>
      <Box>
        <Box sx={MediaImgBoxStyles}>
          <img
            style={{
              width: "100%",
            }}
            srcSet={`${secure_base_url}${backdrop_sizes[0]}${backdrop_path} 300w,
          ${secure_base_url}${backdrop_sizes[1]}${backdrop_path} 780w,
          ${secure_base_url}${backdrop_sizes[2]}${backdrop_path} 1280w`}
            sizes="(min-width: 768px) calc(100%/2), 100vw"
            src={`${secure_base_url}${backdrop_sizes[3]}${backdrop_path}`}
            alt={title}
            loading="lazy"
          />
        </Box>
      </Box>
      <Box sx={ContentBoxStyles}>
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
        <Link href={"/"} className="back-link" onClick={() => router.back()}>
          Go Back
        </Link>
      </Box>
    </Box>
  );
}
