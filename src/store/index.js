import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { token: "" };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
