import React from "react";
import "./CommentList.css";

/**
 * CommentList Component:
 *
 * Props:
 *
 * - comments for post (with id comments.post_id)
 * - handleCommentDelete => removes comment with id => comment.id
 *
 *
 * Renders: List of Comments with delete icon
 *
 */

const CommentList = ({ comments, handleCommentDelete }) => {
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
