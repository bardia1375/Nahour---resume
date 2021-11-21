import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavbarSmall() {
  return (
    <div className="navbarSmall-container">
      <ul  className="navbarSmall-main">
        <li>
         <div style={{width: '100%'}}><img
            className="NavbarLogo"
            src="./nahoor home page/logo.svg"
            width="100%"
            alt="ناهور"
          /></div>
        </li>
        <li className="NavbarItems">
            <Link to="/" className="NavbarItem" id="NavbarItem1" href="#">خانه</Link>
            
          
          </li>
          <li className="NavbarItems">
            <Link to="/about" className="NavbarItem" id="NavbarItem" href="#">
              درباره ناهور
            </Link>
          </li>
          <li className="NavbarItems">
            <Link to="/blogs" className="NavbarItem" id="NavbarItem" href="#">
              بلاگ
            </Link>
          </li>
          <li className="NavbarItems">
            <Link to="/store" className="NavbarItem" id="NavbarItem" href="#">
              فروشگاه
            </Link>
          </li>
      </ul>
    </div>
  );
}

export default NavbarSmall;
