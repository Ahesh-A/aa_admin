import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component"; 
import Home from "./routes/home/home.component"; 
import ViewProduct from "./routes/view-product/view-products.component";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path = "home" element = {<Home/>} />
      <Route path = "view-products" element = {<ViewProduct/>} />
    </Routes>
  );
};

export default App;
