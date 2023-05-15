
import "./navbar.css";
const Navbar = () => {
    return <>
        <ul className="home_ul">
            <div className="litag">
                <li>Home</li>
                <li>Service</li>
                <a href="http://localhost:3000/profile"><li>Profile</li></a>
                <a href="http://localhost:3000/signin"><li>Signin</li></a>
                <li>Contact</li>
                <button className="login-btn">Login</button>
            </div>
        </ul>
    </>
}
export default Navbar