import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";

const RestoCategory=({resdata,showitems,Setshowindex})=>{

// const {title} = props.res.card.card;

const handleclick =()=>{
  Setshowindex();
}

return (
  <div>
   {/* Category Header */}
    <div className="mx-auto m-4 cursor-pointer p-3 w-6/12 border-amber-50" onClick={handleclick}>
        <div className="text-center p-3 flex items-center shadow-lg bg-amber-50 justify-between">
          <div className="font-bold">{resdata.title} ({resdata.itemCards.length})</div>
          <span>⬇</span>
        </div>
          {/* Category Content */}
        {showitems && <ItemsList items={resdata.itemCards} />}
    </div>
  </div>
)
}

export default RestoCategory