import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { token: "", userName: "" };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;

export default store;
