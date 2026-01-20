import {CDN_URL} from "../utils/constants";

const Restocards = (props) => {
    const {resData} = props;
    const {id,name,cloudinaryImageId,cuisines,avgRating,locality} = resData.info;
    return (
        <div className="card">
            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + resData[0].info.cloudinaryImageId} alt="card-image" /> */}
            {/* <div className="name">{resData[0].info.name}</div>
            <div className="cusinename">{resData[0].info.cuisines.join(", ")}</div> */}
            {/* Another Method */}
            <img className="rounded-sm w-100" src={CDN_URL + cloudinaryImageId} alt="card-image" />
            <div className="pt-1 font-bold">{name}</div>
            <div className="">{cuisines.join(", ")}</div>
            <div className="flex justify-between pt-1">
            <div className="">{locality}</div>
            <div className="font-medium">{avgRating}</div>
            </div>
        </div>
    )
}
export default Restocards;
