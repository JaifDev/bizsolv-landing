import React from "react";
import "./Footer.scss";

import facebookIcon from "../../assets/icons/facebook.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import twitterIcon from "../../assets/icons/twitter.png";
import locationIcon from "../../assets/icons/location.png";

const socialLinks = [
  {
    id: 1,
    link: "https://www.linkedin.com/company/biz-solv/about/?viewAsMember=true",
    icon: linkedinIcon,
  },
  {
    id: 2,
    link: "https://twitter.com/Biz_Solv",
    icon: twitterIcon,
  },
  {
    id: 3,
    link: "https://www.facebook.com/bizsolv",
    icon: facebookIcon,
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="location">
          <img src={locationIcon} alt="" />

          <span>
            W1 A1 901, Vasathi Avante, Near Manyata Tech Park backside gate,
            Mestripalya, Rachenahalli, Bangalore, Karnataka, India 560077
          </span>
        </div>

        <div className="links">
          {socialLinks.map((link) => {
            return (
              <a href={link.link} key={link.id}>
                <img src={link.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        © 2023 – All Rights Reserved – BizSolv | Website Designed and Developed{" "}
        <a href="https://www.linkedin.com/in/jaif-md-083844244/">By Md Jaif</a>
      </div>
    </div>
  );
};

export default Footer;
