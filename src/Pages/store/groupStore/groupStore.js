import React, { useEffect, useState } from "react";
import TitleStore from "../../../components/Store/Title/titleStore";
import "./groupStore.css";
import { Link } from "react-router-dom";
import axios from "axios";
import FactorList from "../../Shopping/factorList/factorList";

const GroupStore = (props) => {
  const [Industry, setIndustry] = useState([]);
  const [new1, setnew] = useState([1, 2]);
  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/industry/")

      .then((response) => setIndustry(response.data));
  }, []);
  console.log("123123123123123123", Industry);

  //find index
  const Gotofactor = (e) => {
    const Index = Industry.filter((filter) => {
      return filter.name == e;
    }).map((index) => {
      console.log("salam man bardia hastam" ,index.category_set);
    });
    console.log(Index);

  };
  

  // const cards = [
  //   {
  //     img: "/nahoor home page/store page/sanaye ghazaii.png",
  //     text: "صنایع غذایی",
  //   },
  //   {
  //     img: "/nahoor home page/store page/pooshak.png",
  //     text: "پوشاک",
  //   },
  //   {
  //     img: "/nahoor home page/store page/masalaeh sakhtemani.png",
  //     text: "مصالح ساختمانی",
  //   },
  //   {
  //     img: "/nahoor home page/store page/petroshimi.png",
  //     text: "پتروشیمی",
  //   },
  //   {
  //     img: "/nahoor home page/store page/keshavarzi.png",
  //     text: "کشاورزی",
  //   },
  // ];
  return (
    <div className="groupStore-container">
      <div>
        <TitleStore title="دسته بندی ها" />
      </div>
      <div className="groupStore-main">
        {Industry.map((card) => {
          return (
            <div
              className="groupStore-cards"
              onClick={() => Gotofactor(card.name)}
            >
              {console.log("ccccccccccaaaaaaaaaaaa", card.category_set[0]?.id)}
              <Link to={`listFactor/${card.category_set[0]?.id}`}>
                <div className="groupStore-cardsImg" style={{ width: "100%" }}>
                  <div className="groupStore-image">
                    <img src={card.cover_image} width="100%" />
                  </div>
                  <div className="groupStore-contentImg">
                    <div>
                      <div className="groupStore-text">
                        <h2>{card.name}</h2>
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
        {/* {cards.map((card) => {
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
        })} */}
      </div>
    </div>
  );
};

export default GroupStore;
