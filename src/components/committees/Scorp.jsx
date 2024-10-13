import Header from "../Header";
import Footer from "../Footer";
import Achievements from "./Achivements";
import ScTeam from "./ScTeam";
export default function Scorp() {
  return (
    <div className="the-committee scorp">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/hr.png" alt="" />
        <img src="/SCORP.png" alt="" />
        <h1>Human Rights & Peace (SCORP)</h1>
        <p>
          The Standing Committee on Human Rights and Peace unite students who
          strive to create an equal and peaceful world and believe in
          international, intercultural as well as interpersonal solidarity. We
          believe in everybody's responsibility as well as the ability to
          contribute to creating this world, as human rights can only exist when
          it applies to all humans.
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
            SCORE was founded in 1991 with the objective of giving students an
            opportunity of improving their skills in research in other learning
            settings. Presently, SCORE involves more than 65 active NMOs,
            offering over 3000 research projects to provide over 2400 medical
            students worldwide the opportunity to participate in IFMSA research
            exchange program
          </p>
          <p>
            and learn the basic principles of medical research such as
            literature studies, collecting data, scientific writing, lab work,
            statistics and ethical aspects related to the medicine. It is
            important to mention that all exchanges are initiated and
            coordinated entirely by medical student volunteers.
          </p>
        </div>
      </div>
      <div className="committee-objectives">
        <div>
          <div>
            <img src="/goal2.png" alt="" />
            <h4>
              Our <span>Mission & Vision</span>
            </h4>
          </div>
          <p>
            A peaceful world where all individuals are entitled to full and
            equal access to their human rights, where no one is left behind,
            where priority is given to people in greatest need and where the
            entire society, including medical students and health workers, unite
            to support vulnerable groups. <br />
            <br />
            To empower & motivate medical students to actively promote and
            protect human rights and peace through advocacy, capacity building,
            and awareness raising, and by supporting the students in carrying
            out activities and projects that contribute to creating a fair and
            peaceful world.
          </p>
        </div>
        <div className="objectives-cont">
          <div className="objectives">
            <img src="/scorp-icon1.svg" alt="" />
            <div>
              <h4>Human Rights Education</h4>
              <p>
                Enhance students knowledge on human rights, peace building,
                humanitarian response, international humanitarian law and
                violations of human rights.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon2.svg" alt="" />{" "}
            <div>
              <h4>Medical Ethics Training</h4>
              <p>
                Provide medical students with tools and skills to act according
                to Human Rights and ethics both in clinical settings and in
                everyday life
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon3.svg" alt="" />{" "}
            <div>
              <h4>Advocacy Activities</h4>
              <p>
                Support and create activities, such as campaigns, capacity
                building, and advocacy, aiming to fulfil the vision of the
                standing committee.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon4.svg" alt="" />{" "}
            <div>
              <h4>Policy Development Facilitation</h4>
              <p>
                Facilitate the Federations policy development on areas related
                to human rights and peace.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon5.svg" alt="" />{" "}
            <div>
              <h4>Policy Advocacy Inclusion</h4>
              <p>
                Provide members with the opportunity to advocate for
                implementation of policies through inclusion in national and
                international laws and frameworks.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon6.svg" alt="" />{" "}
            <div>
              <h4>Partnership Collaboration</h4>
              <p>
                Collaborate with relevant partners in the implementation of
                objectives related to human rights and peace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="committee-achievements">
        <div>
          <i class="fa-solid fa-trophy"></i>
          <h1>Recent Achievements</h1>
        </div>
        <Achievements standingCommittee={"scorp"} />
      </div>
      <div className="sc-officials-team-cont">
        <ScTeam standingCommittee={"SCORP"} />
      </div>
      <Footer />
    </div>
  );
}
