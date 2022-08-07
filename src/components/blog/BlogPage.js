import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../Loader";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";

const BlogPage = () => {
  const { slug } = useParams();
  const { data, loading, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  const navigate = useNavigate();
  if (loading) return <Loader />;
  return (
    <Container maxWidth="lg" sx={{ minHeight: "1000px" }}>
      <Grid container padding={3}>
        <Grid
          item
          xs={12}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <Typography component="h6" variant="h6" color="primary.main">
            {data.post.title}
          </Typography>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            <ReplyRoundedIcon />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.title}
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "2rem",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "center", marginBottom: "4rem" }}
        >
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: "1rem" }}
          />
          <div>
            <Typography component="h5" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p">
              {data.post.author.field}
            </Typography>
          </div>
        </Grid>
        <Typography component="h4" variant="h4">
          {data.post.title}
        </Typography>
        <Grid item xs={12} mb={5}>
          <div
            style={{ textAlign: "justify", lineHeight: "30px" }}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <CommentForm slug={slug} />
      </Grid>
    </Container>
  );
};

export default BlogPage;
