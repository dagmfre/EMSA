import Header from "../Header";
import Footer from "../Footer";
import ScTeam from "./ScTeam";

export default function Scoph() {
  return (
    <div className="the-committee scoph">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/research1.svg" alt="" />
        <img src="/scoph-background2.svg" alt="" />
        <img src="/SCOPH.png" alt="" />
        <h1>Public Health (SCOPH)</h1>
        <p>
          The Standing Committee on Public Health (SCOPH) is one of the six
          standing committees of EMSA. The committee aims to allow medical
          students learn, build skills, cooperate, explore, and share ideas when
          it comes to addressing issues related to public health. SCOPH is
          responsible for disease prevention within our society, health
          promotion and education in our community as well as raising awareness
          about global public health issues within medical students and our
          society.
        </p>
      </div>
      <div className="committee-history">
        <div>
          <img src="/history-icon.png" alt="" />
          <h1>
            <span>History</span> of The Committee
          </h1>
        </div>
        <div>
          <p>
            The Standing Committee on Public Health (SCOPH) brings together
            medical students from all over the world to learn, build skills,
            cooperate, explore and share ideas to address all issues related to
            Public Health, including Global Health issues, health policies,
            health promotion, and education activities. <br />
            <br />
            Medical students of the IFMSA formed the Standing Committee on
            Students’ Health (SCOSH) in 1952, driven by a strong will to take an
            active part in preventing and making policies concerning health
            problems. During the following years, the wide variety of activities
            led to the change of SCOSH to the Standing Committee on Health
            (SCOH) in 1963.
          </p>
          <p>
            In 1983 the name of the Committee changed once more to the Standing
            Committee on Public Health (SCOPH). <br /> <br /> During these six
            decades, SCOPHeroes have implemented, maintained and improved a wide
            variety of community-based projects on a local, national and
            international level. Through these activities, we are pursuing our
            vision of a healthy society and we are developing our own potential
            of being complete and skillful health professionals.
          </p>
        </div>
      </div>
      <div className="committee-objectives">
        <div>
          <div>
            <img src="/goal2.png" alt="" />
            <h4>
              Our <span>Vision & Objectives</span>
            </h4>
          </div>
          <p>
            Medical Students attain the optimal skills and knowledge to
            contribute to their full potential towards the making of healthier
            communities in their capacity as medical students and as future
            healthcare providers. <br /> <br />
            The Standing Committee on Public Health promotes the development of
            medical students worldwide regarding Public Health issues through an
            international sharing knowledge network, projects management,
            community-based learning, capacity building, advocacy, exchanges
            placements and access to external learning opportunities.
          </p>
        </div>
        <div className="objectives-cont">
          <div className="objectives">
            <img src="/score-icon5.svg" alt="" />
            <div>
              <h4>Health Education</h4>
              <p>Disease prevention within our society.</p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scoph-icon2.svg" alt="" />{" "}
            <div>
              <h4>Awareness Raising</h4>
              <p>
                Raising awareness about global public health issues within
                medical students and our society.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon3.svg" alt="" />{" "}
            <div>
              <h4>Policy Advocacy</h4>
              <p>
                Advocating for health policies as the voice of worldwide medical
                students.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scoph-icon6.svg" alt="" />{" "}
            <div>
              <h4>Skill Development</h4>
              <p>
                Developing skills and knowledge of medical students as the
                future health professionals.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon4.svg" alt="" />{" "}
            <div>
              <h4>Global Collaboration</h4>
              <p>
                Working as an international team and collaborating with external
                public health organizations to use the potential of over one
                million worldwide medical students.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scoph-icon1.svg" alt="" />{" "}
            <div>
              <h4>Interdisciplinary Cooperation</h4>
              <p>
                Collaborate with other fields as medical education, human
                rights, and reproductive health.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-officials-team-cont">
        <ScTeam standingCommittee={"SCOPH"} />
      </div>
      <Footer />
    </div>
  );
}
