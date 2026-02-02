import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () =>{

    const [btnName, SetbtnName] = useState("Login");

    const Onlinestatus = useOnlineStatus();

    const {loggedUser} = useContext(UserContext);

    const cartItems = useSelector((store)=>store.cart.item);

    return (
        <div>
            <ul className="flex justify-center text-center items-center p-4 m-2">
                <li className="px-4">Online Status: {Onlinestatus ? "✔":"🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 font-bold  cursor-pointer"><Link to="/cart">Cart - ({cartItems.length} Items )</Link></li>
                {/* Updating the State Vairable from Login to Logout  */}
                {/* <button className="login" onClick={()=>{
                    SetbtnName("Logout")
                }} >
                {btnName}</button> */}
                <button className="button" onClick={()=>{
                    btnName === "Login" ? SetbtnName("Logout"): SetbtnName("Login")
                }} >
                {btnName}</button>  
                <li className="px-4">{loggedUser}</li>
            </ul>
        </div>
    )
}

export default Navbar;