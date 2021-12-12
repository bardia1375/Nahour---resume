import React from "react";
import HeaderSlider from "./headerSlider";

import "./headerStore.css";
const HeaderStore = () => {
  const sentences = [
    {
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در مورد استفاده قرار گیرد.",
    },
  ];
  return (
    <div className="headerstore-container">
      <div className="headerstore-main">
        <div className="headerstore-right">
     
            <h1>
              به وبسایت
              <span style={{ fontWeight: "600" }}> فروشگاهی ناهور</span>خوش
              آمدید
            </h1>
    
          <div>
            {sentences.map((sentence) => {
              return <p>{sentence.paragraph}</p>;
            })}
          </div>
        </div>
        <div className="headerstore-left">
          <img src="/nahoor home page/store page/header image.svg" />
        </div>
      </div>

      {/* Header buttom */}
      <div className="headerstore-bottom">
        <div>
          <HeaderSlider />
        </div>
      </div>
    </div>
  );
};

export default HeaderStore;
