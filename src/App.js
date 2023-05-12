// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./component/Home";
import Signin from "./component/Signin";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="main-class">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
