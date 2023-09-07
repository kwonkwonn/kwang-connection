'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Header(){
    useEffect(()=>{
        
    },[]);


    return(
        <section className="flex border-b-2 border-solid border-black fixed  h-20 justify-around items-center background-color: bg-red-500 gap:200">
               <div className="flex gap-5"><Link href="/"><Image width={40} height={40} src={"/logo.webp"} alt=""></Image></Link><p className="w-30 h-12 text-3xl align-middle text-white">Kwang Connect</p>      </div>

                <div className="flex justify-between gap-5"> 
                <Link href="https://github.com/"><Image src="/github.svg" height={30} width={30} alt=""></Image> </Link> 
                <Link href="https://etherscan.io/"><Image src="/etherScan.png" height={30} width={30} alt=""></Image> </Link> 
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>Connect with others</Link>
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>Chat</Link>
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>Profile</Link></div>

        </section>

    );
}   

export default Header;

