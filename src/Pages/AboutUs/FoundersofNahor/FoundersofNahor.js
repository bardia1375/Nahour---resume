import React from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import "./FoundersofNahor.css";
const FoundersofNahor = () => {
  const founders = [
    {
      img: "./nahoor home page/About Page/image 3.png",
      name: "شکیبا رحمانی",
      job: "ایده پرداز و مدیر فنی",
      linkdin: "./nahoor home page/About Page/nahoor aim icon.png",
      facebook: "",
    },
    {
      img: "",
      name: "شکیبا رحمانی",
      job: " مدیر فنی",
      linkdin: "./nahoor home page/About Page/nahoor aim icon.png",
      facebook: "",
    },
    {
      img: "",
      name: "شکیبا رحمانی",
      job: "ایده پرداز و مدیر فنی",
      linkdin: "./nahoor home page/About Page/nahoor aim icon.png",
      facebook: "",
    },
  ];
  return (
    <div className="Founders-container">
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
