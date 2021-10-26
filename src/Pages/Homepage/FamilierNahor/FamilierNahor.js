import React from "react";
import "./FamilierNahor.css";
const FamilierNahor = () => {
  return (
    <div className="mainFamilier">
      <div className="containerFamilier">
        <div className="mapFamilier">
          <img width="100%" height="100%" src="./nahoor home page/Iran-Afghnistan.png" />
        </div>
        <div className="contentFamilier">
          <h2 className="textFamilierH2">آشنایی بیشتر با ناهور</h2>
          <p className="textParagraph">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <button className="buttonFamilier">
            <span className="textFamilier">بیشتر بخوانید </span>
            <img
              width="10px"
              src="Icons/arrow.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilierNahor;
