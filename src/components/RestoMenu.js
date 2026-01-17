import { useState, useEffect } from "react";

const RestoMenu = ()=>{

    const [Restomenu, SetRestomenu] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        try{
            const swiggyUrl = "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8669486&lng=74.882354&restaurantId=105420";
            const res = await fetch(finalUrl);
            const data = await res.json();
            console.log(data);
            // console.log(res.body);
        }
        catch(err){
            console.log(err.message)
        }
    }
    return(
        <div className="menu">
        <div className="title">
            <h1>KFC</h1>
            <h3>North Indian, South Indian</h3>
        </div>
            <ul>
                <li>Biriyani</li>
                <li>Masala Dose</li>
                <li>Cool Drinks</li>
            </ul>
        </div>
    )
 
}

export default RestoMenu; 