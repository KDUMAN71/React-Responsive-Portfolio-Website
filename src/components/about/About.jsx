import React from "react";
import "./about.css";
import Sonic2 from "../../img/sonic-2.png";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Sonic2} alt="" className="a-left-img" />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-r-title">About Me</h2>
        <p className="a-r-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="a-r-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="a-r-award">
          <img src={Award} alt="" className="a-r-award-img" />
          <div className="a-r-award-texts">
            <h4 className="a-r-award-title">
              International Design Awards 2018
            </h4>
            <p className="a-r-award-desc">
              Lectus quam id leo in vitae turpis massa sed elementum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
