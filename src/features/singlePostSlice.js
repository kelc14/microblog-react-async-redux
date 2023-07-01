import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/posts";

const initialState = {
  post: [],
  loading: false,
};

/** Async Functions for SinglePost:
 * - Get Post Details
 * - Edit Post
 * - Delete Post
 */

// Get Post Details: (id) => { post with post_id = id}
export const getPostDetails = createAsyncThunk(
  // 1. action type string
  "post/getPostDetails",
  // 2. callback function
  async (id, thunkAPI) => {
    const res = await axios.get(`${API_URL}/${id}`);
    console.log(res);
    return res.data;
  }
);

// editPostDetails (id, editedPost) => {post}
export const editPostDetails = createAsyncThunk(
  // 1. action type string
  "post/editPostDetails",
  // 2. callback function
  async (postDetails, thunkAPI) => {
    const { id, data } = postDetails;
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  }
);

// deletePost (id) => deleted
export const deletePostDetails = createAsyncThunk(
  // 1. action type string
  "post/deletePostDetails",
  // 2. callback function
  async (id, thunkAPI) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  }
);

//slice
export const singlePostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPostDetails.pending]: (state) => {
      state.loading = true;
    },
    [getPostDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = payload;
    },
    [getPostDetails.rejected]: (state) => {
      state.loading = false;
    },
    [editPostDetails.pending]: (state) => {
      state.loading = true;
    },
    [editPostDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = payload;
    },
    [editPostDetails.rejected]: (state) => {
      state.loading = false;
    },
    [deletePostDetails.pending]: (state) => {
      state.loading = true;
    },
    [deletePostDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = null;
    },
    [deletePostDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default singlePostSlice.reducer;
