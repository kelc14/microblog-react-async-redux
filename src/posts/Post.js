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
// import { removePost } from "../features/postSlice";

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

  const { post, loading } = useSelector((store) => store.post);

  // fetch posts when site loads
  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const handlePostEdit = () => {
    setEditNow(true);
    // updating post is handled in the form
  };

  const handlePostDelete = () => {
    // delete the post from the backend
    dispatch(deletePostDetails(id));
    navigate("/");
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
          <CommentList comments={post.comments} />
          <NewCommentForm />
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
