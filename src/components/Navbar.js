import { useState } from "react";

const Navbar = () =>{

    const [btnName, SetbtnName] = useState("Login")

    return (
        <div className="Navbar-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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