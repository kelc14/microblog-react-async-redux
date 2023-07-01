import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/posts";

const initialState = {
  comments: [],
  commentsLoading: false,
};

/** Async Functions:
 * - Get Comments
 * - Add Comment
 * - Delete Comment
 */

// Get Comments: (id) => [all comments with post_id = id]
export const getComments = createAsyncThunk(
  // 1. action type string
  "comments/getComments",
  // 2. callback function
  async (id, thunkAPI) => {
    const res = await axios.get(`${API_URL}/${id}/comments`);
    console.log(res);
    return res.data;
  }
);

// AddComment - Add a New Comment with post_id = comment.post_id
//   (comment) => {comment}
export const addComment = createAsyncThunk(
  // 1. action type string
  "comments/addComment",
  // 2. callback function
  async (comment, thunkAPI) => {
    const res = await axios.post(
      `${API_URL}/${comment.post_id}/comments`,
      comment
    );
    return res.data;
  }
);

// Delete Comment with postId and commentId
// (postId, commentId) => commentId
export const deleteComment = createAsyncThunk(
  // 1. action type string
  "comments/deleteComment",
  // 2. callback function
  async (data, thunkAPI) => {
    const { postId, commentId } = data;
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);

    return commentId;
  }
);

// Slice
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state) => {
      state.commentsLoading = true;
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.commentsLoading = false;
      state.comments = payload;
    },
    [getComments.rejected]: (state) => {
      state.commentsLoading = false;
    },
    [addComment.pending]: (state) => {
      state.commentsLoading = true;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.commentsLoading = false;
      state.comments = [...state.comments, payload];
    },
    [addComment.rejected]: (state) => {
      state.commentsLoading = false;
    },
    [deleteComment.pending]: (state) => {
      state.commentsLoading = true;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.commentsLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
    },
    [deleteComment.rejected]: (state) => {
      state.commentsLoading = false;
    },
  },
});

export default commentsSlice.reducer;
