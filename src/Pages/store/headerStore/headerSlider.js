import React, { useState } from "react";
import Slider from "react-slick";
import "./headerSlider.css"
const HeaderSlider = () => {
  const Imgs = [
    { img: "./nahoor home page/store page/poster 2.png" },
    { img: "./nahoor home page/store page/poster 2.png" },
    { img: "./nahoor home page/store page/poster 2.png" },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
 
      <div className="headerSlider-container" style={{ width: "100%" }}>
      
        <Slider  style={{ width: "66%", marginLeft:"16px" }} {...settings}>
          {Imgs.map((Img) => {
            return (
              <div style={{ width: "100%", objectFit: "contain" }}>
                <img src={Img.img} width="100%" />
              </div>
            );
          })}
        </Slider>
        <div style={{ width: "100%" }}>
          <img src="./nahoor home page/store page/POSTER1.svg" width="100%" />
        </div>
      </div>

  );
};

export default HeaderSlider;
