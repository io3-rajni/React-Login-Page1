// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./component/Home";
import Signin from "./component/Signin";
import Profile from "./component/Profile";
import ChangeName from "./component/ChangeName";
import { useState } from "react";
// import Service from "./component/Service";

function App() {
  const [color, setColor] = useState('red')
  const [bgColor, setBgColor] = useState("green")
  const [childDataInParent, setChildDataInParent] = useState('')
  const parentFunction = (data) => {
    console.log('childData', data)
    setChildDataInParent(data)
  }
  // parentFunction('data this is Parent')
  return (
    <div className="main-class">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* <Route path="/service" element={<Service/>}></Route> */}
        </Routes>
      </BrowserRouter>
      <h2>{childDataInParent}</h2>
      < ChangeName
        colorProps={color}
        setColor={setColor}
        setBgColor={setBgColor}
        bgColor={bgColor}
        parentFunction={parentFunction}
      />
    </div>
  );
}

export default App;
