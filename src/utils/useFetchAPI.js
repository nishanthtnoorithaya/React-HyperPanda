import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useFetchAPI = () =>{

    const arr = useState([]);
    // {console.log(arr)};
    //  To Keeping Data Safe. Unaltered Data. 
    let [RestaurantList,SetRestaurantList]= arr; 

    // For Modifying Data. 
      const [FilteredRestaurant, SetFilteredRestaurant] = useState([]);

        // Useeffect is Called on only one time on Intial. Note: When empty Dependency Array. 
        useEffect(() =>{
            fetchData();
             // Setting interval to know Unmount concept in fn component as in Class based.
            // const timer = setInterval(()=>{
            //     console.log("Set Interval")
            // },1000);
            // // Unmount in fn component as in Class based.
            // return ()=> {
            //     clearInterval(timer);
            // }
        },[])

    const fetchData = async () => {
        // Add the CorsProxy URL Before to Avoid CORS Issue. 
        // This is a Swiggy API Url :
        const data = await fetch(MENU_URL);
        const json = await data.json();
        const restaurants =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // Swiggy Data
        console.log(restaurants);
        SetRestaurantList(restaurants);
        SetFilteredRestaurant(restaurants); 
    }

    return { FilteredRestaurant, RestaurantList, SetFilteredRestaurant }

}

export default useFetchAPI;