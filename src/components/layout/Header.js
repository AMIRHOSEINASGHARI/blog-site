import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Link to={`/`} style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="h6" component="h1" fontWeight={700}>
              وبلاگ من
            </Typography>
          </Link>
          <Link to={`/`} style={{ textDecoration: "none", color: "#fff" }}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
