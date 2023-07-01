import React from "react";
import PostForm from "./PostForm";
import "./NewPost.css";

/** NewPost Component
 *
 * - Renders PostForm for New Post
 * == > no postData is passed as prop here to identify this is a NEW post
 *
 * */

const NewPost = () => {
  return (
    <div className="NewPost">
      <h3 className="NewPost-heading">New Post</h3>
      <PostForm />
    </div>
  );
};

export default NewPost;
