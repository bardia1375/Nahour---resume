import React from "react";
import ButtonComponent from "../../../components/Button/button";
import Title from "../../../components/home/title/Title";
import "./FamilierNahor.css";
import { Link } from "react-router-dom";

const FamilierNahor = () => {
  return (
    <div className="mainFamilier">
      <div className="containerFamilier">
        <div className="mapFamilier">
          <img
            className="mapFamilier-img"
            height="auto"
            src="./nahoor home page/Iran-Afghnistan.png"
          />
        </div>
        <div className="contentFamilier">
          <div style={{ marginTop: "50px" }}>
            <Title title=" آشنایی بیشتر با ناهور" />
          </div>
          <div>
            <p className="textParagraph">
              از آنجایی که ظرفیت مبادله تجاری میان ایران و افغانستان بسیار بیشتر
              از میزان فعلی است و همچنین افغانستان دروازه آسیای میانه است،
              ناهور سعی بر این دارد که با آسان و سهل نمودن ارتباط بین شرکت‌های
              ایرانی و خارجی بخصوص افغانستان میزان مبادلات تجاری را به ظرفیت واقعی
              نزدیکتر نماید.<br/>
          ناهور با ایجاد فضای مناسب جهت ثبت و نمایش تولیدات کارخانه‌ها و خدمات شرکت‌ها موجب میشود که خریدار این محصولات بتواند به راحتی توسط گوشی موبایل خود به این محصولات دسترسی داشته باشند.</p>
            
          </div>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <div style={{ marginBottom: "48px", marginTop: "24px" }}>
              <ButtonComponent title="بیشتر بخوانید" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamilierNahor;
