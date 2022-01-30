import React from "react";
import "./Header.css";
const Header = () => {
  const sentenses = [
    {
      title: "ما در ناهور چه کاری انجام میدهیم؟",
      paragraph: "شسیشسیشسشسیشسیشسیشسیشسیشسیشسشسیش",
    },
  ];
  return (
    <>
      <div className="About-container">
        <div className="About-title">
          <div className="AboutUs-right">
            <div className="AboutUs-behinde">
              <img
                className="AboutUs-Logo"
                width="100%"
                src="./nahoor home page/About Page/behinde.svg"
                alt=""
              />
            </div>
            <div>
              <h1 className="AboutUsLogo-title">درباره ناهور</h1>
            </div>
          </div>
        </div>
        <div className="About-content">
          {sentenses.map((sentense) => {
            return (
              <div className="About-content">
                <h2>{sentense.title}</h2>
                <p className="About-paragraph">
                  <div>
                    <p className="textParagraph">
                      از آنجایی که ظرفیت مبادله تجاری میان ایران و افغانستان
                      بسیار بیشتر از میزان فعلی است و همچنین افغانستان دروازه
                      آسیای میانه است، ناهور سعی بر این دارد که با آسان و سهل
                      نمودن ارتباط بین شرکت‌های ایرانی و خارجی بخصوص افغانستان
                      میزان مبادلات تجاری را به ظرفیت واقعی نزدیکتر نماید.{" "}
                      <br />
                      ناهور با ایجاد فضای مناسب جهت ثبت و نمایش تولیدات
                      کارخانه‌ها و خدمات شرکت‌ها موجب میشود که خریدار این
                      محصولات بتوانند به راحتی توسط گوشی موبایل خود به این
                      محصولات دسترسی داشته .باشند
                    </p>
                  </div>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="About-img-bottom">
        <img
          src="./nahoor home page/About Page/about nahoor vector.svg"
          width="100%"
        />
      </div>
    </>
  );
};

export default Header;
