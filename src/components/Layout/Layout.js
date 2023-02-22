import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/SideBar";
import TopNav from "../TopNav/TopNav";
import { images } from "../../constants";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: images.HomeIcon,
  },
  {
    path: "/dashboard/category",
    name: "Category",
    icon: images.CategoryIcon,
  },

  {
    path: "/dashboard/type-prompt",
    name: "Type a prompt ",
    icon: images.AddText,
  },
  {
    path: "/dashboard/use-images",
    name: "Use Images",
    icon: images.PhotoIcon,
  },
  {
    path: "/dashboard/saved-images",
    name: "Saved Images",
    icon: images.Album,
  },
];

const Layout = () => {
  //active link items
  const [activeIndex, setActiveIndex] = useState(
    localStorage.getItem("activeTab") || routes[0]
  );
  useEffect(() => {
    //set active
    localStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);
  return (
    <div className="layout d-flex">
      <Sidebar
        routes={routes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="main__layout">
        <TopNav activeIndex={activeIndex} />
        <div className="main__layout-wrapper">
          <div className="content">
            <div className="container">
              {/* routing outlets */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
