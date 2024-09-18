import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "popper.js";
import "jquery";
import "bootstrap";
import "slick-carousel";
import "jquery.mmenu";
import Product from "./pages/Product";
import About from "./pages/About";
import Productdetails from "./pages/Productdetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop-product" element={<Product />} />
        <Route path="/product-details" element={<Productdetails />} />
      </Routes>
    </Router>
  );
}

export default App;
