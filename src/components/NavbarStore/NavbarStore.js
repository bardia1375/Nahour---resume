import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartStore } from "../redux/store";
import "./NavbarStore.css";
export const NavbarStore = (props) => {

  const [state, setState] = useState({ count: 0 });
  const [login, setLogin] = useState(true);
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
            <a className="navbarTopStoreLogo"></a>
            <input
              type="text"
              className="navbarTopStoreInput"
              placeholder="جستجو"
            />
          </div>
          <div className="navbarTopStoreLeft">
            {!props.user ? (
              <Link to="/store/login" className="navbarTopStoreLeftLogoProfile">
                <img src="/nahoor home page/store page/Profile icon.svg"  />
                ورود به حساب کاربری
              </Link>
            ) : (
              <Link to="/store/profile"   className="navbarTopStoreLeftLogoProfile">
                <img src="/nahoor home page/store page/Profile icon.svg" />
                <div style={{marginRight:"2px", transform: "translateY(2PX"}}>{props.user}</div>
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
          <ul className="navbarStoreBottomMain">
            <li className="navbarStoreBottomMainGroup">
              <a href="" className="navbarStorePopup">
                <img src="/nahoor home page/store page/icons/Icon/24×24/Color/Interface/Menu Burger Horizontal.svg" />
                دسته بندی
              </a>
              <div className="dropdown-content">
                <div id="myDropdown" className="dropdown-content-item">
                  <p>صنایع غذایی</p>
                  <a href="#home">لبنیات</a>
                  <a href="#about">ماکارونی</a>
                  <a href="#contact">سس های خوراکی</a>
                  <a href="#contact">رب گوجه فرنگی</a>
                </div>
                <div class="vl"></div>
                <div id="myDropdown" className="dropdown-content-item">
                  <p>صنایع غذایی</p>
                  <a href="#home">لبنیات</a>
                  <a href="#about">ماکارونی</a>
                  <a href="#contact">سس های خوراکی</a>
                  <a href="#contact">رب گوجه فرنگی</a>
                </div>
                <div class="vl"></div>
                <div id="myDropdown" className="dropdown-content-item">
                  <p>صنایع غذایی</p>
                  <a href="#home">لبنیات</a>
                  <a href="#about">ماکارونی</a>
                  <a href="#contact">سس های خوراکی</a>
                  <a href="#contact">رب گوجه فرنگی</a>
                </div>
                <div class="vl"></div>
                <div id="myDropdown" className="dropdown-content-item1">
                  <p>صنایع غذایی</p>
                  <a href="#home">لبنیات</a>
                  <a href="#about">ماکارونی</a>
                  <a href="#contact">سس های خوراکی</a>
                  <a href="#contact">رب گوجه فرنگی</a>
                </div>
              </div>
            </li>

            <li style={{ marginRight: "-4px" }}>
              <a href="" className="NavbarStoreItem">
                <img src="/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg" />
                کارخانه ها
              </a>
            </li>
            <li>
              <a href="" className="NavbarStoreItem">
                <img src="/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Discount.svg" />
                تخفیف ها و پیشنهادات
              </a>
            </li>
            <li>
              <a href="" className="NavbarStoreItem">
                <img src="/nahoor home page/store page/icons/Icon/24×24/Color/Files/File Document.svg" />
                قوانین و مقررات
              </a>
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
          </ul>
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
