import React from "react";
import "./ShareBlogCard.css";
function ShareBlogCard(props) {
  return (
    <div className="ShareBlogCard-container" style={{ width: "100%" }}>
      <div>
        <img
          src={props.Largimg}
          width="100%"
          className="ShareBlogCard-img"
          alt=""
        />
      </div>

      <div style={{ width: "100%" }}>
        <div className="ShareBlogCard-subNav">
          <div>
            <h2>صنایع غذایی</h2>
          </div>
          <div>
            <h2>خواندن 4 دقیقه</h2>
          </div>
        </div>
        <div className="ShareBlogCard-main">
          <h2 className="ShareBlogCard-title" style={{ fontSize: "1.2rem" }}>
            {props.mainSubeject}
          </h2>
        </div>
        <div className="ShareBlogCard-footer">
          <div className="ShareBlogCard-right">
            <div style={{ width: "28%" }}>
              <img src={props.imgProfile} width="100%" />
            </div>
            <div className="ShareBlogCard-right2">
              <div>
                <p>نیما بشیری</p>
              </div>
              <div>
                <p>4 آبان 1400</p>
              </div>
            </div>
          </div>
          <div className="ShareBlogCard-left">
            <div>
              <p>بیشتر بخوانید +</p>
            </div>
            <div style={{ width: "32%" }}>
              <img
                width="100%"
                src={"./nahoor home page/Blogs page/Icons/Bookmark.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareBlogCard;
