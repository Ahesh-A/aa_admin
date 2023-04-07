import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/auth.component";
import Home from "./components/home/home.component";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path = "home" element = {<Home/>} />I
    </Routes>
  );
};

export default App;
