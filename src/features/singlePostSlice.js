import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/posts";

const initialState = {
  post: [],
  loading: false,
};

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

export const singlePostSlice = createSlice({
  name: "post",
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
  },
});

// export const { addPost, removePost } = postSlice.actions;

// console.log(memeSlice);
// console.log(memeSlice.getInitialState());

export default singlePostSlice.reducer;
