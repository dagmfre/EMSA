import Header from "../Header";
import Footer from "../Footer";
import Achievements from "./Achivements";
import ScTeam from "./ScTeam";

export default function Scope() {
  return (
    <div className="the-committee scora">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/SCORA.png" alt="" />
        <h1>
          Sexual and Reproductive Health and Rights including HIV and AIDS
          (SCORA)
        </h1>
        <p>
          SCORA, originally formed in 1992 as the Standing Committee on AIDS
          (SCOAS), was established by the International Federation of Medical
          Students' Associations (IFMSA) in response to the growing number of
          people living with HIV/AIDS and the urgent need for effective
          prevention programs. Over the years, SCORA has broadened its scope to
          encompass a wider range of sexual and reproductive health issues,
          officially adopting its current name in 1998.
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
            In Ethiopia, SCORA has been pivotal in advocating for sexual and
            reproductive health rights. The committee focuses on empowering
            medical students to take a leading role in promoting awareness and
            education about reproductive health, HIV/AIDS, and other related
            issues.
          </p>
          <p>
            Through various initiatives, SCORA Ethiopia has made significant
            contributions to health education and advocacy within the community.
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
            Our vision is creating a world where every individual has access to
            comprehensive sexual and reproductive health education, services,
            and rights, empowering them to make informed decisions about their
            health. <br /> <br />
            We aim to advocate for and promote sexual and reproductive health
            rights through education, awareness campaigns, and community
            engagement, ultimately reducing the incidence of HIV/STIs and
            improving reproductive health outcomes.
          </p>
        </div>
        <div className="objectives-cont">
          <div className="objectives">
            <img src="/scorp-icon1.svg" alt="" />
            <div>
              <h4>Sexual and Reproductive Health Education</h4>
              <p>
                To educate medical students and communities about sexual and
                reproductive health issues.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon2.svg" alt="" />
            <div>
              <h4>Policy Advocacy for Sexual and Reproductive Health Rights</h4>
              <p>
                To advocate for policies that support sexual and reproductive
                health rights.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon3.svg" alt="" />
            <div>
              <h4>Peer Education Programs</h4>
              <p>
                To implement peer education programs that empower youth and
                marginalized populations.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/scorp-icon4.svg" alt="" />
            <div>
              <h4>HIV/AIDS Awareness Campaigns</h4>
              <p>
                To engage in awareness campaigns to reduce stigma around
                HIV/AIDS and promote healthy behaviors.
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
        <Achievements standingCommittee={"scora"} />
      </div>
      <div className="sc-officials-team-cont">
        <ScTeam standingCommittee={"SCORP"} />
      </div>
      <Footer />
    </div>
  );
}
