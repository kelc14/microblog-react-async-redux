import React, { useEffect, useState } from "react";
import NewCommentForm from "./NewCommentForm";
import { useDispatch, useSelector } from "react-redux";

import "./CommentList.css";

const CommentList = ({ comments, handleCommentDelete }) => {
  // instead of passing post down, what if we get it from the store using the id, then store alerts in state - add a new alert when a new comment is successfully added - > can also use an alert after post is successfully edited.

  return (
    <div className="CommentList">
      <h3 className="CommentList-heading">Comments</h3>
      {comments.length === 0 && (
        <>
          <p className="CommentList-comment">
            Be the first to leave a comment.
          </p>
        </>
      )}
      {comments &&
        comments.map((comment) => (
          <div className="CommentList-comment-container" key={comment.id}>
            <button
              className="CommentList-delete"
              onClick={() => handleCommentDelete(comment.id)}
            >
              ❌
            </button>
            <p className="CommentList-comment">{comment.text}</p>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
