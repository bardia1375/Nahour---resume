import "./App.css";
import NavbarSmall from "./components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Homepage/footer/footer";
import HomePage from "./Pages/Homepage/HomePage";
import ShareBlog from "./Pages/ShareBlog/ShareBlog";
import Store from "./Pages/store/Store";
import { Shopping } from "./Shopping";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HomePage />
      <ShareBlog/>
      <Shopping/>
      <Footer />
    </div>
  );
}

export default App;
