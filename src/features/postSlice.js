import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/posts/";

const initialState = {
  posts: [],
  loading: false,
};

export const getPosts = createAsyncThunk(
  // 1. action type string
  "posts/getPosts",
  // 2. callback function
  async (thunkAPI) => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

export const addPost = createAsyncThunk(
  // 1. action type string
  "posts/addPost",
  // 2. callback function
  async (data, thunkAPI) => {
    const res = await axios.post(API_URL, data);
    console.log(res);
    return res;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // addPost: (state, action) => {
    //   const newPost = action.payload;
    //   state.posts = { ...state.posts, [newPost.id]: newPost };
    // },
    // removePost: (state, action) => {
    //   const postId = action.payload;
    //   delete state.posts[postId];
    // },
  },
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

export const { removePost } = postSlice.actions;

// console.log(memeSlice);
// console.log(memeSlice.getInitialState());

export default postSlice.reducer;
