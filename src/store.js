import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import singlePostReducer from "./features/singlePostSlice";
import commentsSlice from "./features/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    post: singlePostReducer,
    comments: commentsSlice,
  },
});
