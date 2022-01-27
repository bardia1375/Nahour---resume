import React, { useState } from "react";
import Support from "./support/support";
import "./profile.css";
import Call from "./call/call";
import ConditionNahor from "./conditionNahor/ConditionNahor";
import Information from "./information/information";
import EditInformation from "./editInformation/editInformation";
import { Outlet } from "react-router";
import SideBar from "./sideBar/sideBar";

const Profile = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className="profile-container">
      {  hide ? (
        <div>
          <SideBar setHide={setHide}/>
        </div>
      ) : null}
      {hide ? null : (
        <div className="profile-components">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Profile;
