import { useState } from "react";
import CommentElement from "./comments/comments";

export default function FeedInnerLeft({ innerData }: any) {
  console.log(innerData);
  const commentsList = innerData.comments;
  const [inputComments, setInputCommetns] = useState("");

  async function deletePost() {
    //글 쓴사람과 현재 사용자 비교하는 로직 필요, redux, session storage 공부필요
    await fetch(
      `http://localhost:3002/posts/${innerData.category}/${innerData.index}`,
      { method: "DELETE" }
    )
      .then((respose) => {
        if (!respose) {
          throw new Error("error");
        }
        return respose.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.replace("/Main");
  }

  async function addComments() {
    await fetch(
      `http://localhost:3002/posts/comments/${innerData.category}/${innerData.index}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userWalletAddress: "0x8eD60F263CaA5c45739CdBA594ebF137B81f386A",
          userName: "택용댓글",
          innerContent: inputComments,
        }),
      }
    ).then((res) => {
      if (!res) {
        alert("네트워크의 오류로 업로드에 실패했습니다");
      }
      window.location.reload();
    });
  }

  console.log(commentsList);

  return (
    <div className="w-7/12 border-2 border-black rounded-2xl overflow-hidden">
      <div className="border-b-2 border-black w-inherit ">
        <p className=" pl-12 text-2xl font-bold">제목: {innerData.postTitle}</p>
      </div>

      <div className="mt-8 w-inherit">
        <p
          onClick={deletePost}
          className="ml-2 text-right right-align pr-10 cursor-pointer"
        >
          글 삭제
        </p>
        <div className="w-11/12 h-96 border m-auto mb-20 border-black">
          <p className="">{innerData.postContent}</p>
        </div>

        <form>
          <input
            onChange={(e) => {
              setInputCommetns(e.target.value);
            }}
            className="w-11/12 h-12 border border-black rounded-md"
            placeholder="이쁜말 쓰기 약속~"
            type="text"
          ></input>
          <button
            onClick={() => {
              addComments();
            }}
            className="w-1/12 border-2 border-black h-12 rounded-md "
            type="button"
          >
            쓰기
          </button>
        </form>
      </div>
      <div className="border-t-2 border-black">
        {commentsList.map((el: comments) => {
          return (
            <div>
              <CommentElement innerContent={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
