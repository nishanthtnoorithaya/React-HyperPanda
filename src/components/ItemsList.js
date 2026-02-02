import {CDN_URL} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemsList=({items})=>{

const dispatch = useDispatch();

 const handlereduxcart = (item) =>{
    dispatch(addItems(item))
 }

  return ( 
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id}>
                <div className="w-12/12 p-3 m-3 flex items-center justify-between">
                    <div className="text-left pt-2">
                        <div className="font-sm">{item.card.info.description}</div>
                    </div>
                    <div className="w-3/12 h-40 rounded-lg relative ">
                        <img className="w-100" src={CDN_URL + item.card.info.imageId} alt="" />
                        <button className="p-1 cursor-pointer bg-black border-white text-white shadow-lg absolute w-full left-0"
                        onClick={()=>handlereduxcart(item)}>
                        Add + </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemsList
