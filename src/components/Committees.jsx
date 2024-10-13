import Header from "./Header";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Committees() {
  const targetSectionRef = useRef(null);

  const handleButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="committee">
      <Header shouldLogoChange={false}/>
      <div className="committee-front">
        <div>
          <h1>Standing Committees</h1>
          <p>
            One of the main pillars of IFMSA international structure, which is
            based on the most relevant health related topics for medical
            students.
          </p>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{
              fontSize: "1rem",
              padding: "10px 2rem",
              textTransform: "capitalize",
              fontFamily: '"Lato", Verdana, sans-serif',
              border: "1px solid #0000003d",
              borderRadius: "7px",
              backgroundColor: "#163241 !important",
              color: "white",
            }}
          >
            Explore All Committees
          </Button>
        </div>
        <div>
          <img src="/committee.png" alt="" />
        </div>
      </div>
      <div className="committee-about">
        <h1>About the Standing Comittees</h1>
        <div>
          <p>
            <span className="bold-span">
              IFMSA works on the local and national levels mainly via its six
              standing committees, each of them focusing on major health topics
              and medical student-related interests. Each Standing Committee is
              headed by an International Director, who is supported by an
              international team generally consisting of one Liaison Officer
              (who is responsible for communication with relevant external
              partners) and five Regional Assistants (one from each of IFMSAs
              five regions).
            </span>{" "}
            <br /> <br />
            <span>
              On the national level, the Standing Committee is coordinated by
              the National Officer, who is elected at each NMOs National General
              Assembly. On the local level the work is executed by one or more
              Local Officers. The International Director is the main responsible
              for the activities and capacity building of their standing
              committees.
            </span>
            <br /> <br />
            <span>
              They are in charge of the standing committees sessions at the
              General Assemblies, and is mandated to represent their field of
              work within the Team of Officials.
            </span>
          </p>
          <p>
            <span className="bold-span">
              The Regional Assistants assume majorly the communications with the
              National and Local Officers of their respective regions. They are
              in charge of the standing committees sessions at their Regional
              Meetings, and can be asked, by the Director, to contribute to
              general tasks related to the development of their standing
              committee.
            </span>
            <br /> <br />
            <span className="bold-span">
              The work of each standing committee is complemented by several
              activities, such as training, campaigns and advocacy efforts,
              offering youth the space to learn in both formal and non-formal
              educational settings.
            </span>
            <br /> <br />
            <span>
              Thousands of projects, activities, conferences and workshops are
              organized each year internationally, nationally and locally
              through National Member Organizations within the IFMSA network in
              each area, allowing students to become agents of change at home.
            </span>
          </p>
        </div>
      </div>
      <div ref={targetSectionRef} className="committees-cont">
        <h2>The Standing Committees</h2>
        <div className="committees-list">
          <div>
            <img src="/SCORE.png" alt="" />
            <h3>Research Exchanges (SCORE)</h3>{" "}
            <p>
              The Standing Committee on Research Exchange (SCORE) mission is to
              offer future physicians an opportunity to experience research and
              diversity in countries all over the world.
            </p>
            <Link to="score">
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  padding: "10px 2rem",
                  textTransform: "capitalize",
                  fontFamily: '"Lato", Verdana, sans-serif',
                  backgroundColor: "#ffffffd6",
                  border: "1px solid #0000003d",
                  borderRadius: "7px",
                  color: "#3d5460",
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#161719d1",
                    color: "#ffffffbd",
                  },
                }}
              >
                View Committee
              </Button>
            </Link>
          </div>
          <div>
            <img src="/SCOPE.png" alt="" />
            <h3>Professional Exchanges (SCOPE)</h3>{" "}
            <p>
              The Professional Exchange program is a full educational program
              offering clerkships to medical students abroad.
            </p>
            <Link to="scope">
              {" "}
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  padding: "10px 2rem",
                  textTransform: "capitalize",
                  fontFamily: '"Lato", Verdana, sans-serif',
                  backgroundColor: "#ffffffd6",
                  border: "1px solid #0000003d",
                  borderRadius: "7px",
                  color: "#3d5460",
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#161719d1",
                    color: "#ffffffbd",
                  },
                }}
              >
                View Committee
              </Button>
            </Link>
          </div>
          <div>
            <img src="/SCOME.png" alt="" />
            <h3>Medical Education (SCOME)</h3>{" "}
            <p>
              The Standing Committee On Medical Education (SCOME) is a dedicated
              organ which aims to implement an optimal learning environment for
              all medical students around the world.
            </p>
            <Link to="scome">
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  padding: "10px 2rem",
                  textTransform: "capitalize",
                  fontFamily: '"Lato", Verdana, sans-serif',
                  backgroundColor: "#ffffffd6",
                  border: "1px solid #0000003d",
                  borderRadius: "7px",
                  color: "#3d5460",
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#161719d1",
                    color: "#ffffffbd",
                  },
                }}
              >
                View Committee
              </Button>
            </Link>
          </div>
          <div>
            <img src="/SCORP.png" alt="" />
            <h3>Human Rights & Peace (SCORP)</h3>{" "}
            <p>
              The Standing Committee on Human Rights and Peace unite students
              who strive to create an equal and peaceful world and believe in
              international, intercultural as well as interpersonal solidarity.
              We believe in everybody’s responsibility as well as the ability to
              contribute to creating this world, as human rights can only exist
              when it applies to all humans.
            </p>
            <Link to="scorp">
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  padding: "10px 2rem",
                  textTransform: "capitalize",
                  fontFamily: '"Lato", Verdana, sans-serif',
                  backgroundColor: "#ffffffd6",
                  border: "1px solid #0000003d",
                  borderRadius: "7px",
                  color: "#3d5460",
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#161719d1",
                    color: "#ffffffbd",
                  },
                }}
              >
                View Committee
              </Button>
            </Link>
          </div>
          <div>
            <img src="/SCOPH.png" alt="" />
            <h3>Public Health (SCOPH)</h3>{" "}
            <p>
              The Standing Committee on Public Health (SCOPH) brings together
              medical students from all over the world to learn, build skills,
              cooperate, explore and share ideas when it comes to addressing all
              issues related to public health, including global health issues,
              health policies, health promotion and education, activities.
            </p>
            <Link to="scoph">
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  padding: "10px 2rem",
                  textTransform: "capitalize",
                  fontFamily: '"Lato", Verdana, sans-serif',
                  backgroundColor: "#ffffffd6",
                  border: "1px solid #0000003d",
                  borderRadius: "7px",
                  color: "#3d5460",
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#161719d1",
                    color: "#ffffffbd",
                  },
                }}
              >
                View Committee
              </Button>
            </Link>
          </div>
          <div>
            <img src="/SCORA.png" alt="" />
            <h3>
              Sexual and Reproductive Health and Rights including HIV and AIDS
              (SCORA)
            </h3>{" "}
            <p>
              The Standing Committee on Sexual and Reproductive Health and
              Rights including HIV and AIDS is a gathering of passionate
              individuals who are committed to promote sexual and reproductive
              health and rights and are arduous about creating positive change
              in their local communities.
            </p>
            <Link to="scora">
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  padding: "10px 2rem",
                  textTransform: "capitalize",
                  fontFamily: '"Lato", Verdana, sans-serif',
                  backgroundColor: "#ffffffd6",
                  border: "1px solid #0000003d",
                  borderRadius: "7px",
                  color: "#3d5460",
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#161719d1",
                    color: "#ffffffbd",
                  },
                }}
              >
                View Committee
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
