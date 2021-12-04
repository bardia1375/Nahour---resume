import React, { useState } from "react";
import Slider from "react-slick";
import "./blogSlideSecond.css";
function BlogSlideSecond() {
  const [currentIndex, setcurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            paddingRight: "5%",
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
  const explains = [
    {
      img: "./nahoor home page/Blogs page/yellow pic.png",
      title: "واردات مواد غذایی",
      paragraph:
        "با توج به این که محصولات غذایی وبهداشتی از اهمیت بسیار بالایی برخوردار است و در سلامت مصرف کنندپان نقش بسیار مهمی دارد . به این دلیل نظارت و قوانین نسبتا سختی برای واردات این مواد غذایی وضع شده است...",
      icon: "",
      name: "نیما بشیری",
      clock: "",
      duration: "خواندن 4 دقیقه",
      calender: "",
      date: "4 آبان 1400",
    },
    {
      img: "./nahoor home page/Blogs page/yellow pic.png",
      title: "واردات مواد غذایی",
      paragraph:
        "با توج به این که محصولات غذایی وبهداشتی از اهمیت بسیار بالایی برخوردار است و در سلامت مصرف کنندپان نقش بسیار مهمی دارد . به این دلیل نظارت و قوانین نسبتا سختی برای واردات این مواد غذایی وضع شده است...",
      icon: "",
      name: "نیما بشیری",
      clock: "",
      duration: "خواندن 4 دقیقه",
      calender: "",
      date: "4 آبان 1400",
    },
    {
      img: "./nahoor home page/Blogs page/yellow pic.png",
      title: "واردات مواد غذایی",
      paragraph:
        "با توج به این که محصولات غذایی وبهداشتی از اهمیت بسیار بالایی برخوردار است و در سلامت مصرف کنندپان نقش بسیار مهمی دارد . به این دلیل نظارت و قوانین نسبتا سختی برای واردات این مواد غذایی وضع شده است...",
      icon: "",
      name: "نیما بشیری",
      clock: "",
      duration: "خواندن 4 دقیقه",
      calender: "",
      date: "4 آبان 1400",
    },
  ];
  return (
    <Slider {...settings}>
      {explains.map((explain) => {
        return (
          <div className="blogSlideSecondSlider">
            <div>
              <img
                className="blogSlideSecondSlider-img"
                src={explain.img}
                width="100%"
                style={{ objectFit: "cover", borderRadius: "7px" }}
                alt=""
              />
            </div>
            <div className="app-paragraph">
              <div>
                <h2>{explain.title}</h2>
                <p>{explain.paragraph}</p>
              </div>
              <div className="blogSlideSecond-detail">
                <div className="blogSlideSecond-subDetail">
                  <div>
                    <p>{explain.date}</p>
                  </div>
                  <div style={{ width: "20%" }}>
                    <img
                      src="./nahoor home page/Share Blogs page/Icons/Time/clock.png"
                      width="100%"
                      height="100%"
                      alt=""
                    />
                  </div>
                </div>
                <div className="blogSlideSecond-subDetail">
                  <div>
                    <p>{explain.duration}</p>
                  </div>
                  <div style={{ width: "18%" }}>
                    <img
                      src="./nahoor home page/Share Blogs page/Icons/Time/clock.png"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <div className="blogSlideSecond-subDetail">
                  <div>
                    <p>{explain.name}</p>
                  </div>
                  <div style={{ width: "20%" }}>
                    <img
                      src="./nahoor home page/Share Blogs page/Icons/Time/clock.png"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default BlogSlideSecond;
