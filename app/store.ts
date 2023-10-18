import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/Functions/AuthStateManage/AuthSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      Auth: authSlice,
    },
  });

export const wrapper = createWrapper(makeStore);
