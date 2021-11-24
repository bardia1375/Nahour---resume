import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import HomePage from "./Pages/Homepage/HomePage";
import { Shopping } from "./Shopping";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/store/*" element={<Shopping />} />
      </Routes>
    </div>
  );
}

export default App;
