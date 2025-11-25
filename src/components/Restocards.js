import {CDN_URL} from "../utils/constants";

const Restocards = (props) => {
    const {resData} = props;
    const {id,name,cloudinaryImageId,cuisines,avgRating} = resData.info;
    return (
        <div className="card">
            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + resData[0].info.cloudinaryImageId} alt="card-image" /> */}
            {/* <div className="name">{resData[0].info.name}</div>
            <div className="cusinename">{resData[0].info.cuisines.join(", ")}</div> */}
            {/* Another Method */}
            <img src={CDN_URL + cloudinaryImageId} alt="card-image" />
            <div className="name">{name}</div>
            <div className="cusinename">{cuisines.join(", ")}</div>
            <div className="cusinename">{avgRating}</div>
        </div>
    )
}
export default Restocards;
