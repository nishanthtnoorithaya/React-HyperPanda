import React from "react";
// import { GITHUB_URL } from "../utils/constants";

class UserClass extends React.Component{

//  Initialization 
    constructor(props){
        super(props);
        console.log("Child Constructor Called")
    // Create state Vairables: 
       this.state = {
        count:0,
        userInfo: {
            name: "Nishanth",
            location: "Mumbai"
        }
       }
    //    console.log(this.state)
    }

    async componentDidMount(){
    // this.timer = setInterval(()=>{
    //     console.log("Set Interval");
    // },1000)
        // const data = await fetch(GITHUB_URL);
        const data = await fetch("sadasdadadsads")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
    });
    //     console.log("Child ComponentDidMount Called");

    }

    componentDidUpdate(prevState){
        if(this.state.count != prevState.count){
            console.log("Changes Detected")
        }
        console.log("ComponentDidUpdate Called")
    }

    componentWillUnmount(){
        // clearInterval(this.timer)
         console.log("componentWillUnmount Called")
    }

    render(){
        console.log("Child Render Called");
        const {name,location,avatar_url} = this.state.userInfo;
    return <div className="user-card">
        <img src={avatar_url} width="100%" alt="" />
        <h2 className="name">Name: {name}</h2>
        <h3 className="location">Location: {location}</h3>
        <button  onClick={()=>{
            this.setState({
                count: this.state.count + 1,
            })
        }}> Count Button </button>
    </div>
    }
}

export default UserClass;