import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLogged: false,
  username: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isLogged = true;
      state.id = action.payload.id;
    },
  },
});

export const { loginUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
