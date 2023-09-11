import { useEffect, useState } from "react";
import TopFeedsModule from "./TopFeedsModule/TopFeedsModule";

export default function TopFeeds(){
    const [loading, setLoading]=useState(false);
    const [topPosts, setTopPosts] =useState<feedData[]>([]);
    const topNumber=10;
    async function fetchData(){
        setLoading(true);
    
        try{const data= await fetch(`http://localhost:3002/posts/topFeeds/${topNumber}`,{
        method:"GET",
        
    });
    const res= await data.json();
    console.log(res);
    setTopPosts(res);
}
    catch(error){
        console.log(error);
    }
        

}

useEffect(()=>{
    fetchData();
    setLoading(false);

},[]);

return(
    <div>
        <div className="flex flex-col gap-4 border px-4 py-8 rounded-md text-2xl border-black"> 
        <p>조회수가 가장 높은 글</p>
             {topPosts.map((el)=>{
                return(<div>
                    <TopFeedsModule topFeedsData={el}/>
                </div>)
             })}  
        </div>
    </div>
    )

}

