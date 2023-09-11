export default function FeedsIndividual(dataList:any){
        console.log(dataList.dataList.userName);
    return(
        <div>
            <div className="border rounded-md px-12 pt-12  pb-6 border-black">
                <p className="text-xl font-bold">{dataList.dataList.postTitle}</p>
                <p className="text-m font-bold text-right ">{dataList.dataList.userName}</p>
                <p className="text-xs text-right mb-8 ">{`${dataList.dataList.view} 회`}</p>
                <p className="text-xs ">{dataList.dataList.postContent}</p>
                <p className="text-xs text-right mt-4">{dataList.dataList.timeStamp}</p>

            </div>
        </div>
    )
}
