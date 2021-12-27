import React from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import "./FoundersofNahor.css";
const FoundersofNahor = () => {
  const founders = [
    {
      img: "./nahoor home page/About Page/image 3.png",
      name: "علی رحمانی",
      job: "ایده پرداز و مدیر فنی",
      linkdin: "./nahoor home page/About Page/Solid/Brands/Linkedin.png",
      facebook: "./nahoor home page/About Page/Solid/Brands/Facebook.png",
    },
    {
      img: "./nahoor home page/About Page/image 1.png",
      name: "زهرا رحمانی",
      job: " دیجیتال مارکتینگ",
      linkdin: "./nahoor home page/About Page/Solid/Brands/Linkedin.png",
      facebook: "./nahoor home page/About Page/Solid/Brands/Facebook.png",
    },
    {
      img: "./nahoor home page/About Page/image2.png",
      name: "رضا کاظمی",
      job: "بازاریاب",
      linkdin: "./nahoor home page/About Page/Linkedin.svg",
      facebook: "./nahoor home page/About Page/Facebook.svg",
    },
  ];
  return (
    <div className="Founders-container">
      <div className="call-title">
        <img
          className="call-imgtitle"
     
          src="./nahoor home page/About Page/behinde.png"
          alt=""
        />
        <div>
          <Title title="بنیان گذاران ناهور" />
        </div>
      </div>
      <div className="Founders-main">
        {founders.map((founder) => {
          return (
            <div className="Founders-img">
              <div>
               <div><img src={founder.img} width="100%" /></div>
                <div className="Founders-box">
                  <div>
                    <div className="Founders-img2-name">{founder.name}</div>
                    <div className="Founders-img2-job">{founder.job}</div>
                  </div>
                  <div className="Founders-img2-social">
                  {/* <div style={{width: '60%'}}><img src={founder.linkdin} width="100%"/></div>
                    <div style={{width: '70%'}}><img src={founder.facebook} width="100%"/></div> */}
                    <div>in</div>
                    <div>f</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <img className="Founders-img" src="./nahoor home page/About Page/image 3.png" /> */}
      </div>
    </div>
  );
};

export default FoundersofNahor;

{
  /* <div className="Founders-container">
<div className="Founders-title">
  <img src="" alt="" />
  <h2>بنیان گذاران ناهور</h2>
</div>
<div className="Founders-content">
  {founders.map((founder) => {
    return (
      <div className="Founders-content">
        <div className="Founders-imgtext">
          <img
            src="./nahoor home page/About Page/image 3.png"
            width="32%"
            alt=""
          />
          <div className="Founders-textImg">
            <div className="Founders-right">
              <h3 className="Founders-name">{founder.name}</h3>
              <p className="Founders-job">{founder.job}</p>
            </div>
            <div className="Founders-left">
              <img src={founder.linkdin} alt="" width="24%" />
              <img src={founder.linkdin} alt="" width="24%"/>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
</div> */
}

///////////////////////////////////
{
  /* <div className="Founders-container">
<div className="call-title">
  <img
    className="call-imgtitle"
    width="30px"
    src="./nahoor home page/About Page/behinde.png"
    alt=""
  />
  <div><Title title="بنیان گذاران ناهور"/></div>
</div>
<div className="Founders-main">
  {founders.map((founder) => {
    return (
      <div className="Founders-img">
        <p className="Founders-img2">
          <div>
            <p className="Founders-img2-name">{founder.name}</p>
            <p className="Founders-img2-job">{founder.job}</p>
          </div>
          <div className="Founders-img2-in">
            <div><p >in</p></div>
            <div><p >f</p></div>
          </div>
        </p>
      </div>
    );
  })}
</div>
</div> */
}
