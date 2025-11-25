import Restocards from "./Restocards"
import Search from "./search";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import Data  from "../utils/mockData";

const Body =() =>{

    const arr = useState([]);
    // {console.log(arr)};
    //  To Keeping Data Safe. Unaltered Data. 
    let [RestaurantList,SetRestaurantList]= arr; 

    // For Modifying Data. 
    const [FilteredRestaurant, SetFilteredRestaurant] = useState([]);
    // let [RestaurantList,SetRestaurantList]= useState(Data)
    // Counter Example Tried.  
    // let [number, Setnumber]= useState(0);

    const [searchtext, Setsearchtext] = useState("");



    // useEffect Hook 

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            const restaurants =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            SetRestaurantList(restaurants);
            SetFilteredRestaurant(restaurants);
    }



    // Conditional Rendering. (Shimmer UI)
    // if(RestaurantList.length === 0){
    //     return <Shimmer />
    // }
    return RestaurantList.length === 0 ? <Shimmer /> : (
            <div className="main-container">
            <div className="search-container">
                <input type="text" className="search-input" value={searchtext} onKeyUp={()=>{
                    let Filteredinput =  RestaurantList.filter((res)=>(
                        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                   )) 
                   SetFilteredRestaurant(Filteredinput);
                }} onChange={(e)=>{
                    Setsearchtext(e.target.value)
                }} />
                {/* <button className="search-btn" onClick={()=>{
                   let Filteredinput =  RestaurantList.filter((res)=>(
                        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                   )) 
                   SetFilteredRestaurant(Filteredinput);
                }}>Search</button> */}
            </div>

            {/* <div className="restocard-container">
                    <Restocards resName = "Meghana Food" 
                        cusine = "South Indian, North Indian"
                    />
                    <Restocards resName = "KFC"
                    cusine = "Burger, Fast Food" />
            </div> */}
            {/* DummyAPI Integration */}
             {/* <div className="restocard-container">
                    <Restocards resData = {Data[0]}/>
                    <Restocards resData = {Data[1]}/>
            </div> */}
            {/* Filtering Top Rated Restaurant > 4 avarage Ratings. */}

            <button className="filter-btn" onClick={()=>{
                let Filtered = RestaurantList.filter((res) =>(
                    res.info.avgRating > 4.5
                ));
                SetFilteredRestaurant(Filtered); 
            }}
            >Top Rated Restuarant
            </button>
            {/* Counter Example Tried. */}
            {/* <button className="filter-btn" onClick={()=>{
                let counter = number + 1; 
                Setnumber(counter); 
                {console.log(counter)} 
            }}
            >Counter
            </button> */}
            <div className="restocard-container">
                {FilteredRestaurant.map((resto,index) => (
                   <Restocards key={index} resData = {resto} /> 
                ))}
            </div>
            {/* <div>{number}</div> */}
        </div>
    )
}

export default Body;