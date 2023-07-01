import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/posts/";

const initialState = {
  posts: [],
  loading: false,
};

/** Async Functions for Comments:
 * - Get Posts (ALL)
 * - Add Post
 */

// Get Posts: () => [all posts]
export const getPosts = createAsyncThunk(
  // 1. action type string
  "posts/getPosts",
  // 2. callback function
  async (thunkAPI) => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// Add Post: (post) => {post}
export const addPost = createAsyncThunk(
  // 1. action type string
  "posts/addPost",
  // 2. callback function
  async (data, thunkAPI) => {
    const res = await axios.post(API_URL, data);
    return res.data;
  }
);

// slice
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [addPost.pending]: (state) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = [...state.posts, payload];
    },
    [addPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
