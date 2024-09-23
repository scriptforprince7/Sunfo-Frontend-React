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
import Login from './pages/Login'
import Shoppingart from "./pages/ShoppingCart";
import Checkoutpage from "./pages/Checkoutpage";
import Contact from "./pages/contact";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-details" element={<Blogdetails/>} />
        <Route path="/shop-product" element={<Product />} />
        <Route path="/product-details" element={<Productdetails />} />
        <Route path="/register" element={<Login/>} />
        <Route path="/shop-cart" element={<Shoppingart/>} />
        <Route path="/checkout" element={<Checkoutpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
