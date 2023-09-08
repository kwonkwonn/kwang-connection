"use client"


import detectEthereumProvider from "@metamask/detect-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function MetaMaskConnect(){
   const [isProvider, setIsProvider]= useState(false);
   const [isConnecting, setIsConnecting] =useState(false);
   const router=useRouter();
    useEffect(()=>{
        isInjected();
        //메타마스크인지 다른 플러그인인지 확인하는 구문 추가하고 대처방법 추가
    },[])

    async function isInjected(){
      const provider = await detectEthereumProvider();
      if(provider){
          setIsProvider(true);
      }
      else{
          setIsProvider(false);
      }
  }   

    async function getAccount() {
        setIsConnecting(true);
        await window.ethereum.request({ method: 'eth_requestAccounts' })
          .catch((err:any) => {
            if (err.code === 4001) {
              console.log('Please connect to MetaMask.');
            } else {
              console.error(err);
            }
          });
        setIsConnecting(false);
        onClick();
      }



      async function AccountCheck(){
        let  currentAccount= await window.ethereum.request({method:'eth_accounts'});
        const isAlreadyLogedIn= handleAccountsChanged(currentAccount); 
        return isAlreadyLogedIn;
      }

      function handleAccountsChanged(Account:any){
        if(Account.length===0){
          console.log("not logged");
          return false;
        }else{
          console.log(true);
          return Account;
        }  
      }
      
    async function onClick(){
        if(isProvider===false){
            alert("메타마스크가 설치되어 있지 않습니다! 처음이라면 회원가입을 먼져 진행해 주세요!")
        }else if(isProvider){
          const isLogged= await AccountCheck();
          if(isLogged){
              router.push('/Main');
          }else{
            getAccount();
          }
        }
    }


    return(<div>
                  <button onClick={()=>{isConnecting?"" :onClick()}}
                  className=
                  {`border rounded-xl border-black bg-red-300  p-1 ${isConnecting?"":"hover:bg-white cursor:none"}`}>
                  메타마스크 연결하기 </button>
    </div>)
}

export default MetaMaskConnect;