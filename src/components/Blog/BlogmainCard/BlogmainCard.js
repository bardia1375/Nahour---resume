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
      <div>
        <div className="BlogmainCard-subNav">
          <div>
            <h2>صنایع غذایی</h2>
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
            <div style={{ width: "30%" }}>
              <img src={props.imgProfile} width="100%" />
            </div>
            <div className="BlogmainCard-right2">
              <div>
                <p>نیما بشیری</p>
              </div>
              <div>
                <p>4 آبان 1400</p>
              </div>
            </div>
          </div>
          <div className="BlogmainCard-left">
            <div>
              <h3>بیشتر بخوانید +</h3>
            </div>
            <div>
              <img
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

export default BlogmainCard;
