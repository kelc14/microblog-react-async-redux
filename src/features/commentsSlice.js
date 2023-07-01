// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const API_URL = "http://localhost:5000/api/posts";

// const initialState = {
//   comments: [],
//   loading: false,
// };

// const getComments = createAsyncThunk(
//   // 1. action type string
//   "comments/getcomments",
//   // 2. callback function
//   async (thunkAPI) => {
//     const res = await axios.get(API_URL);
//     console.log(res);
//   }
// );

// const commentsSlice = createSlice({
//   name: "comments",
//   initialState,
//   reducers: {
//     addComment: (state, action) => {
//       const comment = action.payload;
//       let post = state.posts[comment.post_id];
//       post.comments.push(comment);
//       //   state.posts[comment.post_id] = post;
//       state.posts = { ...state.posts, [comment.post_id]: post };
//     },
//     removeComment: (state, action) => {
//       const [commentId, postId] = action.payload;
//       let post = state.posts[postId];
//       let newComments = post.comments.filter((item) => item.id !== commentId);
//       post.comments = newComments;
//       state.posts[postId] = post;
//     },
//   },
// });

// export const {} = commentsSlice.actions;

// // console.log(memeSlice);
// // console.log(memeSlice.getInitialState());

// export default commentsSlice.reducer;
