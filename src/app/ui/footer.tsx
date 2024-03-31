import { Typography } from "@mui/material";
import React, { FC } from "react";
import { Container, FooterBox } from "@/app/ui/home";

const Footer: FC = () => {
  return (
    <FooterBox component="footer">
      <Container>
        <Typography>&#169; Copyright 2024</Typography>
      </Container>
    </FooterBox>
  );
};
export default Footer;
