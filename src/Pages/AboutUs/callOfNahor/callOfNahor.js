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
      cell: "09121111111",
      src: "nahoor home page/About Page/Solid/Devices/Mobile-phone.svg",
    },
    {
      email: "reza@gmail.com",
      src: "nahoor home page/About Page/Solid/Communication/Envelope.svg",
    },
    {
      maps: "https://goo.gl/maps/2XtLrGoTWgetCfhe6",
      src: "nahoor home page/About Page/Solid/Navigation/Location.svg",
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
        <div>
          <Title title="تماس مستقیم با ناهور" />
        </div>
      </div>

      <div className="call-content">
        <div className="call-right" >
          {calls.map((call) => {
            return (
              <div className="call-rightchild" >
                <div className="call-rightimg" >
                  <img src={call.src}  width="100%"/>
                </div>
                <div className="call-phoneRightmain" >
                  <div>
                    <a className="call-phoneRight" href="tel:66519367">
                      {call.phone}
                    </a>
                  </div>
                  <div>
                    <a className="call-phoneRight" href="tel:09121111100">
                      {call.cell}
                    </a>
                  </div>
                  <div>
                    <a className="call-phoneRight" href="#">
                      {call.email}
                    </a>
                  </div>
                  <div>
                    <a className="call-phoneRight" href="#">
                      {call.maps}
                    </a>
                  </div>
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
