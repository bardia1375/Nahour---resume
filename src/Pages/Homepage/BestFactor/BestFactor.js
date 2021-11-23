import React, { useState } from "react";
import "./BestFactor.css";
import BestfactorCard from "../../../components/Card/BestfactorCard/BestfactorCard";

import Slider from "react-slick";
import Title from "../../../components/home/title/Title";



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
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
    {
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
    {
      product:"محصولات:شیر-ماست ...",
      factor: "کارخانه لبنیات و بستنی میهن",
      largPic: "./nahoor home page/میهن.png",
      shortPic: "./nahoor home page/Mihan LOGO.png",
    },
  ]);
  const PerviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
            <span
              class="material-icons"
              style={{ transform: "rotate(180deg)",marginBottom:"8px" }}
            >
              chevron_right
            </span>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;

    return (
      <div className={className} onClick={onClick}>
            <span
              class="material-icons"
              style={{ transform: "rotate(180deg)",marginBottom:"8px" , zIndex:"20"}}
            >
              chevron_right
            </span>
      </div>
    );
  };
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PerviousBtn />,
    nextArrow: <NextBtn />,
   
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
            paddingRight:"6%" 

          }}
        >
          {dots.map((item, index) => {
            return (
              <div style={{ margin: "0 4px" }} key={index}>
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    
     
    ]
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
