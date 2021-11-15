import React from "react";
import Slider from "react-slick";
import "./blogSlideSecond.css";
function BlogSlideSecond() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  ];
  return (
    <div style={{}}>
      <Slider {...settings}>
        {explains.map((explain) => {
          return (
            <div className="blogSlideSecondSlider">
              <div>
                <img
                  className="blogSlideSecondSlider-img"
                  src={explain.img}
                  width="112%"
                  style={{ objectFit: "cover", borderRadius: "7px" }}
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
                    <div style={{ width: "20%", height: "30%" }}>
                      <img
                        src="./nahoor home page/Share Blogs page/Icons/Time/clock.png"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="blogSlideSecond-subDetail">
                    <div>
                      <p>{explain.duration}</p>
                    </div>
                    <div style={{ width: "20%", height: "30%" }}>
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
                    <div style={{ width: "20%", height: "30%" }}>
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
    </div>
  );
}

export default BlogSlideSecond;
