import React from "react";
import Slider from "react-slick";
import "./blogSlide.css";
function BlogHeaderSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
