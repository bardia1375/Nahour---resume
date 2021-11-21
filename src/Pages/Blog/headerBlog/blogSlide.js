import React, { useState } from "react";
import Slider from "react-slick";
import "./blogSlide.css";
function BlogHeaderSlide() {
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
            paddingRight:"5%" 
          }}
        >
          {dots.map((item, index) => {
            return (
              <div style={{ padding: "0 4px" }} key={index}>
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
    <div style={{ height: "100%" }}>
      <Slider
        style={{  height: "100%" }}
        {...settings}
      >
        <div
          style={{  height: "100%", width: "100%" }}
        >
          <div className="headerSliderBlog-content"  style={{ objectFit: "fill" ,border:"5px solid blue", height: "100%", width: "100%"  }} >
            <img
              style={{ objectFit: "fill" }}
              src="./nahoor home page/Blogs page/yellow pic.png"
              width="100%"
              height="100%"
              min-height="440px"
              alt=""
            />
          </div>
          <div className="headerSliderBlog-button">
            <button>تازه ترین ها</button>
          </div>
        </div>

        <div style={{ height: "100%", width: "100%" }}>
          <img
            src="./nahoor home page/Blogs page/yellow pic.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div style={{  height: "100%", width: "100%" }}>
          <img
            src="./nahoor home page/Blogs page/yellow pic.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default BlogHeaderSlide;
