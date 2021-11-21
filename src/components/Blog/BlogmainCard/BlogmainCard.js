import React from "react";
import "./BlogmainCard.css";
function BlogmainCard(props) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="BlogmainCard-container">
      <div>
        <img
          src={props.Largimg}
          width="100%"
          className="BlogmainCard-img"
          alt=""
        />
      </div>

      <div className="BlogmainCard-subNav">
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <p>{props.duration}</p>
        </div>
      </div>
      <div className="BlogmainCard-main">
        <h3 className="BlogmainCard-title">{props.mainSubeject}</h3>
        <p className="BlogmainCard-paragraph">{props.paragraph}</p>
      </div>
      <div className="BlogmainCard-footer">
        <div className="BlogmainCard-right">
          <div style={{ width: "40px" }}>
            <img src={props.imgProfile} width="100%" />
          </div>
          <div className="BlogmainCard-right2">
            <div>
              <h4>{props.name}</h4>
            </div>
            <div>
              <h4>{props.date}</h4>
            </div>
          </div>
        </div>
        <div className="BlogmainCard-left">
          <div>
            <p>بیشتر بخوانید +</p>
          </div>
          <div style={{ width: "20%" }}>
            <img
              src={"./nahoor home page/Blogs page/Icons/Bookmark.svg"}
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogmainCard;
