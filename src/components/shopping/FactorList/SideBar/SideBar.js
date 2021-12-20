import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import "./SideBar.css"
const SideBar = (props) => {
  const [textColor, setTextColor] = useState("black");
  const [isBlack, setIsBlack] = useState(true);

  const changeGrope = (e,id) => {
    setTextColor("red")
}
let btn_class = isBlack ? "black" : "red";
  return (
    <>
      <div className="factorListSideNavbarTitle">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div style={{ width: "12%" }}>
          <img src="/nahoor home page/About Page/behinde.svg " width="100%" />
        </div>
      </div>

      <div className="factorListSideNavbarItems">
        {props.subTitle.map((subtitl,id) => {
          console.log(subtitl)
          return (
            <div>
              <NavLink className={(navData) => navData.isActive ?"changeHover":''} to="">
                <p className={btn_class} style={{ color: textColor }} onclick={(e) => changeGrope(e,id)}>
                  {subtitl}
                </p>
              </NavLink>
            </div>
          );
        })}
        {/* <Link to="" ><p>صنایع غذایی</p></Link> */}
      </div>
    </>
  );
};

export default SideBar;
