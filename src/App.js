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
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/store/*" element={<Shopping />} />
        <Route path="/listFactor" element={<div>salam</div>} />
      </Routes>
      {/* <ShareBlog/>
      <Shopping/>
      <Footer /> */}
    </div>
  );
}

export default App;
