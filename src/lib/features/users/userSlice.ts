import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo:
    typeof window !== "undefined"
      ? window.localStorage.getItem("userInfo")
      : false,
};
export const userTaskSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (state.userInfo == null) {
        localStorage.setItem("userInfo", action.payload);
        state.userInfo = localStorage.getItem("userInfo");
      }
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});
export const { addUser, removeUser } = userTaskSlice.actions;
export const selectTask = (state: RootState) => state.user;
export default userTaskSlice.reducer;
