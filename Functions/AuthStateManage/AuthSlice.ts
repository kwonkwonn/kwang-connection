import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { JsonRpcSigner } from "/Users/taekyoung/Desktop/kwangWoonMeeting/front/kwang-connection/node_modules/ethers/src.ts/providers/provider-jsonrpc";

interface walletInfo {
  walletAddress: string;
  provider: string;
}

const initialState: walletInfo = {
  walletAddress: "",
  provider: "",
};

export const AuthSlice = createSlice({
  name: "metaAuth",
  initialState,
  reducers: {
    connectMetamask: () => {},
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const connectMetamask = createAsyncThunk(
  "metaAuth/connect",
  async (getState: any) => {
    try {
      let signer: any | JsonRpcSigner;
      let provider;

      provider = new ethers.BrowserProvider(window.ethereum);
      let accounts = await provider.send("eth_requestAccounts", []);
      let account = accounts[0];
      signer = await provider
        .getSigner()
        .then((response: any) => {
          if (!response) {
            throw new Error("failed to login");
          } else {
            getState.walletAddress = response.address;
            return response;
          }
        })
        .then(async (data: any) => {
          console.log(data);
          return data;
        })
        .catch((err: Error) => {
          console.log(err);
          return false;
        });
      const [message, signedMessage] = await signAndReturn(
        signer.address,
        signer
      );
      await fetchUser(signer.address, message, signedMessage);
    } catch {
      throw Error("fetch failed");
    }
  }
);

async function fetchUser(
  walletAddress: string,
  message: string,
  signedMessage: string
) {
  const dataToPut = {
    walletAddress,
    message,
    signedMessage,
  };
  console.log(dataToPut);
  await fetch("http://localhost:3002/users/newUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPut),
  }).then(() => {
    window.location.replace("/Main");
  });
}

async function getnonce() {
  const nonce = await fetch("http://localhost:3002/api/nonce")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });

  return nonce;
}

async function signAndReturn(
  address: string,
  signer: object | any
): Promise<Array<string>> {
  const nonce = await getnonce();
  const message = `this message is ${nonce.nonce}`;
  const signedMessage = await signer.signMessage(message);
  // const sig = await signer.send;
  console.log(signedMessage);
  console.log(signer);

  return [message, signedMessage];
}

export default AuthSlice.reducer;
