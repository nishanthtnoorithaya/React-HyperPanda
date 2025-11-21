import React from "react";
import ReactDOM from "react-dom/client";
import RestoHeader from "./components/Header";
import Body from "./components/Body";


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


// DummyAPI for Food App: 




// Main App Component. 
const AppLayout = () =>{
    return (
        <div className="app-container">
        <RestoHeader />
        <Body />
        </div>
    )
} 

Root.render(<AppLayout />)




