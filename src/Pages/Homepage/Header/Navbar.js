import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarMenu">
        <ul className="navbarMenu">
          <li className="NavbarLogo">
            <img
              width="100%"
              className="NavbarLogo"
              src="./nahoor home page/logo.svg"
            />
          </li>
          <li className="NavbarItems">
            <Link to="/" className="NavbarItem" id="NavbarItem1" href="#">
              خانه
            </Link>
          </li>
          <li className="NavbarItems">
            <Link to="/about" className="NavbarItem" id="NavbarItem" href="#">
              ارتباط با ناهور
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
          <li className="NavbarItems">
            <AnchorLink href="#application" className="NavbarItem" id="NavbarItem" >
              اپلیکیشن ناهور
            </AnchorLink>
          </li>
        </ul>
      </div>
    
    </div>
  );
}

export default Navbar;
