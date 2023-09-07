"use client"
import {ethers} from "ethers";

import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";


function MetaMaskConnect(){
   
   async function isInjected(){
    const provider = await detectEthereumProvider()
   
    if(provider){
        console.log('E');
    }
    else{
        console.log("dubm")
    }

}   
    useEffect(()=>{
        isInjected();
    },[])


    return(<div></div>)
}

export default MetaMaskConnect;