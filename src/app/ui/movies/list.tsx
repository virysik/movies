"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchConfig } from "@/app/lib/data";
import {
  Box,
  List as MuiList,
  ListItem as MuiListItem,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { PopularMovie } from "@/app/lib/definitions";

const GridList = styled(MuiList)(({ theme }) => ({
  padding: 0,
  display: "grid",
  gap: theme.spacing(4),
  gridTemplateColumns:
    "repeat(auto-fit, minmax(100px, calc((100% - 32px*3)/4)))",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns:
      "repeat(auto-fit, minmax(100px, calc((100% - 24px)/2)))",
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns:
      "repeat(auto-fit, minmax(100px, calc((100% - 0px)/1)))",
  },
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({}));

const MovieImg: FC<{ movie: PopularMovie }> = ({ movie }) => {
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
        boxShadow: `0 4px 24px ${theme.palette.secondary.light}`,
      }}
    >
      <img
        style={{
          width: "100%",
        }}
        srcSet={`${config?.images.secure_base_url}${config?.images.backdrop_sizes[0]}${movie.backdrop_path} 300w,
        ${config?.images.secure_base_url}${config?.images.backdrop_sizes[1]}${movie.backdrop_path} 780w,
       ${config?.images.secure_base_url}${config?.images.backdrop_sizes[2]}${movie.backdrop_path} 1280w`}
        sizes="(min-width: 768px) calc((100% - 32px*3)/4), (min-width: 420px) calc((100% - 24px)/2), 100vw"
        src={`${config?.images.secure_base_url}${config?.images.backdrop_sizes[3]}${movie.backdrop_path}`}
        alt={movie.title}
        loading="lazy"
      />

      <Typography
        component={"h3"}
        sx={{
          bgcolor: "primary.light",
          color: "secondary.dark",
        }}
        noWrap
      >
        {movie.title}
      </Typography>
    </Box>
  );
};
export default function List() {
  const { data } = useQuery({
    queryKey: ["popular movies"],
    queryFn: fetchPopularMovies,
  });

  return data ? (
    <GridList>
      {data.results.map((movie) => (
        <ListItem key={movie.id} disablePadding>
          <Link
            href="/"
            style={{
              width: "100%",
            }}
          >
            <MovieImg movie={movie} />
          </Link>
        </ListItem>
      ))}
    </GridList>
  ) : null;
}
