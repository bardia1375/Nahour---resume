import React, { useState } from "react";
import "./BestFactor.css";
import BestfactorCard from "../../../components/Card/BestfactorCard/BestfactorCard";

import Slider from "react-slick";
import Title from "../../../components/home/title/Title";

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
  const [currentIndex, setcurrentIndex] = useState(0);
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
    arrows: false,
    beforeChange: (prev, next) => {
      setcurrentIndex(next);
    },
    appendDots: (dots) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dots.map((item, index) => {
            return (
              <div style={{ margin: "0 8px" }} key={index}>
                {item.props.children}
              </div>
            );
          })}
        </div>
      );
    },
    customPaging: (index) => {
      return (
        <div
          style={
            index === currentIndex
              ? {
                  width: "30px",
                  height: "10px",
                  background: "#6B006D",
                  borderRadius: "50px",
                }
              : {
                  width: "10px",
                  height: "10px",
                  background: "#C4C4C4",
                  borderRadius: "50px",
                }
          }
        >
          {}
        </div>
      );
    },
  };

  return (
    <div className="Bestfactor-main">
      <div className="Bestfactor-slick">
        {/* <h2>برترین کارخانه هایی که با ناهور کار میکنند</h2> */}
        <div><Title title="برترین کارخانه هایی که با ناهور کار میکنند" /></div>   
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
