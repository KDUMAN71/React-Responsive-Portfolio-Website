import React, { useRef, useState } from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);

    emailjs
      .sendForm("service_g67yia9", "template_e5n4h76", formRef.current, {
        publicKey: "fRgLNH7NnDs7aRiW8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Do you have a project?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +90 (212) 982 57 24
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              info@premiumdijital.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Mall Of İstanbul The Office No:7E Başakşehir, İstanbul
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-r-desc">
            <b>Değişimi anlamak önce ona kapıyı aralayabilmekten geçer.</b> Tell
            us what your project is and let us realize your dreams!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              name="message"
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <button className="f-btn">Submit</button>
            {done && "Thank you for your message"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
