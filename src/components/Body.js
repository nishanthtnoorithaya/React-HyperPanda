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

    // To Update Data on Scroll.

    const [nextOffset, setNextOffset] = useState("");  // for update API

    // useEffect()

    // useEffect Hook This takes Callback Function and Dependency Array. 

    // Useeffect is Called on every Time Component Renders. Note: When No Dependency Array. 
        // useEffect(() =>{
        //     console.log("UseEffect Called")
        // })

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

        // Useeffect is Called on EveryTime when the Dependency Array Changes/Updates.  
        // useEffect(() =>{
        //     console.log("UseEffect Called")
        // },[searchtext])

    const fetchData = async () => {
        // Add the CorsProxy URL Before to Avoid CORS Issue. 
        // This is a Swiggy API Url :
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8669486&lng=74.882354&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // Swiggy Data
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
                        res.info.name.toLowerCase().includes(searchtext.toLowerCase()) || searchtext.includes(res.info.avgRating) || res.info.cuisines.join(" ").toLowerCase().includes(searchtext.toLowerCase()) || res.info.locality.toLowerCase().includes(searchtext.toLowerCase())
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
                {FilteredRestaurant.map((resto) => (
                   <Restocards key={resto.info.id} resData = {resto} /> 
                ))}
            </div>
            {/* <div>{number}</div> */}
        </div>
    )
}

export default Body;