import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//local
import PostDetails from "./PostDetails";
import PostForm from "./PostForm";
import CommentList from "../comments/CommentList";
import NewCommentForm from "../comments/NewCommentForm";
import "./Post.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import { deletePostDetails, getPostDetails } from "../features/singlePostSlice";
import {
  getComments,
  deleteComment,
  addComment,
} from "../features/commentsSlice";

/** Post component
 *
 * => initiates API call to retrieve post details based on ID from redux, gets post and associated comments from redux store
 *
 * handles:
 * - editing post
 * - deleting post
 * - adding comments
 * - deleting comments
 *
 * => if editing = true:
 *          - renders: PostForm
 *
 *
 * => if editing = false:
 *          -renders:
 *          PostDetails, CommentList, NewCommentForm
 *
 *
 */

const Post = () => {
  const { id } = useParams();
  const [editNow, setEditNow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // fetch posts when site loads
  useEffect(() => {
    dispatch(getPostDetails(id));
    dispatch(getComments(id));
  }, [dispatch, id]);

  const { post, loading } = useSelector((store) => store.post);
  const { comments, commentsLoading } = useSelector((store) => store.comments);

  const handlePostEdit = () => {
    setEditNow(true);
    // updating post is handled in the form
  };

  const handlePostDelete = () => {
    // delete the post from the backend
    dispatch(deletePostDetails(id));
    navigate("/");
  };

  const handleCommentAdd = (comment) => {
    dispatch(addComment(comment));
  };

  const handleCommentDelete = (commentId) => {
    dispatch(deleteComment({ postId: id, commentId: commentId }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="Post">
      {!editNow && (
        <>
          <PostDetails
            post={post}
            handlePostEdit={handlePostEdit}
            handlePostDelete={handlePostDelete}
          />
          {commentsLoading ? (
            <p>Comments Loading...</p>
          ) : (
            <>
              <CommentList
                comments={comments}
                handleCommentDelete={handleCommentDelete}
              />
              <NewCommentForm id={id} handleCommentAdd={handleCommentAdd} />
            </>
          )}
        </>
      )}

      {editNow && (
        <div className="PostDetails">
          <h3 className="NewPost-heading">Edit Post</h3>
          <PostForm postData={post} />{" "}
        </div>
      )}
    </div>
  );
};

export default Post;
