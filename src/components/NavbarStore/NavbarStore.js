import React,{useState} from "react";
import "./NavbarStore.css";
export const NavbarStore = () => {

  return (
    <>
      <div className="navbarContainerStore" >
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
            <a href="" className="navbarTopStoreLeftLogoProfile">
              <img src="./nahoor home page/store page/Profile icon.svg" />
              ورود به حساب کاربری
            </a>
            <a href="" className="navbarTopStoreLeftLogoCart">
              <img src="./nahoor home page/store page/Cart.svg" />
            </a>
          </div>
        </div>


        {/* navbarBottom */}
        <div className="navbarStoreBottom">
          <ul className="navbarStoreBottomMain">




            <li 
              className="navbarStoreBottomMainGroup"
            >
              <a href="" className="navbarStorePopup" >
                <img src="./nahoor home page/store page/icons/Icon/24×24/Color/Interface/Menu Burger Horizontal.svg" />
                دسته بندی
              </a>
              <div className="dropdown-content">
              <div id="myDropdown" className="dropdown-content-item">
                <p >صنایع غذایی</p>
                <a href="#home">لبنیات</a>
                <a href="#about">ماکارونی</a>
                <a href="#contact">سس های خوراکی</a>
                <a href="#contact">رب گوجه فرنگی</a>
              </div>
              <div id="myDropdown" className="dropdown-content-item">
                <p >صنایع غذایی</p>
                <a href="#home">لبنیات</a>
                <a href="#about">ماکارونی</a>
                <a href="#contact">سس های خوراکی</a>
                <a href="#contact">رب گوجه فرنگی</a>
              </div>
              <div id="myDropdown" className="dropdown-content-item">
                <p >صنایع غذایی</p>
                <a href="#home">لبنیات</a>
                <a href="#about">ماکارونی</a>
                <a href="#contact">سس های خوراکی</a>
                <a href="#contact">رب گوجه فرنگی</a>
              </div>
              <div id="myDropdown" className="dropdown-content-item">
                <p >صنایع غذایی</p>
                <a href="#home">لبنیات</a>
                <a href="#about">ماکارونی</a>
                <a href="#contact">سس های خوراکی</a>
                <a href="#contact">رب گوجه فرنگی</a>
              </div>
              </div>
            </li>






            <li style={{ marginRight: "-4px" }}>
              <a href="">
       
                <img src="./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg" />
                کارخانه ها
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Discount.svg" />
                تخفیف ها و پیشنهادات
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./nahoor home page/store page/icons/Icon/24×24/Color/Files/File Document.svg" />
                قوانین و مقررات
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./nahoor home page/store page/icons/Chat/support.svg" />
                سوالی دارید؟
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src="./nahoor home page/store page/back home.svg" />
                بازگشت به خانه
              </a>
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