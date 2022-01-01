import React from "react";
import TitleStore from "../../../components/Store/Title/titleStore";
import "./groupStore.css";
import { Link } from "react-router-dom";

const GroupStore = () => {
  const cards = [
    {
      img: "/nahoor home page/store page/sanaye ghazaii.png",
      text: "صنایع غذایی",
    },
    {
      img: "/nahoor home page/store page/pooshak.png",
      text: "پوشاک",
    },
    {
      img: "/nahoor home page/store page/masalaeh sakhtemani.png",
      text: "مصالح ساختمانی",
    },
    {
      img: "/nahoor home page/store page/petroshimi.png",
      text: "پتروشیمی",
    },
    {
      img: "/nahoor home page/store page/keshavarzi.png",
      text: "کشاورزی",
    },
  ];
  return (
    <div className="groupStore-container">
      <div>
        <TitleStore title="دسته بندی ها" />
      </div>
      <div className="groupStore-main">
        {cards.map((card) => {
          return (
            <div className="groupStore-cards">
              <Link to="listFactor">
                <div className="groupStore-cardsImg" style={{ width: "100%" }}>
                  <img src={card.img} width="100%" />
                  <div className="groupStore-contentImg">
                    <div>
                      <div className="groupStore-text">
                        <h2>{card.text}</h2>
                      </div>
                    </div>
                    <div className="groupStore-arrow">
                      <img
                        src="/nahoor home page/store page/icons/arrow.svg"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupStore;
