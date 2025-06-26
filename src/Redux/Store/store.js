import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Slices/postsSlice";
import themeReducer from "../Slices/themeSlice";
import authReducer from '../Slices/auth/authSlice'

 const store = configureStore({
  reducer: {
   posts: postsReducer,
   theme: themeReducer,
   auth: authReducer,
  }
 });

export default store;

