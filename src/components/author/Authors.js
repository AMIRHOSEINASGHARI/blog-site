import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h1>Error...</h1>;
  return (
    <Grid
      container
      sx={{
        boxShadow: "0 3px 8px rgba(0,0,0,0.13)",
        borderRadius: "10px",
      }}
    >
      {data.authors.map((author, index) => {
        const {
          avatar: { url },
          id,
          name,
          slug,
        } = author;
        return (
          <React.Fragment key={id}>
            <Grid item xs={12} padding={1}>
              <Link
                to={`/author/${slug}`}
                style={{
                  width: "100%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "15px",
                  }}
                >
                  <Avatar src={url} sx={{ marginLeft: "10px" }} />
                  <Typography component="p" variant="p">
                    {name}
                  </Typography>
                </Grid>
                {index < data.authors.length - 1 && (
                  <Grid item xs={12}>
                    <Divider variant="middle" />
                  </Grid>
                )}
              </Link>
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

export default Authors;
