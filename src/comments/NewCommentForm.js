import React, { useState } from "react";
import "./NewCommentForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

/**  NewCommentForm component
 *
 * - adds new comment for post with {id}
 *
 *  state: formData
 *
 */
const NewCommentForm = ({ id }) => {
  const INITIAL_STATE = { text: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** Update local storage w/ current state of input elements */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  /** Handle submitting new comment */
  const handleSubmit = (event) => {
    event.preventDefault();
    // add id to new comment
    const newComment = { ...formData, post_id: id, comment_id: uuid() };
    // // alert
    // newCommentAlert("success");
    // send new comment to backend to store
    // dispatch(addComment(newComment));
    navigate(`/${id}`);
    setFormData(INITIAL_STATE);
  };

  return (
    <form className="NewCommentForm" onSubmit={handleSubmit}>
      <input
        id="text"
        type="text"
        name="text"
        className="NewCommentForm-input"
        value={formData.text}
        onChange={handleChange}
        placeholder="Comment"
      />
      <button className="NewCommentForm-btn">Add</button>
    </form>
  );
};

export default NewCommentForm;
