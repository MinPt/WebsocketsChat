import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    add: () => {},
  },
  extraReducers: {},
});
