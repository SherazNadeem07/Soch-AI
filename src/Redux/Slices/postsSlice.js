import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const res = await fetch('/post.json');
    if (!res.ok) throw new Error('Failed to fetch posts');
    return await res.json();
  } catch (error) {
    throw error;
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addPost: (state, action) => {
    state.items.unshift(action.payload); 
  }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {addPost}=postsSlice.actions
export default postsSlice.reducer;