import React from "react";
// import ButtonComponent from "../../../components/Button/button";
import BlogHeaderSlide from "./blogSlide";
import "./headerBlog.css";
const HeaderBlog = () => {
  const cards = [
    {
      title: "ناهور بلاگ | برای شما که اهل خواندنید",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
    },
  ];
  return (
    <div className="HeaderBlog-container">
      <div
        className="HeaderBlog-right"
        style={{ width: "40vw", height: "100%" }}
      >
        <BlogHeaderSlide />
      </div>
      <div className="HeaderBlog-left">
        <div className="HeaderBlog-firstleft">
          {cards.map((card) => {
            return (
              <div className="HeaderBlog-firstleft1">
                <div>
                  <h2>{card.title}</h2>
                </div>
                <button>دنبال کردن</button>
                <div>
                  <p>{card.paragraph}</p>
                </div>
                <div>
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                  <img src="./nahoor home page/Blogs page/Icons/Brands/instagram.svg" />
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src="./nahoor home page/Blogs page/pink poster.png"
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBlog;
