import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostForm.css";
import { useDispatch } from "react-redux";
import { addPost } from "../features/postSlice";
import { editPostDetails } from "../features/singlePostSlice";

/** PostForm component
 *
 * - for rendering and updating posts
 *
 *  State: formData, setFormData
 *
 *
 */
const PostForm = ({ postData }) => {
  // if the blog post is being edited, set data as values in inputs
  const INITIAL_STATE = postData
    ? postData
    : {
        title: "",
        description: "",
        body: "",
      };

  const [formData, setFormData] = useState(INITIAL_STATE);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  /** Handle submission of form to post new blog */
  const handleSubmit = (event) => {
    event.preventDefault();
    !postData
      ? dispatch(addPost(formData))
      : dispatch(editPostDetails({ id: postData.id, data: formData }));
    navigate("/");
    setFormData(INITIAL_STATE);
  };

  /** Update local storage w/ current state of input elements */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="PostForm">
      <label htmlFor="title" className="PostForm-label">
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="PostForm-input"
        required
      />
      <label htmlFor="description" className="PostForm-label">
        Description:
      </label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="PostForm-input"
        required
      />
      <label htmlFor="body" className="PostForm-label">
        Body:
      </label>
      <textarea
        id="body"
        name="body"
        value={formData.body}
        onChange={handleChange}
        className="PostForm-input"
        required
      />
      <div className="PostForm-btn-container">
        {" "}
        <button className="PostForm-btn-submit PostForm-btn">Post</button>
        <button
          className="PostForm-btn-cancel PostForm-btn"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostForm;
