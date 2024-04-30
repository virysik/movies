"use client";
import {
  List as MuiList,
  ListItem as MuiListItem,
  styled,
} from "@mui/material";

export const CardList = styled(MuiList)(({ theme }) => ({
  marginBottom: theme.spacing(6),
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

export const CardListItem = styled(MuiListItem)(({ theme }) => ({
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

export const MediaGridStyles = {
  display: "grid",
  gridTemplate: { xs: "1fr/1fr", md: "1fr/ 1fr 1fr" },
  gap: { xs: "24px", md: "32px" },
};

export const MediaImgBoxStyles = {
  borderRadius: "6px",
  overflow: "hidden",
};

export const ContentBoxStyles = {
  color: "text.primary",
  "& .back-link": {
    display: "block",
    maxWidth: "80px",
    padding: "8px 20px",
    marginLeft: { xs: "auto", md: "inherit" },
    textTransform: "uppercase",
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    borderRadius: "6px",
    transition: "background-color 250ms ease-in-out",
    "&:hover": {
      bgcolor: "primary.dark",
    },
  },
};
