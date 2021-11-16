import React from "react";
import { Title } from "../../../components/AboutUs/title/Title";
import "./callOfNahor.css";
const CallOfNahor = () => {
  const calls = [
    {
      phone: "021-88255946",
      src: "nahoor home page/About Page/Solid/Communication/Phone.svg",
    },
    {
      phone: "021-88255946",
      src: "nahoor home page/About Page/Solid/Communication/Phone.svg",
    },
    {
      phone: "021-88255946",
      src: "nahoor home page/About Page/Solid/Communication/Phone.svg",
    },
    {
      phone: "021-88255946",
      src: "nahoor home page/About Page/Solid/Communication/Phone.svg",
    },
  ];
  return (
    <div className="call-container">
      <div className="call-title">
        <img
          className="call-imgtitle"
          width="8%"
          src="./nahoor home page/About Page/behinde.png"
          alt=""
        />
        <div><Title title="تماس مستقیم با ناهور"/></div>
      </div>

      <div className="call-content">
        <div className="call-right">
          {calls.map((call) => {
            return (
              <div className="call-rightchild">
                <img className="call-rightimg" src={call.src} width="32%" />
                <div>
                  <p className="call-phneRight">{call.phone}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="call-left">
          <img
            src="./nahoor home page/About Page/bro.svg"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default CallOfNahor;
