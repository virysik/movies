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

export const Container = styled(({ ...props }: ContainerProps) => (
  <MuiContainer {...props} />
))(({ theme }) => ({
  minHeight: "100vh",
  display: "grid",
  gridTemplate: "minmax(54px, auto) 1fr minmax(64px, auto) / 1fr",
  gap: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  "&.MuiContainer-root": {
    maxWidth: "1206px",
  },
}));

export const HeaderAppBar = styled(({ ...props }: AppBarProps) => (
  <AppBar {...props} position="sticky" />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.info.dark,
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

export const HeaderToolbar = styled(Toolbar)({
  justifyContent: "space-between",
  gap: "10px",
});

export const FooterBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  borderRadius: "6px 6px 0px 0px",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.primary.main,
}));

export const HideOnMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
