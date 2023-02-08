import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import Tools from "./components/Tools/Tools";
import Login from "./components/Login/Login";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tools" element={<Tools/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
