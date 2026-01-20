
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor Called")
    }

    componentDidMount(){
        console.log("ComponentDidMount Called");
    }

    render(){
        console.log("Render Called")
         return(
            <div className="pt-3">
            <h1>This is About Page</h1>
            <UserClass name = {"1st (class)"} location = {"Mangalore (class)"}/>
        </div>
        )
    }
}


export default About;