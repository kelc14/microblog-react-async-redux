import React from "react";
import PostForm from "./PostForm";
import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="NewPost">
      <h3 className="NewPost-heading">New Post</h3>
      <PostForm />
    </div>
  );
};

export default NewPost;
