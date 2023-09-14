"use client";
import FeedInnerLeft from "@/app/Components/Feeds/feedInner/FeedInnerLeft/FeedInnerLeft";
import FeedInnerRight from "@/app/Components/Feeds/feedInner/FeedInnerRight";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [innerData, setInnerData] = useState<feedData>({
    userWalletAddress: "",
    userName: "",
    postTitle: "",
    postContent: "",
    timeStamp: "",
    view: 0,
    comments: [],
    vote: 0,
    category: "",
    index: 0,
  });

  if (params.slug[0] === "deleted") {
    return <div>삭제된 페이지 입니다</div>;
  }

  async function fetchIndividual() {
    try {
      const respose = await fetch(
        `http://localhost:3002/posts/${params.slug[0]}/${params.slug[1]}`
      );
      const data = await respose.json();
      console.log(data);
      setInnerData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchIndividual();
  }, []);

  console.log(innerData);
  return (
    <div className="w-screen  ">
      <div className="h-8/12 w-10/12 flex m-auto  justify-center gap-8 my-6   pt-8 background-color:black   ">
        <FeedInnerLeft innerData={innerData} />
        <FeedInnerRight innerData={innerData} />
      </div>
    </div>
  );
}
// interface feedData{
//     userWalletAddress: String,
//     userName: String,
//     postTitle: String,
//     postContent: String,
//     timeStamp: String,
//     view: Number,
//     commets: Array,
//     vote:Number,
//     category:String,
//     index: Number
// }
