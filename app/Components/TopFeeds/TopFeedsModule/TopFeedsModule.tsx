export default function TopFeedsModule( {topFeedsData}:{ topFeedsData:any}){
    return(
        <div className="border rounded-sm text-base">{topFeedsData.postTitle}</div>
    )
}