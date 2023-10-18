"use client";

import EmailAuth from "@/Functions/emailAuth/email";
import { useState } from "react";

function Page() {
  const [walletAddress, setWalletAddress] = useState("");
  const [modalUp, setModalUp] = useState(false);

  async function AccountCheck() {
    let currentAccount = await window.ethereum.request({
      method: "eth_accounts",
    });
    // const isAlreadyLogedIn= handleAccountsChanged(currentAccount);
    return currentAccount;
  }

  async function loadCurrentWalletAddress() {
    const Address = await AccountCheck();
    setWalletAddress(Address);
  }

  async function EmailModal() {
    setModalUp(!modalUp);
  }

  return (
    <div className="w-7/12 m-auto flex flex-col gap-5 mt-12 relative">
      <h1 className="text-3xl">반갑습니다!</h1>
      <div className="text-left">
        <h3>
          {" "}
          블록체인 기술을 활용하여, kwang connect에서는 어떠한 중앙단체의
          통체없이 소통할 수 있는 학생들의 장을 꿈꿉니다
        </h3>
        <h3>
          {" "}
          kwang connect에서는 귀하가 광운대학교의 일원이라는 사실만 필요할
          뿐입니다
        </h3>
        <h3>
          {" "}
          매우 쉽고 빠르게 회원가입을 도와드리겠습니다. 어떠한 개인정보도
          필수적인것이 아닙니다.
        </h3>
      </div>
      <EmailAuth />
      <form className="flex flex-col border-8 py-12 px-4 gap-4">
        <label>닉네임</label>
        <input
          className="w-3/6"
          type="text"
          id="nickname"
          required
          placeholder="한번 정한 닉네임은 변경할 수 없습니다"
        ></input>
        <label>지갑주소</label>
        <div>
          <input
            type="text"
            id="nickname"
            className="w-3/6"
            required
            placeholder="해당 지갑을 분실하면 계정은 영영 되찾을 수없습니다"
            value={walletAddress}
          ></input>
          <button
            type="button"
            className="border-2 border-black radious-19"
            onClick={loadCurrentWalletAddress}
          >
            현재 지갑주소 가져오기
          </button>
        </div>
        <button
          className="border-2 border-black self-center"
          onClick={EmailModal}
          type="button"
        >
          학교메일 인증하기
        </button>
      </form>
    </div>
  );
}

export default Page;
