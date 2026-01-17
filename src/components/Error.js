// Import the Hook. If the name start with use, Then it is a React Hook. 
// "useRouteError" Hook Gives a Clean and Tells More Info about the error. 

import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>This is a Error Page</h1>
            <h2>{err.status} {err.statusText}</h2>
            <h3>{err.data}</h3>
        </div>
    )
}
export default Error;