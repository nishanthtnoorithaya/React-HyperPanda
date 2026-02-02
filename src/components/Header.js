import LOGO_URL  from "../utils/constants";
import Navbar  from "./Navbar"


// const styles = {
//     width: "130px",
//     height: "100px"
// }
// Add style={styles} in html or in JSX Code. 

const RestoHeader = () => {
    return (
        <div className="flex justify-between items-center shadow-lg">
            <div className="left-section">
                <img className="w-32" src={LOGO_URL} alt="logo-image" />
            </div>
           <Navbar />
        </div>
    )
}
export default RestoHeader;