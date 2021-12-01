import React from "react";
import "./ShareBlogHeader.css";
function ShareBlogHeader() {
  const contents = [
    {
      img: "/nahoor home page/Blogs page/purple pic.png",
      title: "هر آنچه باید از محصولات اورگانیک بدانید",
      profileImg: "",
      name: "نیما بشیری",
      duration: "خواندن 4 دقیقه",
      date: "4 آبان 1400",
    },
  ];
  return (
    <div className="shareBlog-mainContainer">
      {contents.map((content) => {
        return (
          <div className="shareBlog-main">
            <div
              style={{ width: "100%", height: "36vh",marginTop:"36px" }}
            >
              <img
                src={content.img}
                width="100%"
                height="100%"
                alt=""
                style={{ objectFit: "fill" }}
              />
            </div>
            <h2>{content.title}</h2>
            <div className="shareBlog-content">
              <div className="shareBlog-content-main-right">
                <div
                  className="shareBlog-content-right"
                  style={{ width: "30%" }}
                >
                  <div style={{ width: "30%" }}>
                    <img
                      src="/nahoor home page/Ellipse 76.png"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="shareBlog-content-name">{content.name}</p>
                  </div>
                </div>
                <div className="shareBlog-content-mid">
                  <div style={{ paddingRight: "8px", width: "20%" }}>
                    <img
                      width="100%"
                      src="/nahoor home page/Share Blogs page/Icons/Time/clock.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p style={{ paddingRight: "8px" }}>{content.duration}</p>
                  </div>
                </div>
                <div className="shareBlog-content-left">
                  <div style={{ width: "20%" }}>
                    <img
                      width="100%"
                      src="/nahoor home page/Share Blogs page/Icons/Business/calender.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{content.date}</p>
                  </div>
                </div>
              </div>
              <div className="shareBlog-content-main-left">
                <img
                  src="/nahoor home page/Share Blogs page/Icons/Outline/Brands/Facebook.svg"
                  alt=""
                />
                <img
                  src="/nahoor home page/Share Blogs page/Icons/Outline/Brands/Linkedin.svg"
                  alt=""
                />
                <img
                  src="/nahoor home page/Share Blogs page/Icons/Outline/Brands/Twitter.svg"
                  alt=""
                />
                <img
                  src="/nahoor home page/Share Blogs page/Icons/Outline/Files/Copy.svg"
                  alt=""
                />
                <img
                  src="/nahoor home page/Share Blogs page/Icons/Outline/Communication/Share.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShareBlogHeader;
