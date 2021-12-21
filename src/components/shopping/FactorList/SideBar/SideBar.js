import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import axios from "axios";
import FactorListCard from "../FactorListCard";
import FactorList from "../../../../Pages/Shopping/factorList/factorList";

const SideBar = (props) => {
  let [cardss, setcardss] = useState([]);

  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/category/")

      .then((response) => setcardss(response.data));
  }, []);

  /////////////////////////////////////////////////////////////////

  const changeGrope = (subtitl) => {
    const updatedItems = cardss
      .filter((cards) => {
        return cards.name === subtitl;
      })
      .map((updatedItem) => {
        return updatedItem.company_set;
      });

    console.log("updatedItems", updatedItems[0]);
    //  این قسمت پایین در صورت درست شدن سرور یعنی مثلا پاک شدن دوبلیکیت لبنیات باید پاک شود
    const factorFilter = updatedItems[0].map((fac) => {
      return fac.name;
    });
    console.log(factorFilter[0]);
    console.log(subtitl);
    return (
      <div>
        <FactorList Title={factorFilter[0]} />
      </div>
    );
  };

  ////////////////////////////////////////////////////////////////

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
        {props.subTitle.map((subtitl, id) => {
          console.log(subtitl);
          return (
            <div>
              <NavLink
                className={(navData) => (navData.isActive ? "changeHover" : "")}
                to=""
                onClick={() => changeGrope(subtitl)}
              >
                <p>{subtitl}</p>
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
