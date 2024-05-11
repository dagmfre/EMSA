import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";

export default function About() {
  return (
    <div className="about">
      <div className="about-img-cont">
        <img src="about-collage.png" alt="" />
      </div>
      <div className="about-descr-cont">
        <h1>
          We <span>unite & bridge</span> gaps in Ethiopian healthcare.
        </h1>
        <p>
          The Ethiopian Medical Students’ Association (EMSA) is a non-profit,
          non-political and non-religious organization that aims to represent
          and serve the interests of medical students in Ethiopia. It was
          officially founded 13 years back and has since become a member of the
          International Federation of Medical Students’ Association (IFMSA)
          which is the largest network of medical students around the world.
        </p>
        <ul>
          <li>Empowering medical students</li>
          <li>Providing them the platform to make a difference</li>
          <li>
            Provides opportunities for medical students to work on solutions for
            problems we are facing regarding health care and medical education.
          </li>
        </ul>
        <Link>
          <Button
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
