import React, { useState } from "react";
import "./Header2.css";
import Navbar from "./Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
const HeaderSample = () => {
  const [picture, setPicture] = useState(true);
  const changePicture = () => {
    setPicture(!picture);
  };
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
                ناهور بزرگترین و اولین مرجع ارتباطی بین شرکت‌های ایران و
                افغانستان
              </h2>
              <p className="HeaderMainExplain">
                ما سعی داریم ارتباط میان تولیدکنندگان ایرانی و تجار افغانی را به
                سهل‌ترین و ساده‌ترین روش امکان پذیر نماییم تا از این طریق میزان
                مبادلات بیشتر شود و همچنین قیمت تمام شده کالا برای
                مصرف کننده به حداقل برسد تا هم تاجر و هم مصرف کننده راضی باشند.
              </p>
              <Link to="/about" className="button">
                <span
                  className="HeaderMainButton"
                  style={{ fontFamily: "iranSans", fontSize: "0.8rem" }}
                >
                  جزییات بیشتر
                </span>
                <span
                  class="material-icons"
                  style={{ transform: "rotate(180deg)" }}
                >
                  chevron_right
                </span>
              </Link>
            </div>
            <div>
              {picture ? (
                <div className="HeaderMainLeft">
                  <div
                    onClick={() => changePicture()}
                    className="HeaderMainLeft1"
                  >
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
                </div>
              ) : (
                <div className="HeaderMainLeft">
                  <div
                    style={{ zIndex: "100" }}
                    onClick={() => changePicture()}
                    className="HeaderMainLeft1"
                  >
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnchorLink href="#application" className="header-bottombutton">
        <div>
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
