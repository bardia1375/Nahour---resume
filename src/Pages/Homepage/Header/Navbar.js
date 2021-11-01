import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarMenu">
        <ul className="navbarMenu">
          <li className="NavbarLogo">
            <img
              className="NavbarLogo"
              src="./nahoor home page/Nahoor logo.png"
            />
          </li>
          <li className="NavbarItems">
            <a className="NavbarItem" id="NavbarItem1" href="#">
              خانه
            </a>
          </li>
          <li className="NavbarItems">
            <a className="NavbarItem" id="NavbarItem" href="#">
              درباره ناهور
            </a>
          </li>
          <li className="NavbarItems">
            <a className="NavbarItem" href="#">
              تماس با ما
            </a>
          </li>
          <li className="NavbarItems">
            <a className="NavbarItem" href="#">
              بلاگ
            </a>
          </li>
          <li className="NavbarItems">
            <a className="NavbarItem" href="#">
              فروشگاه
            </a>
          </li>
          <li className="NavbarItems">
            <a className="NavbarItem" href="#">
              اپلیکیشن ماهور
            </a>
          </li>
        </ul>
      </div>
      <div className="navbarEnglish">
        <span class="material-icons" style={{transform: "rotate(90deg)"}}>chevron_right</span>
        EN
      </div>
    </div>
  );
}

export default Navbar;
