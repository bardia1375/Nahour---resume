import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
      <div className="navbar">
        <div className="navRight">
          <ul>
            <li className="Logo"></li>
            <li><a href="#">خانه</a></li>
            <li><a href="#">درباره ماهور</a></li>
            <li><a href="#">تماس با ما </a></li>
            <li><a href="#">بلاگ </a></li>
            <li><a href="#">فروشگاه</a></li>
            <li><a href="#">اپلیکیشن ماهور</a></li>
          </ul>
        </div>
        <div className="navLeft">EN<span className="arrow-down"></span></div>
      </div>
      <section className="section">
        <div className="content">
          <h1>ناهور</h1>
          <h2>بزرگترین مرجع ارتباطی بین شرکت های ایران و تجار افغانستان</h2>
          <p>
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
          <button className="button" href="#" >
            <span>جزییات بیشتر</span>
             <img width="10px" style={{marginRight: '30px'}} src="../../Icons/arrow.png"/>
          </button>
        </div>
        <div className="header-img">
      <div className="header-img2"></div>
        </div>
      </section></div>
    </div>
  );
};

export default Header;
