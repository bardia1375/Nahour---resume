import React from "react";
import Aboutus from "./aboutus/aboutus";
import BestProductStore from "./bestProductStore/bestProductStore";
import GroupStore from "./groupStore/groupStore";
import HeaderSlider from "./headerStore/headerSlider";
import HeaderStore from "./headerStore/headerStore";
import NahorSuggestions from "./nahorSuggestions/nahorSuggestions";
import SalesStore from "./salesStore/salesStore";

function Store() {
  const cards = [{ img: "./nahoor home page/store page/poster lebsa.png" }];
  return (
    <div>
      Navbar
      <div style={{ padding: "0 16vw" }}>
        <HeaderStore />
        <GroupStore />
        <SalesStore />
        <BestProductStore />
      </div>
      <NahorSuggestions />
      <div style={{ marginTop: "36px",padding: "0 16vw" }}>
        {cards.map((card) => {
          return (
            <div width="100%">
              <img src={card.img} width="100%" />
            </div>
          );
        })}
        <Aboutus />
      </div>
    </div>
  );
}

export default Store;
