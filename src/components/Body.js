import Restocards from "./Restocards"
import Search from "./search";
import Data  from "../utils/mockData";

const Body =() =>{
    return (
            <div className="main-container">
            <Search />
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
            <div className="restocard-container">
                {Data.map((resto,index) => (
                   <Restocards key={index} resData = {resto} /> 
                ))}
            </div>
        </div>
    )
}
export default Body;