"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchConfig } from "@/app/lib/data";
import {
  Box,
  ListItem as MuiListItem,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { PopularMovie } from "@/app/lib/definitions";
import { CardList } from "@/app/ui/cardlist";

const ListItem = styled(MuiListItem)(({ theme }) => ({
  "&:hover": {
    "& a": {
      textDecoration: `underline`,
      textDecorationColor: theme.palette.text.primary,
    },
    "& .MuiBox-root": {
      color: theme.palette.info.light,
    },
  },
  "& a:focus-visible": {
    outline: `3px solid ${theme.palette.success.light}`,
    borderRadius: "6px",
  },
}));

const CardImg: FC<{ movie: PopularMovie }> = ({ movie }) => {
  const { data: config } = useQuery({
    queryKey: ["config"],
    queryFn: fetchConfig,
  });
  const theme = useTheme();
  return (
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
        srcSet={`${config?.images.secure_base_url}${config?.images.poster_sizes[2]}${movie.poster_path} 185w,
        ${config?.images.secure_base_url}${config?.images.poster_sizes[3]}${movie.poster_path} 342w,
        ${config?.images.secure_base_url}${config?.images.poster_sizes[4]}${movie.poster_path} 500w,
         ${config?.images.secure_base_url}${config?.images.poster_sizes[5]}${movie.poster_path} 780w`}
        sizes="(min-width: 768px) calc((100% - 32px*3)/4), (min-width: 420px) calc((100% - 24px)/2), 100vw"
        src={`${config?.images.secure_base_url}${config?.images.poster_sizes[6]}${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
    </Box>
  );
};
export default function List() {
  const { data } = useQuery({
    queryKey: ["popular movies"],
    queryFn: fetchPopularMovies,
  });

  return data ? (
    <CardList>
      {data.results.map((movie) => (
        <ListItem key={movie.id} disablePadding sx={{ alignItems: "flex-end" }}>
          <Link
            href={`/${Number(movie.id)}`}
            style={{
              width: "100%",
            }}
          >
            <CardImg movie={movie} />
            <Typography
              component={"h3"}
              sx={{
                pt: "4px",
                // bgcolor: "primary.light",
                color: "text.primary",
              }}
              noWrap
            >
              {movie.title}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </CardList>
  ) : null;
}
