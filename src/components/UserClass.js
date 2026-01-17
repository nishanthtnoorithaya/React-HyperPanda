import React from "react";

class UserClass extends React.Component{

//  Initialization 
    constructor(props){
        super(props);
        console.log("Child Constructor Called")
    // Create state Vairables: 
       this.state = {
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
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
    });
    //     console.log("Child ComponentDidMount Called");

    }

    componentDidUpdate(prevprops,prevstate){
        // if(this.state.count != this.Prevstate.count){

        // }
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
        {/* <button  onClick={()=>{
            this.setState({
                count: this.state.count + 1,
                count1: this.state.count1 + 1,
            })
        }}> Count Button </button> */}
    </div>
    }
}

export default UserClass;