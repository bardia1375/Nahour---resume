import React from "react";
import BlogmainCard from "../../../components/Blog/BlogmainCard/BlogmainCard";
import "./blogMain.css";
function BlogMain() {
  const Cards = [
    {
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
      Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
        Largimg: "./nahoor home page/Blogs page/purple pic.png",
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
  ];

  return (
    <div className="BlogMain-container">
      {Cards.map((Card) => {
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
          />
        );
      })}
    </div>
  );
}

export default BlogMain;
