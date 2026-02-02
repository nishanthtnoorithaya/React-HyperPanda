import { useState } from "react";
import Restodata from "../utils/RestoMenuData";
import RestoCategory from "./RestoCategory";
import Shimmer from "./Shimmer";

const RestoMenu = ()=>{

    const [showindex, Setshowindex] = useState();

    // Toggling the Accordian. 

    const handleToggle = (index) => {
        Setshowindex(index);
    };

    const resinfo = Restodata[0]?.data?.cards[2].card.card; 

    const {name,cuisines} = resinfo.info; 
    const itemcards =  Restodata[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card; 

    const category = Restodata[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div className="pt-3 mx-auto text-center">
            <div className="font-bold pb-1">{name}</div>
            <div className="font-medium">{cuisines.join(", ")}</div>
            {category.map((res, index)=>(
                <RestoCategory key={res.card.card.title} resdata={res.card.card}
                showitems={index === showindex} 
                Setshowindex = {()=>handleToggle(index)}
                />
            ))}
            
            
        </div>
    )

    //    const Menu = json[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    }

export default RestoMenu; 