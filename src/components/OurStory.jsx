import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Map from "./Map";
import Counter from "./Counter";

export default function OurStory() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="our-story-cont">
      <Header shouldLogoChange={false} isSticky={isSticky} />
      <div className="our-story">
        <div className="our-story-front">
          <img src="story-img-larger.png" alt="" />
        </div>
        <div className="main-story-cont">
          <h1>Our Story</h1>
          <p className="story-moto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quaerat quia, quibusdam quo.
          </p>
          <div className="story-cont">
            <div>
              <h2>Who are we</h2>
              <p>
                Ethiopian Medical Students Association (EMSA) is a student-led,
                legally registered, and licensed association in accordance with
                the charities and societies proclamation No. 1113/2019. EMSA is
                a member organization of the International Federation of Medical
                Students' Associations (IFMSA) and aims to build a strong
                medical student community dedicated to contributing to the
                improvement of the health and wellbeing of Ethiopians. The IFMSA
                is one of the largest international student organizations,
                representing 1.3 million medical students through its 145
                National Member Organizations, with a vision for global health
                unity and leadership.
              </p>
            </div>
            <div>
              <h2>Global Health Unity</h2>
              <p>
                The International Federation of Medical Students' Associations
                (IFMSA) serves medical students worldwide, representing 1.3
                million medical students across 145 National Member
                Organizations. Its vision is to unite medical students for
                global health, equipping them with the necessary knowledge,
                skills, and values to take on health leadership roles both
                locally and globally.
              </p>
            </div>

            <img src="ab7.png" alt="" />
            <div className="story-topic-cont">
              <div className="story-topic">
                <div>
                  <i class="fa-solid fa-earth-asia"></i>
                  <h3>Global Efforts</h3>
                  <div className="decor-line"></div>
                </div>
                <p>
                  IPAS began its work in 1973 with the provision of life-saving
                  reproductive health technology for health systems in several
                  countries. Over the years, it has grown significantly,
                  maintaining a steadfast commitment to expanding access to
                  abortion. <br /> <br /> The IPAS Impact Network operates on
                  five continents, focusing on creating sustainable abortion
                  ecosystems that address all factors impacting a person's
                  ability to access abortion, including health knowledge, social
                  and community support, a trained health workforce, political
                  leadership, and supportive laws.
                </p>
              </div>
              <div className="story-topic">
                <div>
                  <img src="leader.svg" alt="" />
                  <h3>Leadership</h3>
                </div>
                <p>
                  Working closely with the Ministry of Health and other
                  partners, IPAS Ethiopia has become a regional leader in
                  establishing safe abortion services and creating reproductive
                  health networks that connect women with care. <br /> <br />{" "}
                  Their programs include training safe abortion providers,
                  supporting health clinics with necessary supplies, supporting
                  university students as peer educators on sexual and
                  reproductive health, and educating communities on accessing
                  safe abortion services.
                </p>
              </div>
              <div className="story-topic">
                <div>
                  <i class="fa-solid fa-bullseye"></i> <h3>Future Goals</h3>
                </div>
                <p>
                  Since 2010, after a study highlighted high death rates from
                  unsafe second-trimester abortions in Ethiopia, IPAS Ethiopia
                  has collaborated with the Ministry of Health to introduce
                  medical abortion services for women at or after 13 weeks of
                  pregnancy in all major states and regions. <br /> <br /> This
                  initiative has significantly contributed to reducing maternal
                  mortality and improving reproductive health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter />
      <Map />
      <Footer />
    </div>
  );
}
