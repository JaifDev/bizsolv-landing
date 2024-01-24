import React, { useEffect, useState } from "react";

import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";
import { bizSolvLogo } from "../../constants/photots";
import { navItems } from "../../constants/navItems";
import "./Navbar.scss";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
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
            href="https://consultation.bizsolv.com/en/login"
            className="nav-items"
          >
            Sign Up Client
          </a>
          <a
            href="https://consultation.bizsolv.com/en/expert_signup"
            className="nav-items sign-up"
          >
            Sign Up Expert
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
