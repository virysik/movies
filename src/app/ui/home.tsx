"use client";

import {
  AppBar,
  AppBarProps,
  Box,
  Container as MuiContainer,
  ContainerProps,
  styled,
  Toolbar,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  // display: "grid",
  // gridTemplate: "auto 1fr 50px/ 1fr",
  color: "#121212",
  backgroundColor: theme.palette.background.default,
  // background: `linear-gradient(
  //   to bottom right,
  //   #221d93 0%,
  //   #4958ab 30%,
  //   #91ced8 100%)`,
}));

export const Container = styled(({ ...props }: ContainerProps) => (
  <MuiContainer {...props} />
))(({ theme }) => ({
  "&.MuiContainer-root": {
    maxWidth: "1206px",
    // [theme.breakpoints.down("xl")]: { maxWidth: "1200px" },
    // [theme.breakpoints.down("lg")]: { maxWidth: "900px" },
    // [theme.breakpoints.down("md")]: { maxWidth: "600px" },
  },
}));

export const HeaderAppBar = styled(({ ...props }: AppBarProps) => (
  <AppBar {...props} position="sticky" />
))(({ theme }) => ({
  alignItems: "center",
}));

export const HeaderLink = styled(({ ...props }: TypographyProps) => (
  <Typography
    {...props}
    style={{ paddingTop: "10px", paddingBottom: "10px" }}
  />
))({});

export const HeaderToolbar = styled(Toolbar)({
  gap: "10px",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

export const FooterBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));
