import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardEL = ({ author, coverPhoto: { url }, id, slug, title }) => {
  return (
    <Card sx={{ boxShadow: "0 3px 8px rgba(0,0,0,0.13)" }}>
      {author && (
        <Link
          to={`/author/${author.slug}`}
          style={{ width: "100%", textDecoration: "none", color: "black" }}
        >
          <CardHeader
            title={<Typography component="p">{author.name}</Typography>}
            avatar={
              <Avatar sx={{ marginLeft: "10px" }} src={author.avatar.url} />
            }
          />
        </Link>
      )}
      <CardMedia component="img" image={url} alt={title} />
      <CardContent>
        <Typography component="h6" variant="h6">
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ marginBottom: "5px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button variant="outlined" size="small" sx={{ width: "100%" }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEL;
