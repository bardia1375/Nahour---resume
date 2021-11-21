import React from "react";
import "./NavbarStore.css";
export const NavbarStore = () => {
  return (
    <>
      <div className="navbarContainerasdas">
        <div className="navbarTopdasdasdas">
          <div className="navbarTopRight">
            <a className="navbarTopLogo"></a>
            <input type="text" className="navbarTopInput" placeholder="جستجو" />
          </div>
          <div className="navbarTopLeft">
            <a href="" className="navbarTopLeftLogoProfile">
              <img src="./nahoor home page/store page/Profile icon.svg" />
              ورود به حساب کاربری
            </a>
            <a href="" className="navbarTopLeftLogoCart">
              <img src="./nahoor home page/store page/Cart.svg" />
            </a>
          </div>
        </div>
        <div className="navbarBottomasdasda">
          <ul className="navbarBottomMainasdasda">
            <li>دسته بندی </li>
            <li><a href="">کارخانه ها</a></li>
            <li><a href="">تخفیف ها و پیشنهادات</a></li>
            <li><a href="">قوانین و مقررات</a></li>
            <li><a href="">سوالی دارید؟</a></li>
            <li><a href="">بازگشت به خانه</a></li>
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
