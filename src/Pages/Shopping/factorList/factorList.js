import React, { useState } from "react";
import FactorListCard from "../../../components/shopping/FactorList/FactorListCard";
import SideBar from "../../../components/shopping/FactorList/SideBar/SideBar";
import "./factorList.css";
const FactorList = () => {
  const Title = ["لیست کارخانه های لبنیات"];
  const cards = [
    {
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
      view: "126",
    },
    {
        product: "محصولات:شیر-ماست ...",
        factor: "کارخانه میهن",
        largPic: "./nahoor home page/میهن.png",
        shortPic: "./nahoor home page/Mihan LOGO.png",
        star: "4.5",
        imgstar: "",
        view: "126",
      },
      {
        product: "محصولات:شیر-ماست ...",
        factor: "کارخانه میهن",
        largPic: "./nahoor home page/میهن.png",
        shortPic: "./nahoor home page/Mihan LOGO.png",
        star: "4.5",
        imgstar: "",
        view: "126",
      },
      {
        product: "محصولات:شیر-ماست ...",
        factor: "کارخانه میهن",
        largPic: "./nahoor home page/میهن.png",
        shortPic: "./nahoor home page/Mihan LOGO.png",
        star: "4.5",
        imgstar: "",
        view: "126",
      },
      {
        product: "محصولات:شیر-ماست ...",
        factor: "کارخانه میهن",
        largPic: "./nahoor home page/میهن.png",
        shortPic: "./nahoor home page/Mihan LOGO.png",
        star: "4.5",
        imgstar: "",
        view: "126",
      },
      {
        product: "محصولات:شیر-ماست ...",
        factor: "کارخانه میهن",
        largPic: "./nahoor home page/میهن.png",
        shortPic: "./nahoor home page/Mihan LOGO.png",
        star: "4.5",
        imgstar: "",
        view: "126",
      },
      {
        product: "محصولات:شیر-ماست ...",
        factor: "کارخانه میهن",
        largPic: "./nahoor home page/میهن.png",
        shortPic: "./nahoor home page/Mihan LOGO.png",
        star: "4.5",
        imgstar: "",
        view: "126",
      },
  ];
  const sideBarItems = [
    {
      title: "صنایع غذایی",
      subTitle: ["لبنیات", "ماکارونی", "سس های خوراکی ", "رب گوجه فرنگی"],
    },
    {
      title: "صنایع غذایی",
      subTitle: ["لبنیات", "ماکارونی", "سس های خوراکی ", "رب گوجه فرنگی"],
    },
    {
        title: "صنایع غذایی",
        subTitle: ["لبنیات", "ماکارونی", "سس های خوراکی ", "رب گوجه فرنگی"],
      },
  ];
  return (
    <div className="factorList-container">
      <h2 style={{ marginRight: "350px" }}>{Title}</h2>
      <div className="factorList-main">


        <div className="factorList-sideNavbar">
          <div className="factorListMainTitle">
            <h2>دسته بندی کارخانه ها</h2>
          </div>
          {sideBarItems.map((sideBarItem) => {
            return (
              <SideBar
                title={sideBarItem.title}
                subTitle={sideBarItem.subTitle}
              />
            );
          })}
        </div>

        {/* //end navbar */}
        <div className="factorList-cards">
          {cards.map((card) => {
            return (
              <div>
                <FactorListCard
                  largPic={card.largPic}
                  shortPic={card.shortPic}
                  product={card.product}
                  factor={card.factor}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FactorList;
