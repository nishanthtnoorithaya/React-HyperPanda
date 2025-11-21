import { LOGO_URL } from "../utils/constants";
import Navbar  from "./Navbar"

const styles = {
    width: "130px",
    height: "100px"
}

const RestoHeader = () => {
    return (
        <div className="resto-header">
            <div className="left-section">
                <img className="logo-image" style={styles} src={LOGO_URL} alt="logo-image" />
            </div>
           <Navbar />
        </div>
    )
}
export default RestoHeader;