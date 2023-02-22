import React from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../constants";
import "./TopNav.scss";

const TopNav = ({ activeIndex }) => {
  return (
    <div className="top__nav ">
      <div className="pageNavigation__wrapper mb-0">
        {/* <i class="ri-arrow-left-line me-3"></i> */}
        <h6>{activeIndex.name}</h6>
      </div>
      <div className="profile d-flex align-items-center">
        <h6 className="profile_name me-3">Aravindh S.</h6>
        <NavLink to="/dashboard/user-profile">
          <img src={images.People} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default TopNav;
