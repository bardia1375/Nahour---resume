import { margin } from "@mui/system";
import React from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import "./nahorJobPositions.css";
const NahorJobPositions = () => {
  return (
    <div className="nahorJobPositions-container">
      <div className="nahorJobPositions-title">
        <div style={{width:"2%"}}>
          <img
            className="nahorJobPositions-img"
            width="100%"
            src="./nahoor home page/About Page/behinde.png"
            alt=""
          />
        </div>
        <div style={{marginRight:"16px"}}>
          <Title title="بنیان گذاران ناهور" />
        </div>
      </div>
      <p className="nahorJobPositions-paragraph">
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
        از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی
        نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
      </p>
      <button className="buttonPosition">
        موقعیت های شغلی مناسب شما
        <span class="material-icons" style={{ transform: "rotate(180deg)" }}>
          chevron_right
        </span>
      </button>
    </div>
  );
};
export default NahorJobPositions;
