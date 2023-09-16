import { createSlice } from "@reduxjs/toolkit";

interface authInfo {
  walletAddress: null | string;
  provider: any;
}

const initialState: authInfo = {
  walletAddress: null,
  provider: null,
};

export const AuthSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    detectuser: (state) => {},
  },
});
