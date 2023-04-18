import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import ViewProduct from "./routes/view-product/view-products.component";
import ProductToDeliver from "./routes/products-to-deliver/products-to-deliver.component";
import UpdateProduct from "./routes/update-product/update-product.component";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="home" element={<Home />} />
      <Route path="view-products" element={<ViewProduct />} />
      <Route path="product-to-deliver" element={<ProductToDeliver />} />
      <Route path="update-product" element={<UpdateProduct />} />
    </Routes>
  );
};

export default App;
