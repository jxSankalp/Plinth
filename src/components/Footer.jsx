import React from "react";
import "./Footer.css";
import logop from "../assets/PlinthLogo.svg";
import gdglogo from "../assets/gdglogo.png";
import facebook from "../assets/facebook.png";
import email from "../assets/email.png";
import linkdn from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import {gdg} from "../assets/svg";
const Footer = () => {
  return (
    <div className="Footer_slide">
      <div className="line"></div>

      <div className="Footer">
        {/* Logo and Plinth'25 */}
        <div className="fest-plinth">
          <img className="plinthlogo" src={logop} alt="" />
          <h1>PLINTH' 2025</h1>
        </div>

        {/* Contact Information */}
        <div className="heads">
          <h2>Contact Us</h2>
          <ul className="festheads">
            <div>
              Yug Aggarwal <br /> 8299099721
            </div>
            <div>
              Rajat Sharma <br /> 8972192855
            </div>
          </ul>
        </div>

        {/* Follow us and Developed by */}
        <div className="social-dev-container">
          <div className="container1">
            <h2>Follow us on:</h2>
            <div className="card">
              <a
                className="socialContainer containerOne"
                href="https://www.instagram.com/plinth.lnmiit/?hl=en"
              >
                <img src={insta} alt="" />
              </a>
              <a
                className="socialContainer containerTwo"
                href="https://www.facebook.com/Plinth.LNMIIT/"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                className="socialContainer containerThree"
                href="https://www.linkedin.com/company/plinthlnmiit/?originalSubdomain=in"
              >
                <img src={linkdn} alt="" />
              </a>
              <a
                className="socialContainer containerFour"
                href="mailto:plinth@lnmiit.ac.in"
              >
                <img src={email} alt="Email Icon" />
              </a>
            </div>
          </div>

          
        </div>
        
        <div className="address">
          <br />
          The LNM Institute of Information Technology,
          <br />
          Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan 302031
        </div>

        <div className="gdg w-[28rem] relative left-[24rem]">
          <div className="w-[30rem] flex col">
          <h2 className="pl-[2.5rem] pr-[0.6rem]">Designed and developed by: </h2>
          <img className="w-[2.5rem] h-[2rem]" src={gdg} alt="" />
            <h2 className="pl-[0.3rem]">GDG on campus</h2>
          <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
