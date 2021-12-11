import "./App.css";
import React from "react";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import HomePage from "./Pages/Homepage/HomePage";
import { Shopping } from "./Shopping";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Shopping/product/product";
import ShareBlog from "./Pages/ShareBlog/ShareBlog";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Homepage/footer/footer";

function App() {

  return (
    <div>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/store/*" element={<Shopping />} />
        <Route path="/store/shareblog" element={<ShareBlog />} />
        <Route path="/store/login/*" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
