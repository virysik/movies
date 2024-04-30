"use client";

import { Box, Pagination, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  PopularMovie,
  PopularMovies,
  Configuration,
} from "@/app/lib/definitions";
import { CardList, CardListItem } from "@/app/ui/cardlist";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function CardImg({
  movie,
  config,
}: {
  movie: PopularMovie;
  config: Configuration;
}) {
  const { secure_base_url, poster_sizes } = config.images;
  const { poster_path, title } = movie;
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
        srcSet={`${secure_base_url}${poster_sizes[2]}${poster_path} 185w,
        ${secure_base_url}${poster_sizes[3]}${poster_path} 342w,
        ${secure_base_url}${poster_sizes[4]}${poster_path} 500w,
         ${secure_base_url}${poster_sizes[5]}${poster_path} 780w`}
        sizes="(min-width: 768px) calc((100% - 32px*3)/4), (min-width: 420px) calc((100% - 24px)/2), 100vw"
        src={`${secure_base_url}${poster_sizes[6]}${poster_path}`}
        alt={title}
        loading="lazy"
      />
    </Box>
  );
}
export default function List({
  movies,
  config,
}: {
  movies: PopularMovies;
  config: Configuration;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.push(`/${pathname}?${params.toString()}`);
  };

  return movies ? (
    <>
      <CardList>
        {movies.results.map((movie) => (
          <CardListItem
            key={movie.id}
            disablePadding
            sx={{ alignItems: "flex-end" }}
          >
            <Link
              href={`/${Number(movie.id)}`}
              style={{
                width: "100%",
              }}
            >
              <CardImg movie={movie} config={config} />
              <Typography
                component={"h3"}
                sx={{
                  pt: "4px",
                  color: "text.primary",
                }}
                noWrap
              >
                {movie.title}
              </Typography>
            </Link>
          </CardListItem>
        ))}
      </CardList>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={movies.total_pages}
          page={currentPage}
          onChange={handleChange}
        />
      </Box>
    </>
  ) : null;
}
