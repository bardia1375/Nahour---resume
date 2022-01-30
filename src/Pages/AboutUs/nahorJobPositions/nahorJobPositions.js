import { margin } from "@mui/system";
import React from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import ButtonComponent from "../../../components/Button/button";
import "./nahorJobPositions.css";
const NahorJobPositions = () => {
  const sentenses = [
    {
      paragraph:
"مجموعه ناهور برای گسترش تجارت بین ایران و افغانستان جهت راحتی و سرعت بیشتر در در استان‌های دیگر به‌جز تهران نمایندگی می‌پذیرد. علاقه‌مندان به شماره واتساپ 989194622170+ پیام ارسال کنند."    },
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
