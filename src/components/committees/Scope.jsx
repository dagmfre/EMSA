import Header from "../Header";
import Footer from "../Footer";

export default function Scope() {
  return (
    <div className="the-committee scope">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/SCOPE.png" alt="" />
        <h1>Research Exchanges (scope)</h1>
        <p>
          The Professional Exchange program is a full educational program
          offering clerkships to medical students abroad. Since the very
          beginning, in 1951, it was evident that exchange of medical students
          would be one of the main fields of action in IFMSA. As early as 1952,
          a total of 463 students spent a period of practice abroad, and today,
          it continues to be the backbone of the Federation and constitutes its
          longest running project. Annually, around 13.000 students from more
          than 90 countries travel around the world to discover new health
          systems, new cultures and to enhance their global health and
          intercultural understanding.
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
            The Standing Committee on Professional Exchange (SCOPE) was founded
            in 1951 and is one of the first standing committees within IFMSA. It
            started small, beginning with only 8 European countries, but since
            then has grown into one of the largest student-run exchange programs
            in the world, with around 13.000 medical students participating
            every year from more than 100 National Member Organizations.
          </p>
          <p>
            The SCOPE exchange program is a quality educational and cultural
            experience organized entirely by medical students with the help of
            their medical faculties.
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
            The aim of SCOPE is to promote cultural understanding and
            co-operation amongst medical students and all health professionals,
            through the facilitation of international student exchanges. SCOPE
            aims to give all students the opportunity to learn about global
            health, and attains this partly by having its exchanges accredited
            by medical faculties across the world.
          </p>
        </div>
        <div className="objectives-cont">
          <div className="objectives">
            <strong style={{ fontSize: "xx-large" }}>-</strong>
            <div>
              <h4>Global Mobility</h4>
              <p>
                To increase the mobility and to widen the horizon of medical
                students worldwide
              </p>
            </div>
          </div>
          <div className="objectives">
            <strong style={{ fontSize: "xx-large" }}>-</strong>

            <div>
              <h4>Equal Opportunities</h4>
              <p>
                To provide equal chances to medical students to participate in a
                professional exchange, regardless of subjective, geographical,
                political, financial, sexual, cultural or religious backgrounds
              </p>
            </div>
          </div>
          <div className="objectives">
            <strong style={{ fontSize: "xx-large" }}>-</strong>
            <div>
              <h4>Cultural Healthcare</h4>
              <p>
                To provide medical students with the possibility to experience
                healthcare in another culture with different health and
                education systems, and to learn how differences in culture and
                believes are of influence
              </p>
            </div>
          </div>
          <div className="objectives">
            <strong style={{ fontSize: "xx-large" }}>-</strong>
            <div>
              <h4>Global Health</h4>
              <p>
                To create possibilities for medical students to learn about
                global health issues, primary health concerns and basic
                epidemiology of the host country, and how it differs from their
                home countries
              </p>
            </div>
          </div>
          <div className="objectives">
            <strong style={{ fontSize: "xx-large" }}>-</strong>
            <div>
              <h4>Personal Development</h4>
              <p>
                To contribute to the education of future health professionals
                with a global vision and to contribute to medical students’
                personal development, self-reliance, and openness in becoming
                future health professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
