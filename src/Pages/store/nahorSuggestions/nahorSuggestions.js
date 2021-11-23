import React from "react";
import NahorSuggestionsCard from "../../../components/Store/NahorSuggestionsCard/NahorSuggestionsCard";
import "./nahorSuggestions.css";
import Slider from "react-slick";

function NahorSuggestions() {
  const cards = [
    {
      img: "./nahoor home page/store page/image.png",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "./nahoor home page/store page/image.png",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "./nahoor home page/store page/image.png",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "./nahoor home page/store page/image.png",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "./nahoor home page/store page/image.png",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "./nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
  ];
  const PerviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="./nahoor home page/store page/icons/arrow.svg" />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;

    return (
      <div className={className} onClick={onClick}>
        <img src="./nahoor home page/store page/icons/arrow.svg" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PerviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div className="NahorSuggestions-container">
      <div className="NahorSuggestions-main" style={{ padding: "0 16vw" }}>
        <div className="NahorSuggestions-right">
          {/* <div className="NahorSuggestions-titlefirst">
            <h2 style={{ fontStretch: "200%" }}>پیشنهادات</h2>
            <h2
              className="NahorSuggestions-titlesecond"
              style={{ marginTop: "16px" }}
            >
              ناهور
            </h2>
          </div> */}
          <div style={{ width: "100%" }}>
            <img
              src="./nahoor home page/store page/Group 451.png"
              width="100%"
            />
          </div>
          <div className="NahorSuggestions-paragraph">
            <a href="#">
              <h3>مشاهده همه</h3>
              <span
              class="material-icons"
              style={{ transform: "rotate(180deg)",marginBottom:"8px" }}
            >
              chevron_right
            </span>
            </a>
          
          </div>
        </div>
        <div className="NahorSuggestions-left">
          <Slider {...settings}>
            {cards.map((card) => {
              return (
                <div>
                  <NahorSuggestionsCard
                    img={card.img}
                    title={card.title}
                    Condition={card.condition}
                    icon={card.icon}
                    sail={card.sail}
                    priceAfterSailRial={card.priceAfterSailRial}
                    priceBeforeSailRial={card.priceBeforeSailRial}
                    priceAfterSailAfghan={card.priceAfterSailAfghan}
                    priceBeforeSailAfghan={card.priceBeforeSailAfghan}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NahorSuggestions;
