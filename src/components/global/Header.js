import React from "react";
import FishAnimation from "./animation/Fish";
import WaveAnimation from "./animation/Wave";

const Header = () => {
  return (
    <header>
      <div className="bs-header">
        <div className="cm-header">
          <div className="main-cont">
            <div className="logo-wrap">
              <FishAnimation />
              <img
                src="https://www.bcwebwise.com/images/logo-svg.png"
                alt="BcWebWise"
                width="139"
                height="71"
              />
            </div>
            <div className="menu-container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className="certificate-logo">
            <img
              alt="Great Place to Work - certified"
              src="https://www.bcwebwise.com/images/GPTW-certified.png"
              width="100"
              height="170"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
