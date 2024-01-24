import React from "react";
import "../../pages/Home/Home.scss";
import { navItems } from "../../constants/navItems";
import { Link } from "react-router-dom";

const MobileNav = ({
  isMenuOpen,
  toggleMenu,
  isHoveredOrClickedSignIn,
  isHoveredOrClickedSignUp,
  handleClick,
  setIsHoveredOrClickedSignIn,
  setIsHoveredOrClickedSignUp,
}) => {
  return (
    <div
      className={`mobile-menu-container ${
        isMenuOpen ? "slide-in" : "slide-out"
      }`}
    >
      <div className="nav-right">
        {navItems?.map((nav) => {
          return (
            <Link
              className="nav-links"
              to={nav.path}
              key={nav.id}
              onClick={toggleMenu}
            >
              {nav.title}
            </Link>
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

        {isHoveredOrClickedSignUp && (
          <div
            className="overlay-mobile"
            onClick={() => {
              setIsHoveredOrClickedSignIn(false);
              setIsHoveredOrClickedSignUp(false);
            }}
          >
            <>
              <a href="https://consultation.bizsolv.com/en/customer_signup">
                Client SignUp
              </a>
              <a href="https://consultation.bizsolv.com/en/expert_signup">
                Consultant SignUp
              </a>
            </>
          </div>
        )}

        <a
          className="nav-items sign-up"
          onClick={() => {
            handleClick(2);
          }}
        >
          Sign In
        </a>

        {isHoveredOrClickedSignIn && (
          <div
            className="overlay-mobile"
            onClick={() => {
              setIsHoveredOrClickedSignIn(false);
              setIsHoveredOrClickedSignUp(false);
            }}
          >
            {isHoveredOrClickedSignIn && (
              <>
                <a href="https://consultation.bizsolv.com/login?is_expert=0">
                  Client Login
                </a>
                <a href="https://consultation.bizsolv.com/login?is_expert=1">
                  Consultant Login
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
