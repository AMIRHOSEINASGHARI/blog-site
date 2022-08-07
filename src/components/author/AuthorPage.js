import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../blog/CardEL";
import sanitizeHtml from "sanitize-html";
import Loader from "../Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  console.log(data);
  return (
    <>
      {data && (
        <Container maxWidth="lg">
          <Grid container padding={3}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4rem",
                marginBottom: "2rem",
              }}
            >
              <Avatar
                src={data.author.avatar.url}
                sx={{ width: "250px", height: "250px", marginBottom: "1rem" }}
              />
              <Typography component="h4" variant="h4">
                {data.author.name}
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                sx={{ fontWeight: "300" }}
              >
                {data.author.field}
              </Typography>
            </Grid>
            <Grid item mb={8}>
              <div
                style={{ textAlign: "justify", lineHeight: "30px" }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.author.description.html),
                }}
              ></div>
            </Grid>
            <Typography component="h4" variant="h4" mb={4}>
              مقالات {data.author.name}
            </Typography>
            <Grid container spacing={3} mb={3}>
              {data.author.posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <CardEL {...post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default AuthorPage;
