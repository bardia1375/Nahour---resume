import React, { useState } from "react";
import FactorListCard from "../../../components/shopping/FactorList/FactorListCard";
import SideBar from "../../../components/shopping/FactorList/SideBar/SideBar";
import "./factorList.css";
const FactorList = () => {
  const Title = ["لیست کارخانه های لبنیات"];
  const cards = [
    {
      id:"0",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"1",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"2",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"3",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"4",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"5",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"6",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"7",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"8",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"9",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"10",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"11",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"12",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"13",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
    },
    {
      id:"14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "",
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
                id={card.id}
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
