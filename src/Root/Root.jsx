import React, { useEffect, useState } from "react";
import "./Root.scss";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/Navbar/MobileNav";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    document.documentElement.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {}, [isMenuOpen]);

  const [isHoveredOrClickedSignUp, setIsHoveredOrClickedSignUp] = useState(
    false
  );
  const [isHoveredOrClickedSignIn, setIsHoveredOrClickedSignIn] = useState(
    false
  );

  const handleClick = (num) => {
    if (num === 1) {
      setIsHoveredOrClickedSignUp(!isHoveredOrClickedSignUp);
      setIsHoveredOrClickedSignIn(false);
    } else {
      setIsHoveredOrClickedSignIn(!isHoveredOrClickedSignIn);
      setIsHoveredOrClickedSignUp(false);
    }
  };

  return (
    <div className="root" style={{ flex: 1 }}>
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleClick={handleClick}
      />
      <MobileNav
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        handleClick={handleClick}
        isHoveredOrClickedSignIn={isHoveredOrClickedSignIn}
        isHoveredOrClickedSignUp={isHoveredOrClickedSignUp}
      />
      {(isHoveredOrClickedSignIn || isHoveredOrClickedSignUp) && (
        <div
          className="overlay"
          onClick={() => {
            setIsHoveredOrClickedSignIn(false);
            setIsHoveredOrClickedSignUp(false);
          }}
        >
          {isHoveredOrClickedSignIn ? (
            <>
              <a href="https://consultation.bizsolv.com/login?is_expert=0">
                Client Login
              </a>
              <a href="https://consultation.bizsolv.com/login?is_expert=1">
                Consultant Login
              </a>
            </>
          ) : (
            isHoveredOrClickedSignUp && (
              <>
                <a href="https://consultation.bizsolv.com/en/customer_signup">
                  Client SignUp
                </a>
                <a href="https://consultation.bizsolv.com/en/expert_signup">
                  Consultant SignUp
                </a>
              </>
            )
          )}
        </div>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
