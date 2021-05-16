import React from "react";
import { useSelector } from 'react-redux';
import Post from "./Post/Post.js";
import useStyles from "./styles";

const Posts = () => {
  {/*In combineReducers we are exporting 'posts' so we write state.posts*/}
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
