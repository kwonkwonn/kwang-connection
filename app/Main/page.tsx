"use client"
import { useEffect } from "react";
import FeedsBrowser from "../Components/Feeds/FeedsBrowser";
import TopFeeds from "../Components/TopFeeds/TopFeeds";
import Link from "next/link";

function Page(){
   

    return(
        <div className="flex gap-8 mt-8 w-screen justify-center p-auto relative" >
            <div className="w-8/12  relative ">
                <FeedsBrowser/>
            </div>
            <div className="w-3/12 relative  flex flex-col gap-4">
                <div>
                <TopFeeds/>
                </div>

                <div className="border-2 border-black self-strech align-middle bg-red-100 h-12 rounded-lg text-center text-2xl "><Link  href={"/Main/newPost"}> upload New Post</Link></div>
                </div>
        </div>

    );
}


export default Page;