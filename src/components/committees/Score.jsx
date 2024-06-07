import Header from "../Header";
import Footer from "../Footer";

export default function Score() {
  return (
    <div className="the-committee score">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/research1.svg" alt="" />
        <img src="/research2.svg" alt="" />
        <img src="/SCORE1.png" alt="" />
        <h1>Research Exchanges (SCORE)</h1>
        <p>
          Unfortunately, many medical students do not have the opportunity to
          experience research while in medical school. Research is essential for
          the development of medicine and without it, the medical field could
          never have reached the stage it is at now with innovative methods of
          diagnosis and treatments. Put together the experience of improving
          research skills with an unforgettable cultural learning opportunity
          and you have the Standing Committee on Research Exchange (SCORE)!
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
            Our mission is to offer future physicians an opportunity to
            experience research and diversity in countries all over the world.
            This is achieved by providing a network of locally and
            internationally active students that globally facilitate access to
            research exchange projects. Through our programming and
            opportunities, we aim to develop both culturally sensitive students
            and skilled researchers intent on shaping the world of science.
          </p>
        </div>
        <div className="objectives-cont">
          <div className="objectives">
            <img src="/score-icon2.svg" alt="" />
            <div>
              <h4>Self-Learning</h4>
              <p>
                Enable them to take responsibility for their own learning
                according to their personal interests.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon1.svg" alt="" />{" "}
            <div>
              <h4>Research Basics</h4>
              <p>Introduce them to the basic principles of medical research</p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon3.svg" alt="" />{" "}
            <div>
              <h4>Broaden Views</h4>
              <p>
                Widen their horizons and provide the opportunity to experience
                different approaches to health care, ethical research standards,
                medical research, education, and treatment.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon5.svg" alt="" />{" "}
            <div>
              <h4>Improve Education</h4>
              <p>
                Enhance the academic quality of the medical student curricula
                and achieve educational benefits of practical and theoretical
                knowledge in the field of medical research.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon4.svg" alt="" />{" "}
            <div>
              <h4>Global Collaboration</h4>
              <p>
                Facilitate collaboration and partnership between medical
                universities, research institutions and allied medical students
                across the globe in order to share and spread new achievements
                in medical research.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
