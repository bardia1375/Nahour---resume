import "./App.css";
import NavbarSmall from "./components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Homepage/footer/footer";
import HomePage from "./Pages/Homepage/HomePage";
import ShareBlog from "./Pages/ShareBlog/ShareBlog";
import Store from "./Pages/store/Store";
import { Shopping } from "./Shopping";

function App() {
  return (
    <div>
      {/* <NavbarSmall/> */}
      {/* <HomePage /> */}
      <AboutUs/>
      
     {/* <Blog/>
     <ShareBlog /> */}
     <Footer/>
   <Shopping/>
     {/* <Footer/>  */}
    </div>
  );
}

export default App;
