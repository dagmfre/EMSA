import Header from "../Header";
import Footer from "../Footer";

export default function Scome() {
  return (
    <div className="scome the-committee">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/research1.svg" alt="" />
        <img src="/scome-background2.svg" alt="" />
        <img src="/SCORE3.png" alt="" />
        <h1>Medical Education (SCOME)</h1>
        <p>
          Medical Education should be a concern of every medical student as it
          shapes not only the quality of future doctors but also the quality of
          healthcare. The International Federation of Medical Students’
          Associations (IFMSA) has a dedicated organ which aims to implement an
          optimal learning environment for all medical students around the
          world, the Standing Committee On Medical Education (SCOME). Through
          all our joint efforts we work to create sustainable changes around the
          world, for ourselves as medical students, for the generations to come
          and for our future patients and our communities who are in fact the
          final beneficiaries of our education.
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
            SCOME was one of IFMSAs first standing committees from the beginning
            of its foundation in 1951. It acts as a discussion forum for
            students interested in the different aspects of medical education in
            the hope of pursuing and achieving its aim. Today, SCOME works
            mainly in medical education capacity building.
          </p>
          <p>
            SCOME provides several platforms and methods to educate medical
            students worldwide on various medical education issues. Through this
            knowledge, it empowers them to advocate to be a part of the
            decision-making chain. SCOME believes in medical students as
            important stakeholders in creating, developing and implementing
            medical education systems.
          </p>
        </div>
      </div>
      <div className="committee-objectives">
        <div>
          <div>
            <img src="/vision.svg" alt="" />
            <h4>Our Vision</h4>
          </div>
          <p>
            Medical students are meaningfully engaged within their respective
            Medical Education Systems and represent student voice in issues
            regarding Medical Education as full-fledged stakeholders on all
            levels in order to create quality Medical Education worldwide and
            attain suitable competencies which will enable them to answer the
            healthcare needs of communities they have a mandate to serve.
          </p>
        </div>
        <div className="objectives-cont">
          <div>
            <img src="/goal2.png" alt="" />
            <h4>Our Mission</h4>
          </div>
          <p>
            Medical students are meaningfully engaged within their respective
            Medical Education Systems and represent student voice in issues
            regarding Medical Education as full-fledged stakeholders on all
            levels in order to create quality Medical Education worldwide and
            attain suitable competencies which will enable them to answer the
            healthcare needs of communities they have a mandate to serve.
          </p>
          {/* <div className="objectives">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
