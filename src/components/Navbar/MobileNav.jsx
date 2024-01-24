import React from "react";
import closeIcon from "../../assets/close.png";
import { bizSolvLogo } from "../../constants/photots";
import "../../pages/Home/Home.scss";
import { navItems } from "../../constants/navItems";

const MobileNav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu-container ${
        isMenuOpen ? "slide-in" : "slide-out"
      }`}
    >
      <div className="nav-right">
        {navItems?.map((nav) => {
          return (
            <a className="nav-links" href={nav.path} key={nav.id} onClick={toggleMenu}>
              {nav.title}
            </a>
          );
        })}

        <a href="" className="nav-items">
          Sign In
        </a>
        <a
          href="https://consultation.bizsolv.com/en/expert_signup"
          className="nav-items sign-up"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
