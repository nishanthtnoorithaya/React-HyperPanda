// First React Code. 
const heading = React.createElement("h1",{id:"heading", class: "header"}, "Namaste React (children)");
const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(heading);

// Nested Elements: 
const parent = React.createElement("div",{id:'parent'}, //parent
    React.createElement("div",{id:'child'}, //child
    [React.createElement("h1",{},'First Element'),React.createElement("h2",{},'Second Element')]) //Siblings
); 
Root.render(parent);

