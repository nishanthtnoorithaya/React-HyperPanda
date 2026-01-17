const User = (props) =>{
    return <div className="user-card">
        <h2 className="name">Name: {props.name}</h2>
        <h3 className="location">Location: Mangalore</h3>
        <h4 className="contact">Contact: @nish40</h4>
    </div>
}

export default User;
