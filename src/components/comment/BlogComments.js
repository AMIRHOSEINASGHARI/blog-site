import { useQuery } from "@apollo/client";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_BLOG_COMMENTS } from "../../graphql/queries";

const BlogComments = ({ slug }) => {
  const { data, loading, errors } = useQuery(GET_BLOG_COMMENTS, {
    variables: {
      slug,
    },
  });
  console.log(data);
  return (
    <Grid item xs={12}>
      <Grid item xs={12} mt={5} mb={3}>
        <Divider textAlign="left">
          <Typography
            component="p"
            variant="h5"
            fontWeight={500}
            color="primary.main"
          >
            تعداد نظرات:{" "}
            <span style={{ color: "#000" }}>
              {data ? data.comments.length : "0"}
            </span>{" "}
            نظر
          </Typography>
        </Divider>
      </Grid>
      {data && (
        <Grid
          item
          xs={12}
          sx={{
            borderRadius: "7px",
          }}
        >
          {data.comments.map((comment) => {
            const { id, name, text } = comment;
            return (
              <Box
                key={id}
                component="div"
                sx={{
                  border: "1px solid silver",
                  padding: "1rem",
                  borderRadius: "5px",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Avatar sx={{ marginLeft: "0.5rem" }}>{name[0]}</Avatar>
                  <Typography component="h6" variant="h6" color="primary.main">
                    {name}
                  </Typography>
                </div>
                <Typography component="p" variant="p">
                  {text}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};

export default BlogComments;
