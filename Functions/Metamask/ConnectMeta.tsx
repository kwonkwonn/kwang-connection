"use client";

import detectEthereumProvider from "@metamask/detect-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { promises } from "dns";

import type { JsonRpcSigner } from "/Users/taekyoung/Desktop/kwangWoonMeeting/front/kwang-connection/node_modules/ethers/src.ts/providers/provider-jsonrpc";

function MetaMaskConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState({});

  const router = useRouter();

  useEffect(() => {
    //메타마스크인지 다른 플러그인인지 확인하는 구문 추가하고 대처방법 추가
  }, []);

  let signer: any | JsonRpcSigner;
  let provider: any;

  async function onClick() {
    setIsConnecting(true);

    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider("infura");
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      console.log(window.ethereum);
      console.log(provider);
      // let accounts = await provider
      //   .send("eth_requestAccounts", [])
      //   .then((data) => console.log(data));

      // provider.on("accountsChanged", function (accounts) {
      //   account = accounts[0];
      //   console.log(account); // Print new address
      // });

      signer = await provider
        .getSigner()
        .then((response: any) => {
          if (!response) {
            throw new Error("failed to login");
          } else {
            setWalletAddress({ walletAddress: response.address });
            setIsConnecting(false);
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

      const accounts = await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((data: any) => {
          console.log(data);
        });
      let account = accounts;
      console.log(account);
    }
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

  return (
    <div>
      <button
        onClick={() => {
          onClick();
        }}
        className={`border rounded-xl border-black bg-red-300  p-1  
        ${isConnecting ? "cursor-none" : "hover:bg-white cursor:pointer"}`}
      >
        메타마스크 연결하기{" "}
      </button>
    </div>
  );
}

export default MetaMaskConnect;

// async function isInjected() {
//   const provider = await detectEthereumProvider();
//   if (provider) {
//     setIsProvider(true);
//   } else {
//     setIsProvider(false);
//   }
// }

// async function getAccount() {
//   setIsConnecting(true);

//   await window.ethereum
//     .request({ method: "eth_requestAccounts" })
//     .catch((err: any) => {
//       if (err.code === 4001) {
//         console.log("Please connect to MetaMask.");
//       } else {
//         console.error(err);
//       }
//     });

//   setIsConnecting(false);
// }

// async function AccountCheck() {
//   let currentAccount = await window.ethereum.request({
//     method: "eth_accounts",
//   });
//   const isAlreadyLogedIn = handleAccountsChanged(currentAccount);
//   return isAlreadyLogedIn;
// }

// function handleAccountsChanged(Account: any) {
//   if (Account.length === 0) {
//     console.log("not logged");
//     return false;
//   } else {
//     console.log(true);
//     return Account;
//   }
// }

// async function onClick() {
//   if (isProvider === false) {
//     alert(
//       "메타마스크가 설치되어 있지 않습니다! 처음이라면 회원가입을 먼져 진행해 주세요!"
//     );
//   } else if (isProvider) {
//     const isLogged = await AccountCheck();
//     if (isLogged) {
//       router.push("/Main");
//     } else {
//       getAccount();
//     }
//   }
// }
