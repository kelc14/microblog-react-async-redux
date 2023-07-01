import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import singlePostReducer from "./features/singlePostSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    post: singlePostReducer,
    // features go on here
  },
});
