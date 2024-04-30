"use client";

import { Box, Pagination, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  PopularSeries,
  Configuration,
  PopularSerie,
} from "@/app/lib/definitions";
import { CardList, CardListItem } from "@/app/ui/cardlist";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function CardImg({
  serie,
  config,
}: {
  serie: PopularSerie;
  config: Configuration;
}) {
  const { secure_base_url, poster_sizes } = config.images;
  const { poster_path, name } = serie;
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
        alt={name}
        loading="lazy"
      />
    </Box>
  );
}

export default function List({
  series,
  config,
}: {
  series: PopularSeries;
  config: Configuration;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return series ? (
    <>
      <CardList>
        {series.results.map((serie) => (
          <CardListItem
            key={serie.id}
            disablePadding
            sx={{ alignItems: "flex-end" }}
          >
            <Link
              href={`/series/${Number(serie.id)}`}
              style={{
                width: "100%",
              }}
            >
              <CardImg serie={serie} config={config} />
              <Typography
                component={"h3"}
                sx={{
                  pt: "4px",
                  color: "text.primary",
                }}
                noWrap
              >
                {serie.name}
              </Typography>
            </Link>
          </CardListItem>
        ))}
      </CardList>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={series.total_pages}
          page={currentPage}
          onChange={handleChange}
        />
      </Box>
    </>
  ) : null;
}
