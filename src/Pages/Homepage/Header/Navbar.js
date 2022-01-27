import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar(props) {
  const [hamburger, setHamburger] = useState(true);
  const Hamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className={props.newStyle || "navbar"}>
      <div className="navbarMenu">
        <div className="NavbarLogo">
          <img
            width="100%"
            className="NavbarLogo"
            src="./nahoor home page/logo.svg"
          />
        </div>
        {hamburger ? (
          <div className="navbar-hamburger" onClick={() => Hamburger()}>
            <div className="navbar-line"></div>
            <div className="navbar-line"></div>
            <div className="navbar-line"></div>
          </div>
        ) : (
          <div className="navbar-hamburger" onClick={() => Hamburger()}>
          <span className="material-icons" style={{color: "white", fontSize: "2rem" ,transform: "translateX(-8px)",zIndex: '10000'}} >close</span>
          </div>
        )}
        <div>
          <ul className={hamburger ? "navbarMenuClose" : "navbarMenuOpen"}>
            <div className="NavbarItemss">
              <li className="NavbarItems">
                <Link to="/" className="NavbarItem" id="NavbarItem1" href="#">
                  خانه
                </Link>
              </li>
              <li className="NavbarItems">
                <Link
                  to="/about"
                  className="NavbarItem"
                  id="NavbarItem"
                  href="#"
                >
                  ارتباط با ناهور
                </Link>
              </li>
              {/* <li className="NavbarItems">
                <Link
                  to="/blogs"
                  className="NavbarItem"
                  id="NavbarItem"
                  href="#"
                >
                  بلاگ
                </Link>
              </li> */}
              <li className="NavbarItems">
                <Link
                  to="/store"
                  className="NavbarItem"
                  id="NavbarItem"
                  href="#"
                >
                  فروشگاه
                </Link>
              </li>
              <li className="NavbarItems"onClick={() => Hamburger()}>
                <AnchorLink
                
                  href="#application"
                  className="NavbarItem"
                  id="NavbarItem"
                >
                  اپلیکیشن ناهور
                </AnchorLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
