import React, { useState } from "react";
import Title from "../../../components/home/title/Title";
import "./Application.css";
const Application = () => {
  const [show, setShow] = useState(true);

  const changePicture = (e) => {
    setShow(!show);
  };

  return (
    <div className="Applicationmain" id="application" behavior="smooth">
      <div className="Applicationcontainer">
        <div className="Applicationcontent">
          {/* <h2 className="Application-title">دانلود اپلیکیشن</h2> */}
          <div className="Application-title">
            <Title title="دانلود اپلیکیشن" />
          </div>
          <h3 className="ApplicationParagraph">
            نسخه اندروید و آی او اس
            <span style={{ color: "#6B006D", fontWeight: "600" }}> ناهور </span>
            در اپل استور ، گوگل پلی و به صورت مستقیم از طریق - 
            <span style={{ color: "#6B006D", fontWeight: "600" }}>
               وب سایت ناهور-  
            </span>
            قابل دانلود است.
          </h3>
          <div className="ApplicationButton">
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <div className="InnerButton1">Available on the</div>
                <div className="InnerButton2">App Store</div>
              </span>
              <div>
                <img width="100%" src="Icons/apple.svg" />
              </div>
            </button>
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">Google Play </span>
              </span>
              <div>
                <img width="100%" src="Icons/google play.svg" />
              </div>
            </button>
            <button className="ApplicationButton1">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">Direct Device</span>
              </span>
              <div>
                <img
                  onmouseover="this.src='apple.png"
                  width="100%"
                  src="Icons/download.svg"
                />
              </div>
            </button>
          </div>
        </div>
        {show ? (
          <div className="ApplicationImage">
            <div onClick={(e) => changePicture(e)} style={{ width: "28%" }}>
              <img
                width="100%"
                height="100%"
                className="ApplicationImage1"
                alt=""
                src="./nahoor home page/IphonFirst.png"
              />
            </div>
            <div
              onClick={(e) => changePicture(e)}
              style={{ width: "24%", marginRight: "80px" }}
            >
              <img
                width="100%"
                height="100%"
                alt=""
                className="ApplicationImage2"
                src="./nahoor home page/IphoneSecond.png"
              />
            </div>
          </div>
        ) : (
          <div className="ApplicationImage">
            <div onClick={(e) => changePicture(e)} style={{ width: "24%" }}>
              <img
                width="100%"
                height="100%"
                className="ApplicationImage1"
                alt=""
                src="./nahoor home page/iphonefirstonclick.png"
              />
            </div>
            <div
              onClick={(e) => changePicture(e)}
              style={{ width: "28%", marginRight: "80px" }}
            >
              <img
                width="100%"
                height="100%"
                alt=""
                className="ApplicationImage2"
                src="./nahoor home page/iphoneSecondonClick.png"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Application;
