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

  return (
    <div className="root" style={{ flex: 1 }}>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
