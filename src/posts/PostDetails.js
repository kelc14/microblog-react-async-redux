import React from "react";
import "./PostDetails.css";

const PostDetails = ({ post, handlePostEdit, handlePostDelete }) => {
  return (
    <div className="PostDetails">
      {" "}
      <h2 className="PostDetails-title">{post.title}</h2>
      <p className="PostDetails-description">{post.description}</p>
      <p className="PostDetails-body">{post.body}</p>
      <div className="PostDetails-btn-container">
        <button className="PostDetails-btn-edit" onClick={handlePostEdit}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="PostDetails-btn-delete" onClick={handlePostDelete}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
