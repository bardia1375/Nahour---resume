import React, { useState } from "react";
import Support from "./support/support";
import "./profile.css";
import Call from "./call/call";
import ConditionNahor from "./conditionNahor/ConditionNahor";
import Information from "./information/information";
import EditInformation from "./editInformation/editInformation";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Profile = () => {
  const [exite, setExite] = useState(true);
  const changePicture = () => {
    return setExite(!exite);
  };
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
              <NavLink
                onclick={() => changePicture()}
                className={(navDate) =>
                  navDate.isActive
                    ? "profile-sideBarInformationActive1"
                    : "profile-sideBarInformation1"
                }
                to="info"
              >
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/اطلاعات کاربر.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.information}</p>
              </NavLink>

              <NavLink
                to="order"
                className={(navDate) =>
                  navDate.isActive
                    ? "profile-sideBarInformationActive"
                    : "profile-sideBarInformation"
                }
              >
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/Group 62.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.order}</p>
              </NavLink>

              <NavLink
                to="call"
                className={(navDate) =>
                  navDate.isActive
                    ? "profile-sideBarInformationActive"
                    : "profile-sideBarInformation"
                }
              >
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/تماس با ما.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.call}</p>
              </NavLink>

              <NavLink
                to="aboutUs"
                className={(navDate) =>
                  navDate.isActive
                    ? "profile-sideBarInformationActive"
                    : "profile-sideBarInformation"
                }
              >
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/about us.png"
                    alt=""
                    width="100%"
                  />
                </div>

                <p>{sideBarItem.aboutUs}</p>
              </NavLink>

              <NavLink
                to="support"
                className={(navDate) =>
                  navDate.isActive
                    ? "profile-sideBarInformationActive"
                    : "profile-sideBarInformation"
                }
              >
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/supprt.png"
                    alt=""
                    width="100%"
                  />
                </div>

                <p>{sideBarItem.support}</p>
              </NavLink>

              <NavLink
                to="conditions"
                className={(navDate) =>
                  navDate.isActive
                    ? "profile-sideBarInformationActive"
                    : "profile-sideBarInformation"
                }
              >
                <div style={{ width: "8%", marginLeft: "8px" }}>
                  <img
                    src="/nahoor home page/profile/Icons/Icon/non active/قوانین و مقررات.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{sideBarItem.roll}</p>
              </NavLink>

              {exite ? (
                <div
                  className="profile-sideBarInformation"
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={() => changePicture()}
                >
                  <div style={{ width: "8%", marginLeft: "8px" }}>
                    <img
                      src="/nahoor home page/profile/Icons/Icon/non active/خروج.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <p>{sideBarItem.exite}</p>
                </div>
              ) : (
                <div
                  className="profile-sideBarInformation"
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    flexDirection: "column",
                  }}
                >
                  <div
                    onClick={() => changePicture()}
                    style={{
                      width: "100%",
                      marginLeft: "8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ width: "8%", marginTop: "14px",marginRight: "4px"}}>
                      <img
                        src="/nahoor home page/profile/Icons/Icon/non active/خروج.png"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <p>آیا میخواهید از حساب خود در ناهور خارج شوید؟</p>
                  </div>
                  <div className="exite-buttons">
                    <NavLink  style={{ width: "100%" }} to="logOut">
                      <button className="profile-exite">
                        <p>خروج</p>
                      </button>
                    </NavLink>
                    <NavLink  onClick={() => changePicture()} style={{ width: "100%" }} to="logOut">
                      <button className="profile-Cancel">
                        <p>انصراف</p>
                      </button>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="profile-components">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div style={{ width: "8%", marginLeft: "8px" }}>
<img
  src="/nahoor home page/profile/Icons/Icon/non active/خروج.png"
  alt=""
  width="100%"
/>
</div>      <p>{sideBarItem.exite}</p> */
}
