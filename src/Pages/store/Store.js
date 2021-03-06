import React from "react";
import NavbarStore from "../../components/NavbarStore/NavbarStore";
import Footer from "../Homepage/footer/footer";
import Aboutus from "./aboutus/aboutus";
import BestProductStore from "./bestProductStore/bestProductStore";
import GroupStore from "./groupStore/groupStore";
import HeaderSlider from "./headerStore/headerSlider";
import HeaderStore from "./headerStore/headerStore";
import NahorSuggestions from "./nahorSuggestions/nahorSuggestions";
import SalesStore from "./salesStore/salesStore";
import "./Store.css";
function Store() {
  const cards = [{ img: "./nahoor home page/store page/poster lebsa.png" }];
  
  
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }
  
  return (
    <div className="Store-mainContainer">
      <div className="Store-firstContainer">
        <HeaderStore />
        <GroupStore func={pull_data}/>
        <SalesStore />
        <BestProductStore />
      </div>
      <div className="Store-suggestion">
        <NahorSuggestions />
      </div>
      <div className="Store-seccondContainer">
        {cards.map((card) => {
          return (
            <div width="100%">
              <img src={card.img} width="100%" height="150px" />
            </div>
          );
        })}
        <Aboutus />
      </div>
    </div>
  );
}

export default Store;
