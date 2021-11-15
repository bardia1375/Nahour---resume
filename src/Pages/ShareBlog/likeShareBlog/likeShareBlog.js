import React from "react";
import ShareBlogCard from "../../../components/ShareBlog/Card/ShareBlogCard";
import "./likeShareBlog.css";
function LikeShareBlog() {
  const Cards = [
    {
      Largimg: "./nahoor home page/Blogs page/purple pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      imgProfile:
        "./nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "./nahoor home page/Blogs page/purple pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      imgProfile:
        "./nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "./nahoor home page/Blogs page/purple pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      imgProfile:
        "./nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
  ];
  return (
    <div className="LikeShareBlog-container">
      <div>
        <h2>شاید از این نوشته ها خوشتان بیاید:))</h2>
      </div>
      <div className="LikeShareBlog-content">
        {Cards.map((Card) => {
          return (
            <div className="LikeShareBlog-cards">
              <ShareBlogCard
                Largimg={Card.Largimg}
                title={Card.title}
                duration={Card.duration}
                mainSubeject={Card.mainSubeject}
                paragraph={Card.paragraph}
                imgProfile={Card.imgProfile}
                name={Card.name}
                date={Card.date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LikeShareBlog;
