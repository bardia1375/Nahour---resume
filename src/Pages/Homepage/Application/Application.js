import { fontWeight } from "@mui/system";
import React from "react";
import Title from "../../../components/home/title/Title";
import "./Application.css";
const Application = () => {

  return (
    <div  className="Applicationmain" id="application" behavior="smooth">
      <div className="Applicationcontainer" >
        <div className="Applicationcontent">
          {/* <h2 className="Application-title">دانلود اپلیکیشن</h2> */}
          <div className="Application-title"><Title title="دانلود اپلیکیشن"/></div>
          <h2 className="ApplicationParagraph">
            نسخه اندروید و آی او اس
            <span style={{ color: "#6B006D" ,fontWeight:"600" }}> ناهور</span> در اپل استور ، گوگل
            پلی و به صورت مستقیم از وبسایت
            <span style={{ color: "#6B006D",fontWeight:"600" }}> وب سایت ناهور</span> قابل دانلود
            است.
          </h2>
          <div className="ApplicationButton">
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <div className="InnerButton1">Available on the</div>
                <div className="InnerButton2">App Store</div>
              </span>
              <div><img width="100%" src="Icons/apple.svg" /></div>
            </button>
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">Google Play </span>
              </span>
              <div><img width="100%" src="Icons/google play.svg" /></div>
            </button>
            <button className="ApplicationButton1">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">Direct Device</span>
              </span>
              <div><img onmouseover="this.src='apple.png" width="100%" src="Icons/download.svg" /></div>
            </button>
          </div>
        </div>

        <img
          width="10%"
          height="100%"
          className="ApplicationImage1"
          alt=""
          src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup.png"
        />
        <img
          width="9%"
          height="100%"
          alt=""
          className="ApplicationImage2"
          src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup-2.png"
        />
      </div>
    </div>
  );
};

export default Application;
