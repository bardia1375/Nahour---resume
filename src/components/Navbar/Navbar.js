import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavbarSmall() {
  return (
    <div className="navbarSmall-container">
      <ul className="navbarSmall-main">
        <li>
          <div style={{ width: "100%" }}>
            <img
              className="NavbarLogo"
              src="/nahoor home page/logo.svg"
              width="100%"
              alt="ناهور"
            />
          </div>
        </li>
        <div className="NavbarItems">
          <li className="NavbarItem">
            <Link to="/" className="NavbarItem" id="NavbarItem1" href="#">
              خانه
            </Link>
          </li>
          <li className="NavbarItem">
            <Link to="/about" className="NavbarItem" id="NavbarItem" href="#">
              ارتباط با ناهور
            </Link>
          </li>
          <li className="NavbarItem">
            <Link to="/blogs" className="NavbarItem" id="NavbarItem" href="#">
              بلاگ
            </Link>
          </li>
          <li className="NavbarItem">
            <Link to="/store" className="NavbarItem" id="NavbarItem" href="#">
              فروشگاه
            </Link>
          </li>
          <li className="NavbarItem">
            <Link to="/" className="NavbarItem" id="NavbarItem" href="#">
              اپلیکیشن ناهور
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavbarSmall;
