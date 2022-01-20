import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartStore } from "../redux/store";
import DropdownMenu from "../shopping/DropdownMenu/DropdownMenu";
import "./NavbarStore.css";
export const NavbarStore = (props) => {
  const [state, setState] = useState({ count: 0 });
  const [login, setLogin] = useState(true);
  const [hamburger, setHamburger] = useState(true);

  const Hamburger = () => {
    setHamburger(!hamburger);
  };
  useEffect(() => {
    cartStore.subscribe(() => {
      setState({ count: cartStore.getState().length });
    });
  });
  return (
    <>
      <div className="navbarContainerStore">
        <div className="navbarTopStore">
          <div className="navbarTopStoreRight">
            <a className="navbarTopStoreLogo" href="#"></a>
            <input
              type="text"
              className="navbarTopStoreInput"
              placeholder="جستجو"
            />
          </div>
          {hamburger ? (
            <div className="navbar-hamburger" onClick={() => Hamburger()}>
              <div className="navbar-line"></div>
              <div className="navbar-line"></div>
              <div className="navbar-line"></div>
            </div>
          ) : (
            <span
              onClick={() => Hamburger()}
              className="material-icons"
              style={{ fontSize: "2rem", color: "white" }}
            >
              close
            </span>
          )}
          <div className="navbarTopStoreLeft">
            {!props.user ? (
              <Link to="/store/login" className="navbarTopStoreLeftLogoProfile">
                <img src="/nahoor home page/store page/Profile icon.svg" />
                ورود به حساب کاربری
              </Link>
            ) : (
              <Link
                to="/store/profile"
                className="navbarTopStoreLeftLogoProfile"
              >
                <img src="/nahoor home page/store page/Profile icon.svg" />
                <div
                  style={{ marginRight: "2px", transform: "translateY(2PX" }}
                >
                  {props.user}
                </div>
              </Link>
            )}
            <a href="" className="navbarTopStoreLeftLogoCart">
              <img src="/nahoor home page/store page/Cart.svg" />
              {state.count > 0 && (
                <span className="countOfProduct">{state.count}</span>
              )}
            </a>
          </div>
        </div>

        {/* navbarBottom */}
        <div className="navbarStoreBottom">
          {/* right bottom navbar */}
          <ul className="navbarStoreBottomMain">
            <input
              type="text"
              className="navbarbottomStoreInput"
              placeholder="جستجو"
            />
            <li className="navbarStoreBottomMainGroup">
                  <DropdownMenu/>       
            </li>
            <div className="NavbarStoreItems" style={{ display: "flex" }}>
              <li style={{ marginRight: "-4px" }}>
                <Link to="./listFactor" className="NavbarStoreItem">
                  <img src="/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg" />
                  کارخانه ها
                </Link>
              </li>
              <li>
                <a href="" className="NavbarStoreItem">
                  <img src="/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Discount.svg" />
                  تخفیف ها و پیشنهادات
                </a>
              </li>
              <li>
                <Link to="bardia" className="NavbarStoreItem">
                  <img src="/nahoor home page/store page/icons/Icon/24×24/Color/Files/File Document.svg" />
                  قوانین و مقررات
                </Link>
              </li>
              <li>
                <a href="" className="NavbarStoreItem">
                  <img src="/nahoor home page/store page/icons/Chat/support.svg" />
                  سوالی دارید؟
                </a>
              </li>
              <li>
                <Link to="/" className="NavbarStoreItem">
                  <img src="/nahoor home page/store page/back home.svg" />
                  بازگشت به خانه
                </Link>
              </li>
            </div>
          </ul>
          {/* left bottom navbar */}
          <div className="Navbarbottomleft4">
            <Link
              to="/store/profile"
              className="navbarBottomStoreLeftLogoProfile"
            >
              <img src="/nahoor home page/store page/Profile icon.svg" />
            </Link>
            <a href="" className="navbarBottomStoreLeftLogoCart">
              <img src="/nahoor home page/store page/Cart.svg" />
              {state.count > 0 && (
                <span className="countOfProduct">{state.count}</span>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// import React from "react";
// import "./NavbarStore.css";
// export const NavbarStore = () => {
//   return (
//     <div className="NavbarShop-container">
//       <div className="NavbarShop-top">
//         <div className="NavbarShop-top-right">
//           <div style={{ width: " 5%" }}>
//             <img
//               className="NavbarLogo"
//               src="./nahoor home page/logo.svg"
//               width="100%"
//               alt="ناهور"
//             />
//           </div>
//           <div className="NavbarShop-input">
//             <div ><input placeholder="A red placeholder text.." type="text" className="" /></div>
//           </div>
//         </div>

//         <div className="NavbarShop-top-left">
//           <div className="NavbarShop-top-left-profile">
//             <div>
//               <img
//                 src="./nahoor home page/store page/Profile icon.svg"
//                 width="100%"
//                 height=""
//               />
//             </div>

//             <div>
//               <h4>پروفایل کاربری</h4>
//             </div>
//           </div>
//           <div className="NavbarShop-top-left-cart">
//             <div>|</div>
//             <div>
//               <img src="./nahoor home page/store page/Cart.svg" width="100%" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="NavbarShop-bottom">salam</div>
//     </div>
//   );
// };
