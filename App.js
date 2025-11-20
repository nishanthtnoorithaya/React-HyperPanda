import React from "react";
import ReactDOM from "react-dom/client";


// First React Code. 
// const heading = React.createElement("h1",{id:"heading", class: "header"}, "Namaste React (children)");
const Root = ReactDOM.createRoot(document.getElementById("root"));
// // // Root.render(heading);

// // Nested Elements: 
// const parent = React.createElement("div",{id:'parent'}, //parent
//     React.createElement("div",{id:'child'}, //child
//     [React.createElement("h1",{},'First Element'),React.createElement("h2",{},'Second Element')]) //Siblings
// ); 
// Root.render(parent);

// JSX (Javascript XML) (This is not HTML, But this is HTML Like Syntax). 
//Compilation is done by Babel which is a Parcel Package inside Node Module. 

// const jsxheading = (<h1 id="Heading" tabIndex={5} className="HeaderName">Namaste React in JSX</h1>,
//     <h2>This is Nishanth T</h2>
// );
// // Root.render(jsxheading);

// // React Components: 
// // There are 2 ways to create a React Components. 
// // Class based Component (Older way) and Functional Component (New/Modern Way)

// // React Functional Component: (This is a Normal JS Function which will return Some piece pf JSX Code,
// // This is a Function that Returns a React Element)

// const Title = () =>(
//     <h1>This is a Title function</h1>
// );

// const Reactelem = (<h1>This is a Element</h1>);

// const number = 1000; 

// const HeaderComponent = () => (
// <div id="Container">
// {/* Component Inside the Component */}
// {/* <Title></Title> */}
// {Title()}
// {/* React Element or Plain JS inside Component */}
// {/* {number}
// {console.log("NamasteJS")}
// <h2>{number}</h2>
// {100+200} */}
// <h1>React Functional Component</h1>
// {Reactelem}
// </div>);

// // Root.render(Title()); 

// // Coding Assignments: (Chapter 03 - Laying the Foundation): 
// // Using Reactelement

// const Reactelement = React.createElement("div",{className:"title"},[
//     React.createElement("h1",{key: "1"},"1st Element"), React.createElement("h2",{key: "2"},"2nd Element"), 
//     React.createElement("h3",{key: "3"},"3rd Element")
// ]);

// // Using JSX: 
// const JsxReactelement = (
//      <div className="title">
//         <h1>1st element Comp</h1>
//         <h2>2nd element Comp</h2>
//         <h3>3rd element Comp</h3>
//     </div>
// );
// // Using Functional Component: 
// const FunctionComp = () => (
//     <>
//         {Reactelement}
//     </>
// );
// // Root.render(jsxReactelement);
// // Root.render(Reactelement);
// // Root.render(<FunctionComp></FunctionComp>)

// // Create a Header Component from scratch using Functional Components with JSX: 

// const Header = () => (
//     <div className="header">
//         <div className="logo">
//              <span className="Logo-icon">Namaste React</span>
//         </div>
//         <div className="searchbar">
//             <input placeholder="Search" type="text" />
//         </div>
//         <div className="user-icon">
//             <span className="icon">N</span>
//         </div>
//     </div>
// );

// Root.render(Header());

// Create a Food Orerding Application :

// Component List:
// {
//     App Layout 
//     Home:
//          Logo
//          Nav bar
//     Body:
//          Search
//          Card Container:
//                         cards
//     footer:
//          Copyright
//          Links 
// }

//  Create one Inline Class: 

const styles = {
    width: "130px",
    height: "100px"
}

// DummyAPI for Food App: 

const Data = [
{
    id: "123456",
    name: "Pizza Paradise",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pizza",
    "Italian",
    "Fast Food"
    ],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
    deliveryTime: 30,
    lastMileTravel: 3.5,
    slaString: "30 mins"
    }
},
{
    id: "234567",
    name: "Burger Hub",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
    locality: "Park Street",
    areaName: "Downtown",
    costForTwo: "₹300 for two",
    cuisines: [
    "Burgers",
    "American",
    "Fast Food"
    ],
    avgRating: 4.5,
    avgRatingString: "4.5",
    totalRatingsString: "15K+ ratings",
    veg: false,
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2,
    slaString: "25 mins"
    }
},
{
    id: "345678",
    name: "Green Bites",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Residency Road",
    areaName: "South Zone",
    costForTwo: "₹250 for two",
    cuisines: [
    "Healthy Food",
    "Salads",
    "Vegan"
    ],
    avgRating: 4.7,
    avgRatingString: "4.7",
    totalRatingsString: "8K+ ratings",
    veg: true,
    sla: {
    deliveryTime: 20,
    lastMileTravel: 1.5,
    slaString: "20 mins"
    }
}]



// Header Component. 

const RestoHeader = () => {
    return (
        <div className="resto-header">
            <div className="left-section">
                <img className="logo-image" style={styles} src="https://www.designmantic.com/logo-images/167083.png?company=Company%20Name&keyword=food&slogan=&verify=1" alt="logo-image" />
            </div>
           <Navbar />
        </div>
    )
}
const Navbar = () =>{
    return (
        <div className="Navbar-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const Search = () =>{
    return (
        <div className="search">
            Search
        </div>
    )
}

const Restocards = (props) => {
    const {resData} = props;
    {console.log(resData)}
    return (
        <div className="card">
            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + resData[0].info.cloudinaryImageId} alt="card-image" /> */}
            {/* <div className="name">{resData[0].info.name}</div>
            <div className="cusinename">{resData[0].info.cuisines.join(", ")}</div> */}
            {/* Another Method */}
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + resData.cloudinaryImageId} alt="card-image" />
             <div className="name">{resData.name}</div>
            <div className="cusinename">{resData.cuisines.join(", ")}</div>
        </div>
    )
}

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

// Main App Component. 
const AppLayout = () =>{
    return (
        <div className="app-container">
        <RestoHeader />
        <Body />
        </div>
    )
} 

Root.render(AppLayout())




