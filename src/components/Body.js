import Restocards, {WithPromotedCards} from "./Restocards"
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchAPI from "../utils/useFetchAPI";
import { Link, useParams } from "react-router";
import UserContext from "../utils/UserContext";

// import Data  from "../utils/mockData";

const Body =() =>{

    const [searchtext, Setsearchtext] = useState("");

    const {RestaurantList, FilteredRestaurant, SetFilteredRestaurant} = useFetchAPI();


    const {resID} = useParams(); 

    // let [RestaurantList,SetRestaurantList]= useState(Data)
    // Counter Example Tried.  
    // let [number, Setnumber]= useState(0);

    // useEffect()

    // useEffect Hook This takes Callback Function and Dependency Array. 

    // Useeffect is Called on every Time Component Renders. Note: When No Dependency Array. 
        // useEffect(() =>{
        //     console.log("UseEffect Called")
        // })

        // Test the Device/Webpage is Online or Offline. 

        const Onlinestatus = useOnlineStatus();

        if(Onlinestatus === false) return <h1>The Page Seems to be Offline Please Check your Internet Connection</h1>

        // Useeffect is Called on EveryTime when the Dependency Array Changes/Updates.  
        // useEffect(() =>{
        //     console.log("UseEffect Called")
        // },[searchtext])

    // Conditional Rendering. (Shimmer UI)
    // if(RestaurantList.length === 0){
    //     return <Shimmer />
    // }

    const {loggedUser, setUserName} = useContext(UserContext);

    const RestcardPromoted = WithPromotedCards(Restocards);
    
    return RestaurantList.length == 0 ? <Shimmer /> : (
            <div className="px-6 py-3">
         <div className="p-2 flex gap-2.5 items-center justify-between">
            <input type="text" className=" w-58 px-1 border-2 rounded-md" placeholder="Search Food, Location, Ratings" value={searchtext} onKeyUp={()=>{
                let Filteredinput = RestaurantList.filter((res)=>(
                    res.info.name.toLowerCase().includes(searchtext.toLowerCase()) 
                    || searchtext.includes(res.info.avgRating) 
                    || res.info.cuisines.join(" ").toLowerCase().includes(searchtext.toLowerCase()) 
                    || res.info.locality.toLowerCase().includes(searchtext.toLowerCase())
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
            <button className="button h-10" onClick={()=>{
                let Filtered = RestaurantList.filter((res) =>(
                res.info.avgRating > 4.5
            )); 

            SetFilteredRestaurant(Filtered);

            }}
            >Top Rated Restuarant
            </button>
            <input className="border border-black" type="text" 
            value = {loggedUser} onChange={(e) => setUserName(e.target.value)} />
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

            {/* Counter Example Tried. */}
            {/* <button className="filter-btn" onClick={()=>{
                let counter = number + 1; 
                Setnumber(counter); 
                {console.log(counter)} 
            }}
            >Counter
            </button> */}
            
            <div className="flex flex-wrap justify-between">
                {FilteredRestaurant.map((resto) => (
                    <Link to={"/restomenu/"+ resto.info.id}  key={resto.info.id} >
                        {resto.info.avgRating > 4.5 ? (<RestcardPromoted  resData = {resto} />) : (<Restocards resData = {resto} />)}
                    </Link>
                ))}
            </div>
            {/* <div>{number}</div> */}
        </div>
    )
}

export default Body;