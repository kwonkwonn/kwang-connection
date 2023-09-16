import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const confStore: any = () => {
  configureStore({
    reducer: {},
  });
};

export const wrapper = createWrapper(confStore);
