import React from "react";
import "./footer.css";
const Footer = () => {
 
 
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="Footer-icons">
          <img
            src="/nahoor home page/Footer/line.png"
            width="24%"
            style={{ marginLeft: "32px" }}
            alt=""
          />
          <a>
            <img
              src="/nahoor home page/Footer/facebook.svg"
              alt=""
              style={{ cursor: "pointer" }}
            />{" "}
          </a>
          <a>
            {" "}
            <img
              src="/nahoor home page/Footer/google.svg"
              alt=""
              style={{
                objectFit: "contain",
                cursor: "pointer",
                marginRight: "16px",
              }}
            />
          </a>
          <a>
            {" "}
            <img
              src="/nahoor home page/Footer/telegram.svg"
              alt=""
              style={{
                objectFit: "contain",
                cursor: "pointer",
                marginRight: "16px",
              }}
            />{" "}
          </a>
          <a>
            {" "}
            <img
              src="/nahoor home page/Footer/whatsapp.svg"
              alt=""
              style={{
                objectFit: "contain",
                cursor: "pointer",
                marginRight: "16px",
              }}
            />{" "}
          </a>
          <img
            src="/nahoor home page/Footer/line.png"
            alt=""
            width="24%"
            style={{ marginRight: "32px" }}
          />
        </div>
        <div className="Footer-items">
          <div className="Footer-culomn">
            <img
              className="Footer-img"
              width="25%"
              src="/nahoor home page/Nahoor logo -2.png"
              alt=""
            />
            <p className="Footer-explain">
              لورم ایپسوم یا ایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این
              یسیبسیبس سیبسیرشسیب متن به عنوان عنصری شاید،
            </p>
          </div>
          <div className="Footer-culomn">
            <h3 className="locationlogo">
              <img
                src="/nahoor home page/Icons/Location.svg"
                style={{ marginLeft: "8px" }}
              />
              آدرس دفتر :
            </h3>
            <p className="Footer-address">
              ایران، تهران، بزرگراه شیخ فضل الله نوری، ستارخان، نرسیده به سازمان
              آب، برج رهنما، واحد 20
            </p>
          </div>
          <div className="Footer-culomn">
            <h3 className="Footer-phoneH3">
              <img
                src="/nahoor home page/Icons/Phone.svg"
                style={{ marginLeft: "8px" }}
              />
              تلفن تماس :
            </h3>
            <div className="Footer-phone">
              <p className="Footer-phone">021-81816578</p>
            </div>
          </div>
          <div className="Footer-culomn">
            <h3 className="Footer-EnvelopeH3">
              <img
                src="/nahoor home page/Icons/Envelope.svg"
                style={{ marginLeft: "8px" }}
              />
              ایمیل :
            </h3>
            <p>nahoor@info.com</p>
          </div>
        </div>
      </div>
      <div className="CopyRight">
        <div>
          <p className="CopyRight-paragraph">
            کلیه حقوق این سایت متعلق به ناهور و شرکت نرم افزاری پیشگامان داده و
            فناوری ویرا می ‌باشد.
          </p>
        </div>
        <div>
          <p className="CopyRight-paragraph">Nahoor.com - 2021 Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
