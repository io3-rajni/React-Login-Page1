// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./component/Home";
import Signin from "./component/Signin";
import Profile from "./component/Profile";
// import Service from "./component/Service";

function App() {
  return (
    <div className="main-class">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          {/* <Route path="/service" element={<Service/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
