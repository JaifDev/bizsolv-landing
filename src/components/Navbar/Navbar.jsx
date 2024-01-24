import React, { useEffect, useState } from "react";

import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";
import { bizSolvLogo } from "../../constants/photots";
import { navItems } from "../../constants/navItems";
import "./Navbar.scss";

const Navbar = ({
  isMenuOpen,
  toggleMenu,
  handleClick,
}) => {
  const [isMobileActive, setIsMobileActive] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileActive(false);
      } else {
        setIsMobileActive(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-left">
        <a href="/">
          <img src={bizSolvLogo} alt="Biz Solv Logo" />
        </a>
      </div>
      {isMobileActive ? (
        <>
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt=""
            className="menu-icon"
            onClick={toggleMenu}
          />
        </>
      ) : (
        <div className="nav-right">
          {navItems?.map((nav) => {
            return (
              <a className="nav-links" href={nav.path} key={nav.id}>
                {nav.title}
              </a>
            );
          })}

          <a
            className="nav-items"
            onClick={() => {
              handleClick(1);
            }}
          >
            Sign Up
          </a>
          <a
            className="nav-items sign-up"
            onClick={() => {
              handleClick(2);
            }}
          >
            Sign In
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
