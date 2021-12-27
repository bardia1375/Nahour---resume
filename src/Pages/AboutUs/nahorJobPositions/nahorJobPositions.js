import { margin } from "@mui/system";
import React from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import ButtonComponent from "../../../components/Button/button";
import "./nahorJobPositions.css";
const NahorJobPositions = () => {
  const sentenses = [
    {
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
  ];
  return (
    <div className="nahorJobPositions-container">
      <div className="nahorJobPositions-title">
        <div style={{ width: "12px" }}>
          <img
            className="nahorJobPositions-img"
            width="100%"
            src="./nahoor home page/About Page/behinde.png"
            alt=""
          />
        </div>
        <div className="title-nahorJobPositions" style={{ marginRight: "16px" }}>
          <Title title="موقعیت های شغلی ناهور" />
        </div>
      </div>
      {sentenses.map((sentense) => {
        return (
          <div>
            <p className="nahorJobPositions-paragraph">{sentense.paragraph}</p>
          </div>
        );
      })}
      <div className="btn-nahorJobPositions"><ButtonComponent title="موقعیت های شغلی مناسب شما" /></div>
    </div>
  );
};
export default NahorJobPositions;
