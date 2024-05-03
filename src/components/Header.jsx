import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-contact">
        <div>
          <p>Location:Lideta, Addis Ababa</p>
          <p>Email:emsa@gmail.com</p>
        </div>
        <div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <p>+251965555075</p>
          </div>

          <div className="socials-cont">
            <Link
              to={
                "https://www.linkedin.com/company/ethiopian-medical-students-association-emsa-ethiopia/"
              }
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={"https://t.me/EMSA_ETHIOPIA"}>
              <i class="fa-brands fa-telegram"></i>
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100087182547473"}
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link to={"https://twitter.com/official_EMSA"}>
              <i class="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="logo-cont">
          <img src="logo.png" alt="" />
        </div>

        <div className="nav-links-cont">
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Running projects</Link>
          <Link>Committees</Link>
          <Link>Certificate</Link>
          <Link>Join us</Link>
        </div>
        <button className="certificate-issue">Get Certificate</button>
      </div>
    </div>
  );
}
