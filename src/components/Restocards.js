import {CDN_URL} from "../utils/constants";

const Restocards = (props) => {
    const {resData} = props;
    console.log(resData);
    const {id,name,cloudinaryImageId,cuisines,avgRating,locality,} = resData.info;
    const {opened} = resData.info.availability; 
    return (
        <div className="card">
            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + resData[0].info.cloudinaryImageId} alt="card-image" /> */}
            {/* <div className="name">{resData[0].info.name}</div>
            <div className="cusinename">{resData[0].info.cuisines.join(", ")}</div> */}
            {/* Another Method */}
            <img className="rounded-sm w-100 h-40" src={CDN_URL + cloudinaryImageId} alt="card-image" />
            <div className="pt-1 font-bold">{name}</div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden hover:whitespace-normal">{cuisines.join(", ")}</div>
            <div className="flex justify-between pt-1">
            <div className="">{locality}</div>
            <div className={opened ? "text-green-900" : "text-red-500" }>{opened ? "Opened" : "closed"}</div>
            <div className="font-medium">{avgRating}</div>
            </div>
        </div>
    )
}

export const WithPromotedCards = (Restocards)=>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black rounded-md text-white px-2 py-1">Promoted</label>
                <Restocards {...props} />
            </div>
        )
    }
}

export default Restocards;
