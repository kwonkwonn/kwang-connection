import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./authSlice";

const confStore: any = () => {
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};

export const wrapper = createWrapper(confStore);
