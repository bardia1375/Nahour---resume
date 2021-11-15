import React from "react";
import "./Navbar.css";
function NavbarSmall() {
  return (
    <div className="navbarSmall-container">
      <ul  className="navbarSmall-main">
        <li>
          <img
            className="NavbarLogo"
            src="./nahoor home page/Nahoor logo.png"
          />
        </li>
        <li>
          <a href="#"> خانه</a>
        </li>
        <li>
          <a href="#">درباره ناهور</a>
        </li>
        <li>
          <a href="#">بلاگ</a>
        </li>
        <li>
          <a href="#">فروشگاه</a>
        </li>
        <li>
          <a href="#">اپلیکیشن فروشگاه</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarSmall;
