import React from "react";
import Tiltle from "../../../components/Title/Tiltle";
import "./Application.css";
const Application = () => {
  return (
    <div className="Applicationmain">
      <div className="Applicationcontainer">
        <div className="Applicationcontent">
          <Tiltle title="دانلود اپلیکیشن" />
          <h2 className="ApplicationParagraph">
            نسخه اندروید و آی او اس{" "}
            <span style={{ color: "#6B006D" }}>ناهور</span> در اپل استور ، گوگل
            پلی و به صورت مستقیم از وبسایت{" "}
            <span style={{ color: "#6B006D" }}> وب سایت ناهور</span> قابل دانلود
            است.
          </h2>
          <div className="ApplicationButton">
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">App Store</span>
              </span>
              <img width="25px" src="Icons/apple.png" />
            </button>
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">Google Play </span>
              </span>
              <img width="25px" src="Icons/apple.png" />
            </button>
            <button className="ApplicationButton1 ">
              <span className="InnerButton">
                <span className="InnerButton1">Available on the</span>
                <span className="InnerButton2">Direct Device</span>
              </span>
              <img width="25px" src="Icons/apple.png" />
            </button>
          </div>
        </div>

        <img
          width="15%"
          className="ApplicationImage"
          src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup.png"
        />
        <img
          width="12%"
          className="ApplicationImage"
          src="./nahoor home page/iPhone 12 Pro 6.1_ Mockup-2.png"
        />
      </div>
    </div>
  );
};

export default Application;
