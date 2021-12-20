import React, { useState, useEffect } from "react";
import "./BestFactor.css";
import BestfactorCard from "../../../components/Card/BestfactorCard/BestfactorCard";

import Slider from "react-slick";
import Title from "../../../components/home/title/Title";
import axios from "axios";

const BestFactor = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  let [bestFactors, setbestFactors] = useState([]);

  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/category/")

      .then((response) => setbestFactors(response.data[0].company_set));
  }, []);

  const [cards, setCards] = useState([
    {
      product: "محصولات:چای-برنج ...",
      factor: "کارخانه طبیعت",
      largPic: "./nahoor home page/طبیعت.png",
      shortPic: "./nahoor home page/tabiAt LOGO.png",
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
      largPic: "./nahoor home page/دنا.png",
      shortPic: "/nahoor home page/Dena LOGO.svg",
    },
    {
      product: "محصولات:شیر-ماست ...",
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
        <div
          className="backgroun-dmaterial"
          style={{
            backgroundColor: "#6B006D",
            borderRadius: "50%",
            padding: "4px",
            marginRight: "-40px",
          }}
        >
          <span
            class="material-icons"
            style={{
              backgroundColor: "#6B006D",
              zIndex: "100",
              color: "#fff",
              borderRadius: "50%",
              padding: "4px",
              fontSize: "24px",
            }}
          >
            chevron_right
          </span>
        </div>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;

    return (
      <div className={className} onClick={onClick}>
        <div
          className="backgroun-dmaterial"
          style={{
            backgroundColor: "#6B006D",
            borderRadius: "50%",
            padding: "4px",
            marginRight: "80px",
          }}
        >
          <span
            class="material-icons"
            style={{
              backgroundColor: "#6B006D",
              zIndex: "100",
              color: "#fff",
              borderRadius: "50%",
              padding: "4px",
              fontSize: "24px",
            }}
          >
            chevron_left
          </span>
        </div>
      </div>
    );
  };
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PerviousBtn />,
    nextArrow: <NextBtn />,
    // autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="Bestfactor-main">
      <div className="Bestfactor-slick">
        {/* <h2>برترین کارخانه هایی که با ناهور کار میکنند</h2> */}
        <div>
          <Title title="برترین کارخانه هایی که با ناهور کار میکنند" />
        </div>
       
       
        <Slider className="Bestfactor-slider" ref={slider} {...settings}>
          {bestFactors.map((card) => {
            return (
              <div>
                <BestfactorCard
                  largPic={card.banner_image}
                  shortPic={card.logo_image}
                  product={card.name}
                  factor={card.name}
                />
              </div>
            );
          })}
        </Slider>
 {console.log("salas",bestFactors)}
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
