/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "../../constants";
import "./Sidebar.scss";

const SideBar = ({ activeIndex, setActiveIndex, routes ,children }) => {
  const handleLink = (index) => {
    setActiveIndex(index);
  };

  //for sidebar toggle
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const isMobile = useMedia("(max-width: 767px)");

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "240px" : "70px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar`}
      >
        <div className={` sidebar__topBar  ${isOpen ? " " : "flex-column "}`}>
          <AnimatePresence>
            <motion.div
              className="brand d-flex align-items-center mt-3"
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <img src={images.logo} alt="logo" className="brand_logo" />
              {isOpen && <h5 className="brand_name">PixelBoom</h5>}
            </motion.div>

            <motion.div
              className={`sidebarToogle mt-3 ${
                isOpen ? "siderbarToogleLeft" : ""
              }`}
              onClick={toggle}
              animate={
                isOpen
                  ? {
                      rotate: -180,
                    }
                  : { rotate: 0 }
              }
            >
              <i className="ri-arrow-right-s-line"></i>
            </motion.div>
          </AnimatePresence>
        </div>
        <ul className="sidebar-menu">
          {routes.map((route, index) => {
            return (
              <li className="sidebar-menu-item" key={index}>
                <NavLink
                  to={route.path}
                  key={route}
                  className={route === activeIndex ? "active" : ""}
                  onClick={() => handleLink(route)}
                >
                  <img className="icon" src={route.icon} alt="icon" />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="ms-3"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
