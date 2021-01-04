import { createSlice } from "@reduxjs/toolkit";

let nextPostId = 0;

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return { payload: { id: nextPostId++, comment: text, replies: [] } };
      },
    },
    deletePost: (state, action) => {
      const postIndex = state.findIndex((post) => post.id === action.payload);
      state.splice(postIndex, 1);
    },
    addReply: (state, action) => {
      const { id, text } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.replies.push(text);
      }
    },
  },
});

export const { addPost, deletePost, addReply } = postSlice.actions;
export default postSlice.reducer;
