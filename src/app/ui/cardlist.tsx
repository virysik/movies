"use client";
import { List as MuiList, styled } from "@mui/material";

export const CardList = styled(MuiList)(({ theme }) => ({
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
