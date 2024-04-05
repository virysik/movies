import { Typography } from "@mui/material";
import React, { FC } from "react";
import { FooterBox } from "@/app/ui/home";

const Footer: FC = () => {
  return (
    <FooterBox component="footer">
      <Typography>&#169; Copyright 2024</Typography>
    </FooterBox>
  );
};
export default Footer;
