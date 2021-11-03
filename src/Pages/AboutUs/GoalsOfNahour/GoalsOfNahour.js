import React  from "react";
import "./GoalsOfNahour.css";
const GoalsOfNahour = () => {
  const cards = [
    {
      img: "./nahoor home page/About Page/nahoor aim icon.png",
      title: "ارتباط مستقیم و بی دغدغه",
      titleTransparent:
        "ارتباط مستقیم با بخش فروش کارخانه ها و تجار افغانستانی",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود",
    },
    {
      img: "./nahoor home page/About Page/nahoor aim icon.png",
      title: "ارتباط مستقیم و بی دغدغه",
      titleTransparent:
        "ارتباط مستقیم با بخش فروش کارخانه ها و تجار افغانستانی",
      paragraph:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود",
    },
    {
      img: "./nahoor home page/About Page/nahoor aim icon.png",
      title: "ارتباط مستقیم و بی دغدغه",
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
        <h2 className="call-title">اهداف ناهور</h2>
      </div>
     
      <p className="Goal-paragraph1">
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
        از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
      </p>
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
