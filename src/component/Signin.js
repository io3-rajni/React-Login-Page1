import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";
import "./signin.css"
import { FaUserAlt, FaLock, FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

import "./signin.css"
const Signin = () => {
    const [email, emailSet] = useState("");
    const [password, passwordSet] = useState("");

    const Navigate = { useNavigate }
    return <>
        <div className="mainDiv">
            <Navbar />
            <form className="signinform">
                <div className="userNameIcon">
                    <FaUserAlt className="icon"
                        style={{
                            position: 'relative',
                            right: '2px',
                            top: '11px',
                            height: '2rem',
                            boxShadow: '2px 2px 0px #575B8A',
                            background: 'white',
                            color: '#575B8A',
                            width: "2rem"
                        }}
                        width="10rem"
                        color="white" />
                    <input type="text" name="email" placeholder="Enter User Email" className="user-name" autoComplete="on"
                        value={email}
                        onChange={(storedata) => emailSet(storedata.target.value)}
                    />

                </div>
                <div className="password">
                    <FaLock className="icon"
                        style={{
                            position: 'relative',
                            right: '2px',
                            top: '11px',
                            height: '2rem',
                            boxShadow: '2px 2px 0px #575B8A',
                            background: 'white',
                            color: '#575B8A',
                            width: "2rem"
                        }}
                        width="10rem"
                        color="white" />
                    <input type="password" name="password" placeholder="Password" className="pswrd" value={password} autoComplete="on" />
                </div>
                <button className="signin-btn" >

                    LOG IN
                </button>
                <IoIosArrowDropright className="icon"
                    style={{
                        position: 'relative',
                        right: '0px',
                        height: '2rem',
                        boxShadow: '2px 2px 0px #575B8A',
                        background: 'white',
                        color: '#575B8A',
                        width: "2rem",
                        top: "0.7rem"
                    }}
                    width="10rem"
                    color="white"
                />
                <div className="font-icon">
                    <br />
                    <h5 onClick={() => Navigate('/home')}>Log In Via</h5>
                    <div className="social-med-icon">
                        <FaInstagram /><FaFacebookSquare /><FaTwitter />
                    </div>

                </div>
            </form>
        </div>
    </>
}
export default Signin