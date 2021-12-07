import React from "react";
import "./call.css";
const Call = () => {
  const Title = ["تماس با ما"];
  const calls = [
    {
      img: "/nahoor home page/profile/Icons/Icon/location.svg",
      title: "آدرس:",
      paragraph:
        " تهران - کیلومتر 22 جاده تهران ساوه - روبروی شهرک قائمیه-شرکت ناهور",
    },
    {
      img:"/nahoor home page/profile/Icons/Icon/phone.svg",
      title: "شماره تماس:",
      paragraph: "021-57524",
    },
    {
      img:"/nahoor home page/profile/Icons/Icon/website.svg",
      title: "وبسایت:",
      paragraph: "nahoor.ir",
    },
    {
      img:"/nahoor home page/profile/Icons/Icon/Group 372.svg",
      title: "ایمیل:",
      paragraph: "information-dairly.com",
    },
  ];
  return (
    <div className="callProfile-containers">
      <div className="callProfile-title">
        <div>
          <h2>{Title}</h2>
        </div>
        <div className="callProfile-img">
          <img src="/nahoor home page/profile/calling/amico.svg" />
        </div>
      </div>
      <div className="callProfile-main">
        {calls.map((call) => {
          return (
            <div className="callProfile-content">
              <div className="callProfile-items">
                <img src={call.img} />
                <h2>{call.title}</h2>
              </div>
              <p>{call.paragraph}</p>
            </div>
          );
        })}
      </div>
      <div className="callProfile-social">
        <div className="callProfile-socialItems"><img className="callProfile-socialItem" src="/nahoor home page/profile/Icons/Icon/instagram.svg" /></div>
        <div className="callProfile-socialItems"><img className="callProfile-socialItem" src="/nahoor home page/profile/Icons/Icon/linkedin.svg"/></div>
        <div className="callProfile-socialItems"><img className="callProfile-socialItem" src="/nahoor home page/profile/Icons/Icon/twitter.svg"/></div>
      </div>
    </div>
  );
};

export default Call;
