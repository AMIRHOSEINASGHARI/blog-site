import React, { useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogComments from "./BlogComments";

const CommentForm = ({ slug }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [isClicked, setIsClicked] = useState(false);
  const [createComment, { data, loading, errors }] = useMutation(
    CREATE_COMMENT,
    {
      variables: {
        name: input.name,
        email: input.email,
        text: input.text,
        slug,
      },
    }
  );
  const commentHandler = () => {
    if (input.name && input.email && input.text) {
      createComment();
      setIsClicked(true);
      setInput({
        name: "",
        email: "",
        text: "",
      });
    } else {
      toast.warn("لطفا موارد خواسته شده را کامل کنید", {
        position: "bottom-center",
      });
    }
  };
  if (data && isClicked) {
    toast.success("نظر شما ارسال شد و منتظر تایید می‌باشد", {
      position: "bottom-center",
    });
    setIsClicked(false);
  }
  if (!data && !loading && isClicked) {
    toast.error("ارسال نظر موفقیت‌آمیز نبود.لطفا بعدا امتحان کنید", {
      position: "bottom-center",
    });
  }
  return (
    <Grid container>
      <Grid item xs={12} mb={3}>
        <Divider textAlign="left">
          <Typography
            component="p"
            variant="h5"
            fontWeight={500}
            color="primary.main"
          >
            ارسال نظر
          </Typography>
        </Divider>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          boxShadow: "0 3px 8px rgba(0,0,0,0.13)",
          padding: "2rem",
          borderRadius: "7px",
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography component="p" variant="p" color="text.primary">
            پیش از ارسال نظر،لطفا نام کاربری و ایمل خود را وارد کنید
          </Typography>
        </Grid>
        <TextField
          value={input.name}
          name="name"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1.5rem" }}
        />
        <TextField
          value={input.email}
          name="email"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1.5rem" }}
        />
        <TextField
          value={input.text}
          name="text"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          label="نظر"
          variant="outlined"
          multiline
          minRows={5}
          sx={{ width: "100%", marginBottom: "1.5rem" }}
        />
        {loading ? (
          <Button variant="contained" size="large" disabled>
            در حال ارسال...
          </Button>
        ) : (
          <Button onClick={commentHandler} variant="contained" size="large">
            ارسال نظر
          </Button>
        )}
      </Grid>
      <BlogComments slug={slug} />
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
