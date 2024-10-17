import "./Footer.css";
import logop from "../assets/PlinthLogo.svg";
import gdglogo from "../assets/gdglogo.png";
import facebook from "../assets/facebook.png";
import email from "../assets/email.png";
import linkdn from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import gdg from "../assets/gdg.svg";

const Footer = () => {
  return (
    <div className="Footer_slide">
      <div className="line"></div>

      <div className="Footer">
        <div className="fest-plinth ">
          <img className="plinthlogo" src={logop} alt="" loading="lazy" />
          <h1>PLINTH' 2025</h1>
        </div>

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

        <div className="social-dev-container">
          <div className="container1">
            <h2>Follow us on:</h2>
            <div className="card">
              <a
                className="socialContainer containerOne"
                href="https://www.instagram.com/plinth.lnmiit/?hl=en"
              >
                <img src={insta} alt="" loading="lazy" />
              </a>
              <a
                className="socialContainer containerTwo"
                href="https://www.facebook.com/Plinth.LNMIIT/"
              >
                <img src={facebook} alt="" loading="lazy" />
              </a>
              <a
                className="socialContainer containerThree"
                href="https://www.linkedin.com/company/plinthlnmiit/?originalSubdomain=in"
              >
                <img src={linkdn} alt="" loading="lazy" />
              </a>
              <a
                className="socialContainer containerFour"
                href="mailto:plinth@lnmiit.ac.in"
              >
                <img src={email} alt="Email Icon" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="gdg left-[20rem] bg-gray">
            <h2>Developed by:</h2>

            <div className="flex items-center">
              <img
                className="googledevgrp w-[2rem] mr-2"
                src={gdg}
                alt="GDG logo"
                loading="lazy"
              />
              <h3>Google developer groups on campus</h3>
            </div>
          </div>
        </div>

        <div className="address">
          The LNM Institute of Information Technology,
          <br />
          Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan 302031
        </div>
      </div>
    </div>
  );
};

export default Footer;
