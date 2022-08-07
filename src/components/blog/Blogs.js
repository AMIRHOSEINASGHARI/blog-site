import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "./CardEL";
import Loader from "../Loader";

const Blogs = () => {
  const { data, loading, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <React.Fragment key={post.id}>
          <Grid item xs={12} sm={6} md={4}>
            <CardEL {...post} />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Blogs;
