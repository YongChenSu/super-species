import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducer/postReducer";

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});
