'use client'

import { redirect } from "next/navigation";
import { useState } from "react"

export default function Page(){
    const [title,setTitle]= useState('');
    const [content,setContent]= useState('');
    const [subjectSelector, setSubjectSelector]=useState("Anything")

    function onClickSubmit(){
        submitPost();
    }


    async function submitPost  (){
        fetch(`http://localhost:3002/posts/${subjectSelector}`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify({
                userWalletAddress:"sadsfdadsfdafvzvzc",// 이후에 추가
                userName:"택용 테스트",
                postTitle:title,
                postContent:content,
            })
        }).then((response)=>{response.json();})
        .then((data)=>{
            window.location.replace('/Main');
            console.log(data);
            
        }).catch((err)=>{console.error(err)});

        
    }
        

    

    function handleSubjectSelector(e:any){
        console.log(e.target.value);


        setSubjectSelector(e.target.value);
    }

    //   const postDataSchema= new Schema({
//     userWalletAddress: String,
//     userName: String,
//     postTitle: String,
//     postContent: String,
//     timeStamp: String, //여기 밑으로는 신경안써도 됨
//     view: Number,
//     commets: Array,  
//     vote: Number,
// });



    return(
        <div className=" mt-16  w-10/12 m-auto  ">
             <p className="text-3xl  mb-12">글 올리기</p>
       
       
        <div className="flex justify-center gap-16">
                <div className="w-4/6">   
                      <div className="border-2 border-black py-8">
                        <form id="board" className="flex flex-col gap-6">
                            <div className="flex w-inherit">
                            <div className="w-10/12 flex gap-8">
                                <label htmlFor="title" className="text-xl ml-8">제목</label>
                                <input className="w-10/12 border border-black left-2" id="title" name="title" type="text"  onChange={(e)=>{setTitle(e.target.value)}} required></input>
                            </div>
                            <div className="">
                                <select id="category" onChange={(e)=>{handleSubjectSelector(e)}}>
                                    <option value="Anything">잡담</option>
                                    <option value="Secret">비밀</option>
                                    <option value="Promotion">홍보</option>
                                </select>
                            </div>
                            </div>
                            <div className="w-inherit flex gap-8">
                            <label htmlFor="text" className="text-xl ml-8">내용</label>
                            <textarea id="content" name="content" className="left-8 w-10/12 h-80 border border-black" onChange={(e)=>{setContent(e.target.value)}}></textarea></div>
                        
                            <button type="button" className="border border-black self-center px-2 py-1 rounded-xl"   onClick={onClickSubmit}>제출하기</button>
                        </form>
                    </div>
            </div>


            <div className="w-2/6 border border-black">
                <ul>
                    <li>상처가 되는말은 참아주세요</li>
                </ul>
            </div>

            </div>
        
        </div>
    )
}