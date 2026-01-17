import { useState } from "react";
import { Link } from "react-router";

const Navbar = () =>{

    const [btnName, SetbtnName] = useState("Login")

    return (
        <div className="Navbar-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                {/* Updating the State Vairable from Login to Logout  */}
                {/* <button className="login" onClick={()=>{
                    SetbtnName("Logout")
                }} >
                {btnName}</button> */}
                <button className="login" onClick={()=>{
                    btnName === "Login" ? SetbtnName("Logout"): SetbtnName("Login")
                }} >
                {btnName}</button>
            </ul>
        </div>
    )
}

export default Navbar;