
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Header(){

    return(
        <div className="flex border-b-2 border-solid w-screen border-black fixed  h-20 justify-around items-center background-color: bg-red-500 gap:200">
               <div className="flex gap-5">
                    <Link href="/"><Image width={40} height={40} src={"/logo.webp"} alt=""></Image></Link>
                    <p className="w-30 h-12 text-3xl align-middle text-white">Kwang Connect</p>
                </div>

                <div className="flex justify-between gap-5"> 
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>모집해요!</Link>
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>둘러보기</Link>
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>채팅</Link>
                <Link style={{marginTop:"4px", color:"white"}} href={"/"}>내 프로파일</Link>
                </div>

        </div>

    );
}   

export default Header;

