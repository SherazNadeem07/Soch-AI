import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../../service/themeSlice";

 const store = configureStore({
  reducer: {
   theme: themeReducer,

  },
});

export default store

