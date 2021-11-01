import React, { useState } from "react";
import "./BestFactor.css";
import BestfactorCard from "../../../components/Card/BestfactorCard/BestfactorCard";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const BestFactor = () => {
  const [cards, setCards] = useState([
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
    {
      product: "asdas",
      factor: "dfsd",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
    {
      product: "asdas",
      factor: "dfsd",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
    {
      product: "asdas",
      factor: "dfsd",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
  ]);
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,

    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="Bestfactor-main">
      <div className="Bestfactor-slick">

        <h2>برترین کارخانه هایی که با ناهور کار میکنند</h2>
        <Slider className="Bestfactor-slider" ref={slider} {...settings}>
          {cards.map((card) => {
            return (
              <div>
                <BestfactorCard
                  largPic={card.largPic}
                  shortPic={card.shortPic}
                  product={card.product}
                  factor={card.factor}
                />
              </div>
            );
          })}
        </Slider>
        {/* <button
          className="arrow-customize"
          onClick={() => slider?.current?.slickPrev()}
        >
          Prev
        </button> */}
      </div>
    </div>
  );
};
export default BestFactor;
