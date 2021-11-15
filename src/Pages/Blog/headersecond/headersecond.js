import React from "react";
// import BlogHeaderSlide from "../headerBlog/blogSlide";
import BlogSlideSecond from "./blogSlideSecond";
import "./headersecond.css";
function Headersecond() {
  const Headers = [
    {
      largImg: "",
      titleCard: "ناهور بلاگ | برای شما که اهل خواندنید",
      mainCard:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
      shortImg: "./nahoor home page/Blogs page/pink poster.png",
      button: "دنبال کردن",
    },
  ];
  return (
    // rightSide
    <div>
      {Headers.map((Header) => {
        return (
          <div className="headersecond-container">
            <div className="headersecond-right">
             
              <BlogSlideSecond />
            </div>

            {/* LeftSide */}

            <div className="headersecond-left">
              <div className="headersecond-leftTop">
                <div className="headersecond-leftTopTitile">
                  <h2>{Header.titleCard}</h2>
                </div>

                <div className="headersecond-leftTopButton">
                  <button>{Header.button}</button>
                </div>

                <div className="headersecond-mainCard">
                  <p>{Header.mainCard}</p>
                </div>

                <div className="headersecond-iconscard">
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                </div>
              </div>

              <div className="headersecond-leftBottom">
                <img src={Header.shortImg} width="100%" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Headersecond;
