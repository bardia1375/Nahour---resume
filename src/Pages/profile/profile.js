import React from "react";
import Support from "./support/support";
import "./profile.css";
import Call from "./call/call";
import ConditionNahor from "./conditionNahor/ConditionNahor";
import Information from "./information/information";
import EditInformation from "./editInformation/editInformation";

const Profile = () => {
  const sideBarItems = [
    {
      profileImg: "/nahoor home page/profile/profile photo.svg",
      profileName: "پریا باب الحوائجی",
      informationImg:
        "/nahoor home page/profile/Icons/Icon/active/اطلاعات کاربر.svg",
      information: "اطلاعات حساب کاربری",
      orderImg: "/nahoor home page/profile/Icons/Icon/active/اطلاعات کاربر.svg",
      order: "سفارش ها",
      callImg: "/nahoor home page/profile/Icons/Icon/active/supprt.svg",
      call: "تماس با ما",
      aboutUsImg:
        "/nahoor home page/profile/Icons/Icon/active/اطلاعات کاربر.svg",
      aboutUs: "درباره ما",
      supportImg: "/nahoor home page/profile/Icons/Icon/active/supprt.svg",
      support: "پشتیبانی",
      rollImg: "/nahoor home page/profile/Icons/Icon/active/اطلاعات کاربر.svg",
      roll: "قوانین و مقررات",
      exiteImg: "/nahoor home page/profile/Icons/Icon/active/اطلاعات کاربر.svg",
      exite: "خروج",
    },
  ];
  return (
    <div className="profile-container">
      <div>
        {sideBarItems.map((sideBarItem) => {
          return (
            <div className="profile-sideBar">
              <div className="profile-photo">
                <img src="/nahoor home page/profile/profile photo.svg" />
                <h3>{sideBarItem.profileName}</h3>
              </div>

              <div className="profile-sideBarItem1">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/اطلاعات کاربر.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.information}</p>
              </div>

              <div className="profile-sideBarItem">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/Group 62.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.order}</p>
              </div>

              <div className="profile-sideBarItem">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/تماس با ما.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.call}</p>
              </div>

              <div className="profile-sideBarItem">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/about us.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.aboutUs}</p>
              </div>

              <div className="profile-sideBarItem">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/supprt.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.support}</p>
              </div>

              <div className="profile-sideBarItem">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/قوانین و مقررات.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.roll}</p>
              </div>

              <div className="profile-sideBarItem">
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/خروج.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.exite}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="profile-components">
        {/* <Support/> */}
        {/* <Call/> */}
        {/* <ConditionNahor/> */}
        {/* <Information/> */}
        <EditInformation />
      </div>
    </div>
  );
};

export default Profile;
