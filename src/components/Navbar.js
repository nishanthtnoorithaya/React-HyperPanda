import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = () =>{

    const [btnName, SetbtnName] = useState("Login");

    const Onlinestatus = useOnlineStatus();

    return (
        <div>
            <ul className="flex justify-center text-center items-center p-4 m-2">
                <li className="px-4">Online Status: {Onlinestatus ? "✔":"🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 cursor-pointer">Cart</li>
                {/* Updating the State Vairable from Login to Logout  */}
                {/* <button className="login" onClick={()=>{
                    SetbtnName("Logout")
                }} >
                {btnName}</button> */}
                <button className="button" onClick={()=>{
                    btnName === "Login" ? SetbtnName("Logout"): SetbtnName("Login")
                }} >
                {btnName}</button>
            </ul>
        </div>
    )
}

export default Navbar;