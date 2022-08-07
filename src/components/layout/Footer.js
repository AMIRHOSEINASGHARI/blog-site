import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        sx={{
          backgroundColor: "#f7f7f7",
          textAlign: "center",
          padding: "10px",
        }}
      >
        پروژه وبلاگ با GraphQL
      </Typography>
    </footer>
  );
};

export default Footer;
