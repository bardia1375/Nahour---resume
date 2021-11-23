import React, { useState } from "react";

const SideBar = (props) => {
  const [textColor, setTextColor] = useState("black");
  const [isBlack, setIsBlack] = useState(true);

  const changeGrope = (e) => {
    setTextColor(!isBlack)
}
let btn_class = isBlack ? "black" : "red";
  return (
    <>
      <div className="factorListSideNavbarTitle">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div style={{ width: "12%" }}>
          <img src="./nahoor home page/About Page/behinde.svg " width="100%" />
        </div>
      </div>

      <div className="factorListSideNavbarItems">
        {props.subTitle.map((subtitl) => {
          return (
            <div>
              <a href="#">
                <p className={btn_class} style={{ color: textColor }} onclick={(e) => changeGrope(e)}>
                  {subtitl}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;