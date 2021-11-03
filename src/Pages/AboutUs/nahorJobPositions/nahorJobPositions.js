import React from "react";
import "./nahorJobPositions.css"
const NahorJobPositions = () => {
  return (
    <div className="nahorJobPositions-container">
      <h2 >موقعیت های شغلی ناهور</h2>
      <p>
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
