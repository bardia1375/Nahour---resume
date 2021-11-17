import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
      <div className="navbarEnglish">
        <span class="material-icons" style={{ transform: "rotate(90deg)" }}>
          chevron_right
        </span>
        EN
      </div>
    </div>
  );
}

export default Navbar;
