import React, { useState } from "react";
import "./Header2.css";
import Navbar from "./Navbar";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const HeaderSample = () => {
const [picture,setPicture]= useState(true)
const changePicture=()=>{
  setPicture(!picture)
}
  return (
    <div className="header-link">
      <div className="HeaderContainer">
        <div className="HeaderItems">
          <div className="HeaderNav">
            <Navbar />
       
            
          </div>
          <div className="HeaderMain">
            <div className="HeaderMainRight">
              <h1 className="HeaderMainTitle">ناهور</h1>
              <h2 className="HeaderMainTitle2">
                بزرگترین مرجع ارتباطی بین شرکت های ایران و تجار افغانستان
              </h2>
              <p className="HeaderMainExplain">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <button className="button" href="#">
                <span>جزییات بیشتر</span>
                <span
                  class="material-icons"
                  style={{ transform: "rotate(180deg)" }}
                >
                  chevron_right
                </span>
              </button>
            </div>
           {picture? <div className="HeaderMainLeft">
              <div  onClick={()=>changePicture()} className="HeaderMainLeft1">
                <img
                  className="HeaderMainLeft1"
                  src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup.png"
                  alt=""
                />
              </div>
              <div className="HeaderMainLeft">
                <img
                  className="HeaderMainLeft2"
                  src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup.png"
                  alt=""
                />
              </div>
            </div>:<div className="HeaderMainLeft">
              <div style={{zIndex:"100"}} onClick={()=>changePicture()} className="HeaderMainLeft1">
                <img
                  className="HeaderMainLeft1"
                  src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup.png"
                  alt=""
                />
              </div>
              <div  className="HeaderMainLeft">
                <img
                  className="HeaderMainLeft2"
                  src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup.png"
                  alt=""
                />
              </div>
            </div>}
          </div>
        </div>
      </div>
      <img
        className="header-bottombuttonimg"
        src="./nahoor home page/Icons/Ellipse.svg"
        width="150px"
        height="150px"
        alt=""
      />
      <AnchorLink href="#application" className="header-bottombutton">
        <div >
          <span
            class="material-icons"
            style={{
              transform: "rotate(90deg)",
              color: "white",
              fontSize: "2rem",
            }}
          >
            chevron_right
          </span>
        </div>
      </AnchorLink>
    </div>
  );
};

export default HeaderSample;
