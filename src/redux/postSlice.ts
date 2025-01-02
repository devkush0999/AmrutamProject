import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  user?: string;
  question?: string;
  thought?: string;
  likes: number;
  comments?: number;
  saved: boolean;
}

const initialState: Post[] = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<number>) => {
      const post = state.find((p) => p.id === action.payload);
      if (post) post.likes += 1;
    },
    savePost: (state, action: PayloadAction<number>) => {
      const post = state.find((p) => p.id === action.payload);
      if (post) post.saved = !post.saved;
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      return action.payload;
    },
  },
});

export const { likePost, savePost, setPosts } = postSlice.actions;
export default postSlice.reducer;
