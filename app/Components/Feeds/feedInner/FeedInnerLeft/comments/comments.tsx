export default function CommentElement({ innerContent }: any) {
  console.log(innerContent);

  function onClickDelete() {
    console.log(12);
  }

  return (
    <div className="flex flex-col gap-2 border border-black">
      <div className="flex justify-between w-11/12 m-auto">
        <p className="text-sm ">{innerContent.userWalletAddress}</p>
        <div className="flex gap-2 align-middle items-center">
          <p className="text-sm ">추천{innerContent.vote}개 </p>
          <button type="button" onClick={onClickDelete} className="text-sm">
            x
          </button>
        </div>
      </div>
      <p className="text-xl">{innerContent.innerContent}</p>
    </div>
  );
}
