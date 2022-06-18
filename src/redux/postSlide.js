import { createSlice } from "@reduxjs/toolkit";
import storeContent from "../db/storeContent";
export const postSlide = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: storeContent.get().title,
        description: storeContent.get().description,
        tag: storeContent.get().tag,
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});
export const { createPost } = postSlide.actions;
export default postSlide.reducer;
