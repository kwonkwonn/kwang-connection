import { useRouter } from "next/navigation";

export default function FeedsIndividual(dataList: any) {
  const router = useRouter();
  const dataReceived: feedData = dataList.dataList;
  console.log(dataReceived.category);

  function categoryRefine(dataReceived: any) {
    console.log(dataReceived.category);

    switch (dataReceived.category) {
      case "Anything":
        return "잡담";
      case "private":
        return "사담";
      case "Promotion":
        return "모집해요";
      default:
        return "빈 페이지";
    }
  }
  console.log(dataReceived.timeStamp.toString());
  const categoryInKorean = categoryRefine(dataReceived);

  return (
    <div>
      <div
        onClick={() => {
          router.push(
            `/Main/post/${dataReceived.category}/${dataReceived.index}`
          );
        }}
        className="border rounded-md px-12 pt-12  pb-6 border-black"
      >
        <p className="text-xl font-bold">{dataReceived.postTitle}</p>
        <p className="text-xs ">{dataReceived.userWalletAddress + "dasf"}</p>
        <p className="text-xs text-right">{categoryInKorean}</p>

        <p className="text-xs text-right mt-4">
          {dataReceived.timeStamp.toString()}
        </p>
      </div>
    </div>
  );
}
