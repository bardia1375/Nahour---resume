import React, { useEffect, useState } from "react";
import FactorListCard from "../../../components/shopping/FactorList/FactorListCard";
import SideBar from "../../../components/shopping/FactorList/SideBar/SideBar";
import "./factorList.css";
import axios from "axios";
const FactorList = (props) => {
  console.log("state",props)
  const Title = ["لیست کارخانه های لبنیات"];
  let [cardss, setcardss] = useState([]);

  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/category/")

      .then((response) => setcardss(response.data));
  }, []);
  // cardss.map((cards)=>{
  //   console.log(cards)
  //   // const bardia = cards.company_set

  //    })

  const cards = [
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
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
                  cards={card}
                  id={card.id}
                  largPic={card.largPic}
                  shortPic={card.shortPic}
                  product={card.product}
                  factor={card.factor}
                  star={card.imgstar}
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
