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
      img: "/nahoor home page/store page/sanaye ghazaii.png",
      text: "صنایع غذایی",
    },
    {
      img: "/nahoor home page/store page/sanaye ghazaii.png",
      text: "صنایع غذایی",
    },
    {
      img: "/nahoor home page/store page/sanaye ghazaii.png",
      text: "صنایع غذایی",
    },
    {
      img: "/nahoor home page/store page/sanaye ghazaii.png",
      text: "صنایع غذایی",
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
              <div className="groupStore-cardsImg" style={{ width: "100%" }}>
                <img src={card.img} width="100%" />
                <div className="groupStore-contentImg">
                  <div>
                    <div className="groupStore-text"><Link  to="listFactor">{card.text}</Link></div>
                  </div>
                  <div style={{ width: "16%", margin:"0 8px" }}>
                    <img src="/nahoor home page/store page/icons/arrow.svg" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupStore;
