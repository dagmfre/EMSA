import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScrollToExecutives = () => {
    const element = document.getElementById("executives");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`footer`}>
      <div className="footer-child-cont">
        <div className="footer-childs">
          <h1>EMSA</h1>
          <p>
            EMSA is not-for-profit, students-based organization established for
            empowering medical students and advance health care delivery in
            Ethiopia.
          </p>
          <div className="info-cont">
            <i className="fa-solid fa-square-phone"></i>
            <p>+251989999055</p>
          </div>
          <div className="info-cont">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>emsa-ethiopia@ifmsa.org</p>
          </div>
        </div>
        <div className="footer-childs">
          <h1>Association</h1>
          <Link to="/about">About Us</Link>
          <Link to="/local-chapters">Local Chapters</Link>
          <Link to="/committees">Standing Committees</Link>
          <Link to="#executives" onClick={handleScrollToExecutives}>
            Executives
          </Link>
          <Link to="/join-us">How You Can Join</Link>
        </div>
        <div className="footer-childs">
          <h1>WORKING HOURS</h1>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="footer-childs">
          <h1>Get In Touch</h1>
          <p>Connect with us through our social media channels:</p>
          <div className="social-cont">
            <Link to={"https://et.linkedin.com/company/emsa-ethiopia"}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to={"https://t.me/s/EMSA_ETHIOPIA"}>
              <FontAwesomeIcon icon={faTelegram} />
            </Link>
            <Link to={"https://www.instagram.com/emsa_ethiopia"}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to={"https://www.facebook.com/youEMSA"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
      </div>
      <hr
        style={{
          maxWidth: "1450px",
          alignSelf: "center",
          width: "100%",
          margin: "-2rem 0 1rem",
          // display: isHome ? "initial" : "none",
        }}
      />
      <div
        className="footer-bottom"
        // style={{
        //   display: isHome ? "flex" : "none",
        // }}
      >
        <p>&copy; {new Date().getFullYear()} EMSA. All rights reserved.</p>
        <p className="portfolio-link">
          Designed & developed by &nbsp;
          <Link
            to={"https://dagmfre-seid.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            @Dagmfre Seid
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
