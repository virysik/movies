"use client";

import {
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
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  backgroundColor: theme.palette.background.default,

  "&.MuiContainer-root": {
    maxWidth: "1206px",
  },
}));

export const HeaderLink = styled(({ ...props }: TypographyProps) => (
  <Typography
    {...props}
    style={{ paddingTop: "10px", paddingBottom: "10px" }}
  />
))({});

export const HeaderToolbar = styled(Toolbar)({
  justifyContent: "space-between",
  gap: "10px",
});

export const FooterBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));

export const HideOnMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
