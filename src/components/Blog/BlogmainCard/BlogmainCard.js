import React from "react";
import "./BlogmainCard.css";
function BlogmainCard(props) {
  return (
    <div className="BlogmainCard-container">
      <img
        src={props.Largimg}
        width="100%"
        className="BlogmainCard-img"
        alt=""
      />

      <div style={{ padding: "0" }}>
        <div className="BlogmainCard-subNav">
          <div>
            <h2>hello</h2>
          </div>
          <div>
            <h2>hello</h2>
          </div>
        </div>
        <div className="BlogmainCard-main">
          <h2 className="BlogmainCard-title">{props.mainSubeject}</h2>
          <p className="BlogmainCard-paragraph">{props.paragraph}</p>
        </div>
        <div className="BlogmainCard-footer">
          <div className="BlogmainCard-right">
            <img src={props.imgProfile} width="36%" />
            <div className="BlogmainCard-right2">
              <p>نیما بشیری</p>
              <p>4 آبان 1400</p>
            </div>
          </div>
          <div className="BlogmainCard-left">
            <h3>بیشتر بخوانید +</h3>
            <img
              src={"./nahoor home page/Blogs page/Icons/Bookmark.svg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogmainCard;
