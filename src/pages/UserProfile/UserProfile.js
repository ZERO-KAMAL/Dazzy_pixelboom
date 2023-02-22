import React, { useState } from "react";
import Passoword from "../../components/UI/TabContent/Password/Passoword";
import Profile from "../../components/UI/TabContent/Profile/Profile";
import SubAccount from "../../components/UI/TabContent/SubAccount/SubAccount";
import "./UserProfile.scss";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("myProfile");
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="userProfile">
        <div className="content-title">
          <h3>Account</h3>
          <span>Joined in 27/12/2022</span>
        </div>
        <div className="content-wrapper">
          <div className="tabs">
            <button
              className={`tab-item ${
                activeTab === "myProfile" ? "active" : ""
              }`}
              onClick={() => onClickTabItem("myProfile")}
            >
              My Profile
            </button>
            <button
              className={`tab-item ${activeTab === "password" ? "active" : ""}`}
              onClick={() => onClickTabItem("password")}
            >
              Password
            </button>
            <button
              className={`tab-item ${
                activeTab === "subAccount" ? "active" : ""
              }`}
              onClick={() => onClickTabItem("subAccount")}
            >
              Sub Accounts
              <span></span>
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "myProfile" && (
              <div className="tab-content_wrapper ms-md-4">
                <Profile />
              </div>
            )}
            {activeTab === "password" && (
              <div className="tab-content_wrapper ms-md-4">
                <Passoword />
              </div>
            )}
            {activeTab === "subAccount" && (
              <div className="tab-content_wrapper">
                <SubAccount />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
