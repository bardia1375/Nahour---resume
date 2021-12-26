import React from "react";
import NahorSuggestionsCard from "../../../components/Store/NahorSuggestionsCard/NahorSuggestionsCard";
import "./nahorSuggestions.css";
import Slider from "react-slick";

function NahorSuggestions() {
  const cards = [
    {
      img: "/nahoor home page/store page/پیشنهاد ویژه -ماکارونی.png",
      title: "ماکارونی های مخصوص با طعم بینظیر",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "/nahoor home page/store page/کره میهن - پیشنهاد ویژه.png",
      title: "کره میهن همانکه انتظارشو میکشید",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "/nahoor home page/store page/image-1.png",
      title: "لوازم پزشکی",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "/nahoor home page/store page/image-1.png",
      title: "لوازم پزشکی",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      img: "/nahoor home page/store page/image.png",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
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
        <div
          className="backgroun-dmaterial"
          style={{
            backgroundColor: "#6B006D",
            borderRadius: "50%",
            padding: "4px",
          }}
        >
          <span
            class="material-icons"
            style={{
              backgroundColor: "#fff",
              zIndex: "100",
              color: "#6B006D",
              borderRadius: "50%",
              padding: "4px",
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
          }}
        >
          <span
            class="material-icons"
            style={{
              backgroundColor: "#fff",
              zIndex: "100",
              color: "#6B006D",
              borderRadius: "50%",
              padding: "4px",
            }}
          >
            chevron_left
          </span>
        </div>
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
    autoplay: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 762,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="NahorSuggestions-container">
      <div className="NahorSuggestions-main" >
        <div className="NahorSuggestions-right">
    
          <div style={{ width: "100%" }}>
            <img
              src="/nahoor home page/store page/Group 451.png"
              width="100%"
            />
          </div>
          <div className="NahorSuggestions-paragraph">
            <a href="#">
              <h3 style={{whiteSpace: "nowrap"}}>مشاهده همه</h3>
              <span
                class="material-icons"
                style={{ transform: "rotate(180deg)", marginBottom: "8px" }}
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
