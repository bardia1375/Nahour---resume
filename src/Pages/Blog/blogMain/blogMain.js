

import React, { useState } from "react";
import BlogmainCard from "../../../components/Blog/BlogmainCard/BlogmainCard";
import "./blogMain.css";
import NavbarHeadBlog from "./navbar";
function BlogMain() {
  const [posts, setPosts] = useState([
    {
      Largimg: "/nahoor home page/Blogs page/green pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "./nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",

      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/purple pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 10 دقیقه",
      mainSubeject: "هر آنچه باید درباره محصولات ارگانیک بدانید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "./nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",

      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/red pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "انواع ماکارونی را بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "/nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/stone pic.png",
      title: "مصالح ساختمانی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "انواع سنپ های ساختمانی و کاربرد آن ها !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "/nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/red pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "انواع ماکارونی را بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "/nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/purple pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "/nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/purple pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "/nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/green pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "خواص سویا را بهتر بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "./nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",

      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
    {
      Largimg: "/nahoor home page/Blogs page/red pic.png",
      title: "صنایع غذایی",
      duration: "خواندن 4 دقیقه",
      mainSubeject: "انواع ماکارونی را بشناسید !",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",

      imgProfile:
        "/nahoor home page/Blogs page/Profile photo/Ellipse 76-2.png",
      name: "نیما بشیری",
      date: "4 آبان 1400",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const [postsPerPage] = useState(3);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="BlogMain-container">
      <div className="BlogMain-navbar">
        <NavbarHeadBlog />
      </div>
      <div className="BlogMain-main">
        {posts.map((Card) => {
          return (
            <BlogmainCard
              Largimg={Card.Largimg}
              title={Card.title}
              duration={Card.duration}
              mainSubeject={Card.mainSubeject}
              paragraph={Card.paragraph}
              imgProfile={Card.imgProfile}
              name={Card.name}
              date={Card.date}
              posts={currentPosts}
              loading={loading}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogMain;
