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

export const BackgroundWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

export const Container = styled(({ ...props }: ContainerProps) => (
  <MuiContainer {...props} />
))(({ theme }) => ({
  minHeight: "100%",
  display: "grid",
  gridTemplate: "minmax(54px, auto) 1fr minmax(64px, auto) / 1fr",
  gap: theme.spacing(6),
  "&.MuiContainer-root": {
    maxWidth: "1206px",
  },
}));

export const HeaderAppBar = styled(({ ...props }: AppBarProps) => (
  <AppBar {...props} position="sticky" />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0px 0px 6px 6px",
}));

export const HeaderLink = styled(({ ...props }: TypographyProps) => (
  <Typography
    {...props}
    style={{ paddingTop: "10px", paddingBottom: "10px" }}
  />
))(({ theme }) => ({
  fontSize: "16px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  gap: "10px",
  color: theme.palette.primary.contrastText,
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  borderRadius: "6px 6px 0px 0px",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));

export const HideOnMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
