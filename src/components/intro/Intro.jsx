import React from "react";
import "./intro.css";
import Sonic from "../../img/sonic.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Kerim</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">FullStack Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Digital Marketing Specialist</div>
              <div className="i-title-item">SEO Expert</div>
            </div>
          </div>
          <p className="desc">
            Talented Frontend/FullStack Web Developer. Modern and responsive
            websites and apps designed for distinguished customers.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="i-scroll"
        >
          <path d="M256 0C114.841 0 0 114.841 0 256s114.841 256 256 256 256-114.841 256-256S397.159 0 256 0zm0 495.832C123.756 495.832 16.168 388.244 16.168 256S123.756 16.168 256 16.168 495.832 123.756 495.832 256 388.244 495.832 256 495.832z" />
          <path d="M256 61.853 155.838 237.137h200.325L256 61.853zm0 32.589 72.301 126.527H183.699L256 94.442zM155.838 274.863 256 450.147l100.162-175.284H155.838zm27.861 16.169h144.602L256 417.558l-72.301-126.526z" />
        </svg>
      </div>
      <div className="i-right">
        <div className="i-right-bg"></div>
        <img src={Sonic} alt="" className="i-right-img"></img>
      </div>
    </div>
  );
};

export default Intro;
