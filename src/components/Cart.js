import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./Itemslist";
import { clearItems } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.item);

    const dispatch = useDispatch();
    const handleclear =()=>{
        dispatch(clearItems());
    }
    return (
        <div className="w-6/12 mx-auto text-center p-2.5">
        <div className="mt-2 font-bold text-xl">Cart Page</div>
        <button className="mt-2 px-2 py-1 bg-black rounded-xl text-white" onClick={handleclear}>Clear Cart</button>
        <ItemsList items ={cartItems} />
        {cartItems.length === 0 && <h1>Please add anything to cart. Your cart is empty</h1>}
        </div>
    )
}

export default Cart; 