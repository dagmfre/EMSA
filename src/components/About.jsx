import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";

export default function About() {
  return (
    <div className="about">
      <div data-aos-once="true" data-aos="fade-left" data-aos-duration="1500" className="about-img-cont">
        <img src="/about-collage.png" alt="" />
      </div>
      <div className="about-descr-cont">
        <h1 data-aos-once="true" data-aos="fade-up" data-aos-duration="500">
          We <span>unite & bridge</span> gaps in Ethiopian healthcare.
        </h1>
        <p data-aos-once="true" data-aos="fade-up" data-aos-duration="600">
          The Ethiopian Medical Students’ Association (EMSA) is a non-profit,
          non-political and non-religious organization that aims to represent
          and serve the interests of medical students in Ethiopia. It was
          officially founded 13 years back and has since become a member of the
          International Federation of Medical Students’ Association (IFMSA)
          which is the largest network of medical students around the world.
        </p>
        <ul>
          <li data-aos-once="true" data-aos="fade-up" data-aos-duration="600">Empowering medical students</li>
          <li data-aos-once="true" data-aos="fade-up" data-aos-duration="700">Providing them the platform to make a difference</li>
          <li data-aos-once="true" data-aos="fade-up" data-aos-duration="1000">
            Provides opportunities for medical students to work on solutions for
            problems we are facing regarding health care and medical education.
          </li>
        </ul>
        <Link>
          <Button
          data-aos-once="true" data-aos="fade-up"
          data-aos-duration="1000"
            variant="contained"
            endIcon={<InfoIcon />}
            sx={{
              padding: "14px 3rem",
            }}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
