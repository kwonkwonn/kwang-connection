import Image from "next/image";

export default function FeedInnerRight({innerData}:any){

    return(
    <div className="w-2/12 border-2 border-black  rounded-2xl  background-color:white flex flex-col text-center ">
        
        <p>지갑주소:{innerData.userWalletAddress}</p>
        <p>닉네임:{innerData.userName}</p>
        <Image width={150} height={150} src={"/taekyoungTest.jpg"} alt="" style={{margin:"0 auto"}}></Image>
        //ipfs 주소로 이미지 렌더링 가능하게
    </div>)
}