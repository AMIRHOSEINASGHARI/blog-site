import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg" >
      <Grid container spacing={2} p={3}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" fontWeight={700} mb={4}>
            نویسنده‌ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h3" variant="h5" fontWeight={700} mb={4}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
