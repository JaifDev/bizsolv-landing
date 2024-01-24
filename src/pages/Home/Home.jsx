import React, { useEffect, useState } from "react";

import "./Home.scss";
import { bg1Home, bgSixth, bgSixth2 } from "../../constants/photots";
import { industries } from "../../constants/industries";
import {
  howItWorksConsultation,
  howItWorksCustormers,
} from "../../constants/howItWorks";
import { areaOfSpecialisation } from "../../constants/areaOfSpecialisation";

import consultationIcon from "../../assets/icons/consultation.png";
import choursesIcon from "../../assets/icons/courses.png";
import sessionsIcon from "../../assets/icons/sessions.png";
import TypingAnimation from "../../components/TypingAnimation";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleActiveTab = (num) => {
    setActiveTab(num);
  };

  const [text, setText] = useState("Industries");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) =>
        prevText === "Industries" ? "Consultants" : "Industries"
      );
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="home">
      <div className="first-container">
        <div className="first-left-container">
          <h1>
            Connecting Industries and Consultants
            <br /> across the world and empowering growth
          </h1>
          <h3>Redefining Business Consultation for Every Industry</h3>
          <TypingAnimation />

          <img src={bg1Home} alt="" />

          <div
            className="links"
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <a href="https://consultation.bizsolv.com/en/customer_signup">
              <div id="button" className="no-bg">
                Client Sign Up
              </div>
            </a>
            <a href="https://consultation.bizsolv.com/en/expert_signup">
              <div id="button">Consultant Sign Up</div>
            </a>
          </div>
        </div>
      </div>
      <div className="seventh-container">
        <h1>
          Empowering Engagement, <br />
          <b style={{ color: "#00adda" }}>Seamlessly Connet Through </b>
        </h1>

        <div className="highlights-container">
          <div className="highlight">
            <img src={consultationIcon} alt="" />
            <span className="title">Consultation</span>
            <span>
              Personalised 1-on-1 sessions conducted through chat, audio , and
              video interfaces.
            </span>
          </div>
          <div className="highlight">
            <img src={choursesIcon} alt="" />
            <span className="title">Courses</span>
            <span>
              Knowledge-sharing experiences designed for a broader audience,
              delivered in various formats including text, video, content and
              interactive quizzes
            </span>
          </div>
          <div className="highlight">
            <img src={sessionsIcon} alt="" />
            <span className="title">Sessions</span>
            <span>
              Live webinars providing a one-to-many interaction platform for
              engaging and informative discussions
            </span>
          </div>
        </div>
      </div>

      <div id="about" className="second-container">
        <h1>
          About <b style={{ color: "#00adda" }}>BizSolv</b>
        </h1>

        <p>
          At BizSolv, we've redefined the landscape of consultation by crafting
          a dynamic online marketplace tailored to meet the diverse needs of
          every industry. We understand that in today's ever-evolving business
          world, access to the right expertise at the right time at an
          affordable cost can be the game-changer that fuels innovation and
          growth. <br /> <h3>Connecting Industries to Expert Minds</h3> Our
          platform serves as a beacon, illuminating a pathway for industries of
          all shapes and sizes to connect seamlessly with a wealth of
          specialized consultants across the globe. Whether you're a burgeoning
          startup seeking guidance or a well-established corporation navigating
          complexities, we're here to match your unique challenges with the
          perfect expert solutions. <h3>The Power of Tailored Consultation</h3>
          We believe in the art of personalized guidance. That's why we've
          curated a diverse roster of industry specialists covering a vast
          spectrum of fields. From tech trailblazers to marketing maestros,
          financial wizards to management gurus—our platform unites your
          industry's needs with bespoke advice, ensuring every consultation is
          finely tuned to your specific goals.
          <h3>Driving Growth Through Innovation</h3>
          Our mission goes beyond mere consultations; it's about driving
          transformative growth. By harnessing the collective wisdom of our
          global consultancy network, we empower industries to embrace
          innovation, tackle hurdles head-on, and emerge stronger, smarter, and
          more competitive in their respective domains.
        </p>
      </div>

      <div className="third-container">
        <h1>
          Industries for <b style={{ color: "#00adda" }}>Consultation</b>
        </h1>
        <div className="industry-serve">
          {industries.map((industry, index) => {
            return (
              <div className="industry" key={industry.id}>
                <img src={industry.icon} alt={industry.name} loading="lazy" />
                <span>{industry.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fourth-container">
        <h1>
          How does it <b style={{ color: "#00adda" }}>work?</b>
        </h1>

        <div className="tab-container">
          <h3>For</h3>
          <h4
            className={`tab-bar ${activeTab === 1 ? "active" : ""}`}
            onClick={() => {
              toggleActiveTab(1);
            }}
          >
            Consultants
          </h4>
          <h4
            className={`tab-bar ${activeTab === 2 ? "active" : ""}`}
            onClick={() => {
              toggleActiveTab(2);
            }}
          >
            Customers
          </h4>
        </div>
        <div className="content-container">
          {activeTab === 1
            ? howItWorksConsultation.map((val) => {
                return (
                  <>
                    <div className="content" key={val.id}>
                      <img src={val.img} alt="" />
                      <div className="content-desc">
                        <h3>{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </>
                );
              })
            : activeTab === 2 &&
              howItWorksCustormers.map((val) => {
                return (
                  <div className="content" key={val.id}>
                    <img src={val.img} alt="" loading="lazy" />
                    <div className="content-desc">
                      <h3>{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="cta-container">
          <a
            href={
              activeTab === 1
                ? "https://consultation.bizsolv.com/en/expert_signup"
                : "https://consultation.bizsolv.com/en/customer_signup"
            }
            className="cta"
          >
            {activeTab === 1 ? "Consultant" : "Customer"} Sign Up
          </a>
        </div>
      </div>

      <div className="fifth-container">
        <h1>
          Area of{" "}
          <b style={{ color: "#00adda" }}>specialization of Consultants</b>
        </h1>

        <div className="industry-serve">
          {areaOfSpecialisation.map((industry, index) => {
            return (
              <div className="industry" key={industry.id}>
                <img src={industry.icon} alt={industry.name} loading="lazy" />
                <span>{industry.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sixth-container">
        <h1>
          BizSolv helps Global <b style={{ color: "#00adda" }}>{text}</b>
        </h1>

        <img src={bgSixth} alt="" id="background" />

        <img id="png-img" src={bgSixth2} alt="" />

        <p>
          In a fast-paced business landscape, BizSolv catalyzes growth and
          success by linking diverse industries with expert consultants. We
          empower businesses to access specialized knowledge, strategic
          insights, and tailored advice, fueling innovation, operational
          excellence, and sustainable growth on a global scale. At BizSolv,
          consultants gain unparalleled exposure and opportunities within our
          esteemed network. By joining us, they leverage a vast global
          clientele, expand their reach, and showcase their expertise across a
          wide spectrum of industries. Our platform facilitates seamless
          consultations, ensuring consultants can focus on what they do best
          while we handle the logistics.
        </p>
      </div>
    </div>
  );
};

export default Home;
