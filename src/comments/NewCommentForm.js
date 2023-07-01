import React, { useState } from "react";
import "./NewCommentForm.css";
import { useNavigate } from "react-router-dom";

/**  NewCommentForm component
 *
 * Props: id (post_id), handleCommentAdd
 *
 * - adds new comment for post with {id}
 *
 *  state: formData
 *
 * Renders: form to add a new comment
 *
 */
const NewCommentForm = ({ id, handleCommentAdd }) => {
  const INITIAL_STATE = { text: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  /** Update local storage w/ current state of input elements */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  /** Handle submitting new comment */
  const handleSubmit = (event) => {
    event.preventDefault();
    // add post_id to new comment
    const newComment = { ...formData, post_id: id };
    // add comment
    handleCommentAdd(newComment);
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
        required
      />
      <button className="NewCommentForm-btn">Add</button>
    </form>
  );
};

export default NewCommentForm;
