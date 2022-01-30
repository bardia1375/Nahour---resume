import React  from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import "./GoalsOfNahour.css";
const GoalsOfNahour = () => {
  const cards = [
    {
      img: "./nahoor home page/About Page/nahoor aim icon.png",
      title: "ارتباط مستقیم و بی واسطه",
      titleTransparent:
        "ارتباط مستقیم با بخش فروش کارخانه ها و تجار افغانستانی",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود",
    },
    {
      img: "./nahoor home page/About Page/nahoor aim icon.png",
      title: "مبادله و معامله آسان",
      titleTransparent:
        "ارتباط مستقیم با بخش فروش کارخانه ها و تجار افغانستانی",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود",
    },
    {
      img: "./nahoor home page/About Page/nahoor aim icon.png",
      title: "تجارت با کمترین میزان پول",
      titleTransparent:
        "ارتباط مستقیم با بخش فروش کارخانه ها و تجار افغانستانی",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود",
    },
  ];
  return (
    <div className="Goal-container">
      <img src="./nahoor home page/About Page/arrow icon.svg" alt=""/>
      
      <div className="call-title">
        <img
          className="call-imgtitle"
          width="8%"
          src="./nahoor home page/About Page/behinde.png"
          alt=""
        />
        {/* <h2 className="call-title">اهداف ناهور</h2> */}
        <div><Title title="اهداف ناهور"/></div>
      </div>
     
      <div><p className="Goal-paragraph1">
        مجموعه ما سعی بر این دارد که با آسان نمودن تجارت زمینه فعالیت کسانی که در خانه هستند و مقداری پول جهت خرید کالا و یا خدمات برای عرضه در کشور خود را دارند به راحتی بتوانند از طریق مجموعه ناهور به این امکان دسترسی پیدا کنند .
        و همچنین ایران بدلیل در حال توسعه بودن به مواد خام نیاز مبرم دارد و افغانستان هم بخاطر وجود بسیار زیاد مواد خام بهترین و نزدیکترین کشور به ایران است که امکان مبادلات این مواد خام برای کارخانه های ایرانی را میتوان از طریق مجموعه ما به راحتی انجام داد.
      </p></div>
      <div className="goal-Rectangle">  </div>
        <div className="Goal-cards">
          {cards.map((card) => {
            return (
              <div className="Goal-card">
                <img
                  className="Goal-img"
                  src={card.img}
                  alt={card.title}
                  width="10%"
                />
                <p className="Goal-titlecart">{card.title}</p>
                <p className="Goal-titleTransparent">{card.titleTransparent}</p>
                <p className="Goal-paragraphcart">{card.paragraph} </p>
              </div>
            );
          })}
        </div>
    
    </div>
  );
};

export default GoalsOfNahour;
