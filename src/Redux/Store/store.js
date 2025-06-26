import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Slices/postsSlice"
import themeReducer from "../Slices/themeSlice";

 const store = configureStore({
  reducer: {
   posts: postsReducer,
   theme: themeReducer
  }
 });

export default store;

