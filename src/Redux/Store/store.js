// import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from "../Slices/postsSlice"
// import themeReducer from "../Slices/themeSlice";

//  const store = configureStore({
//   reducer: {
//    posts: postsReducer,
//    theme: themeReducer
//   }
//  });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Slices/postsSlice";
import themeReducer from "../Slices/themeSlice";
import authReducer from '../Slices/auth/authSlice'

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import { combineReducers } from "redux";

// 1. Combine all reducers
const rootReducer = combineReducers({
  posts: postsReducer,
  theme: themeReducer,
});

// 2. Setup persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"], // only persist theme slice
};

// 3. Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Create store
const store = configureStore({
  reducer: persistedReducer,
});

// 5. Export persistor
export const persistor = persistStore(store);
export default store;