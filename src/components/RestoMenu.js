import { useState, useEffect } from "react";
const RestoMenu = ()=>{

    const [Restomenu, SetRestomenu] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        // try{
        //     const res = await fetch(MENU_URL);
        //     const data = await res.json();
        //     console.log(res);
        //     // console.log(res.body);
        // }
        // catch(err){
        //     console.log(err.message)
        // }
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