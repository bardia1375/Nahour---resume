import React from "react";
import TitleStore from "../../../components/Store/Title/titleStore";
import "./bestProductStore.css";
const BestProductStore = () => {
  const cards = [
    {
      img: "/nahoor home page/store page/Mihan poster.png",
      title: "تولید انواع ماست و پنیر",
      brandImg: "/nahoor home page/store page/mihan logo.png",
    },
    {
      img: "/nahoor home page/store page/Mahram poster.png",
      title: "تولید انواع ماکارونی و پاستا",
      brandImg: "/nahoor home page/store page/Mahram Logo.png",
    },
    {
      img: "/nahoor home page/store page/Zar makaron poster.png",
      title: "تولید انواع ماکارونی",
      brandImg: "/nahoor home page/store page/Zar makaron logo.png",
    },
  ];
  return (
    <div className="bestProductStore-container">
      <div>
        <TitleStore title="برترین تولید کنندگان" />
      </div>
      <div className="bestProductStore-main">
        {cards.map((card) => {
          return (
            <div
              className="bestProductStore-cards"
              style={{ width: "100%", height: "80%"}}
            >
              <img
                width="100%"
                height="100%"
                src={card.img}
                alt=""
              />
              <div className="bestProductStore-cardsContent" >
                <div width="100%">
                  <img src={card.brandImg}  />
                </div>
                <div  style={{ width:"100% " , textAlign: "left"}}><p className="bestProductStore-paragraph" width="100%">{card.title}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestProductStore;
