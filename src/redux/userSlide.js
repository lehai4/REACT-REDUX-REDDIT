import { createSlice } from "@reduxjs/toolkit";
import storage from "../db/storage";
// const initState = {
//   name: storage.get().name,
//   age: storage.get().age,
//   about: storage.get().about,
//   avaUrl: storage.get().avaUrl,
//   themeColor: storage.get().themeColor,
//   loading: false,
//   error: false,
// };
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: storage.get().name,
    age: storage.get().age,
    about: storage.get().about,
    avaUrl: storage.get().avaUrl,
    themeColor: storage.get().themeColor,
  },
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
