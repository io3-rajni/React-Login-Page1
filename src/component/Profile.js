import Navbar from "./Navbar"
import "./profile.css"
import { ImTextColor } from "react-icons/im"
import { RiErrorWarningLine } from "react-icons/ri"
import { FaGlobeAsia } from "react-icons/fa"
import { AiOutlineClockCircle, AiOutlineUser, AiOutlineTable, AiOutlineFileText } from "react-icons/ai"
const Profile = () => {
    return <>
        <div className="mainDiv">
            <Navbar />
            <div className="sidebar">
                <h4>My Profile</h4>
                <ul className="profile-ul">
                    <AiOutlineClockCircle /> <li>Dasboard</li>
                    <AiOutlineUser />
                    <li>Profile</li>
                    <AiOutlineTable />
                    <li>Basic table</li>
                    <ImTextColor />
                    <li>Icons</li>
                    <FaGlobeAsia />
                    <li>Google Mop</li>
                    <AiOutlineFileText />
                    <li>Blank Page </li>
                    <RiErrorWarningLine />
                    <li>Error 404</li>
                    <button>Upgrade To pro</button>
                </ul>
            </div>
        </div>
    </>
}
export default Profile;