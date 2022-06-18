import { createSlice } from "@reduxjs/toolkit";
export const postSlide = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});
export const { createPost } = postSlide.actions;
export default postSlide.reducer;
