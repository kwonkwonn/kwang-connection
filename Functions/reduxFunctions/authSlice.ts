import { createSlice } from "@reduxjs/toolkit";
import { DM_Serif_Display } from "next/font/google";

interface authInfo {
  walletAddress: null | string;
  provider: any;
  accounts: Array<string>;
}

const initialState: authInfo = {
  walletAddress: null,
  provider: null,
  accounts: ["0"],
};

export const AuthSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    changeUser: (initialState) => {
      initialState.provider = new ethers.BrowserProvider(window.ethereum);
      initialState.walletAddress = initialState.accounts[0];
    },
  },
});

export const logInWithMetamask =
  (initialState: authInfo) => async (dispatch: any) => {
    initialState.provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((data: any) => {
        console.log(data);
      });
  };

export default AuthSlice.reducer;
//메타마스크에 연결하기

// function MetaMaskConnect() {
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [walletAddress, setWalletAddress] = useState({});

//   const router = useRouter();

//   useEffect(() => {
//     //메타마스크인지 다른 플러그인인지 확인하는 구문 추가하고 대처방법 추가
//   }, []);

//   let signer: any | JsonRpcSigner;
//   let provider: any;

//   async function onClick() {
//     setIsConnecting(true);

//     if (window.ethereum == null) {
//       console.log("MetaMask not installed; using read-only defaults");
//       provider = ethers.getDefaultProvider("infura");
//     } else {
//       provider = new ethers.BrowserProvider(window.ethereum);
//       console.log(window.ethereum);
//       console.log(provider);
//       // let accounts = await provider
//       //   .send("eth_requestAccounts", [])
//       //   .then((data) => console.log(data));

//       // provider.on("accountsChanged", function (accounts) {
//       //   account = accounts[0];
//       //   console.log(account); // Print new address
//       // });

//       signer = await provider
//         .getSigner()
//         .then((response: any) => {
//           if (!response) {
//             throw new Error("failed to login");
//           } else {
//             setWalletAddress({ walletAddress: response.address });
//             setIsConnecting(false);
//             return response;
//           }
//         })
//         .then(async (data: any) => {
//           console.log(data);
//           return data;
//         })
//         .catch((err: Error) => {
//           console.log(err);
//           return false;
//         });
//       const [message, signedMessage] = await signAndReturn(
//         signer.address,
//         signer
//       );

//       await fetchUser(signer.address, message, signedMessage);

//       const accounts = await window.ethereum
//         .request({
//           method: "eth_requestAccounts",
//         })
//         .then((data: any) => {
//           console.log(data);
//         });
//       let account = accounts;
//       console.log(account);
//     }
//   }

//   async function signAndReturn(
//     address: string,
//     signer: object | any
//   ): Promise<Array<string>> {
//     const nonce = await getnonce();
//     const message = `this message is ${nonce.nonce}`;
//     const signedMessage = await signer.signMessage(message);
//     // const sig = await signer.send;
//     console.log(signedMessage);
//     console.log(signer);

//     return [message, signedMessage];
//   }

//   async function getnonce() {
//     const nonce = await fetch("http://localhost:3002/api/nonce")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         return data;
//       });

//     return nonce;
//   }

//   async function fetchUser(
//     walletAddress: string,
//     message: string,
//     signedMessage: string
//   ) {
//     const dataToPut = {
//       walletAddress,
//       message,
//       signedMessage,
//     };
//     console.log(dataToPut);
//     await fetch("http://localhost:3002/users/newUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataToPut),
//     }).then(() => {
//       window.location.replace("/Main");
//     });
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           onClick();
//         }}
//         className={`border rounded-xl border-black bg-red-300  p-1
//         ${isConnecting ? "cursor-none" : "hover:bg-white cursor:pointer"}`}
//       >
//         메타마스크 연결하기{" "}
//       </button>
//     </div>
//   );
// }
