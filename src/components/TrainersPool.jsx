import Header from "./Header";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

export default function TrainersPool() {
  const targetSectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contents = [
    {
      name: "Dr. Nanati Jemal Aliye",
      img: "https://media.licdn.com/dms/image/D4E03AQE9CDWGDkAbXw/profile-displayphoto-shrink_800_800/0/1701160197940?e=1723075200&v=beta&t=RtOBfcJX1DiJWL5Mwtpc8qs-c0pwcmTxCZ8mZtfWiwQ",
      position: "National Exchange officer / SCOPE GA",
      LC: "EMSA-AA/ EMSA Ethiopia / IFMSA",
      workshops: "PRET (WCo), CM",
      sessions: "SCOPE Sessions",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA), TNET (IFMSA), TNT (IFMSA)",
      email: "Nanatialiye@gmail.com",
      phoneNo: "+251923798813",
    },
    {
      name: "Dr. Seblewengel Birku Kebebew",
      img: "https://i1.rgstatic.net/ii/profile.image/993178513575939-1613803618233_Q512/Seblewengel-Kebebew.jpg",
      position: "EMSA VPCB, IFMSA CBGA (2023-24)",
      LC: "EMSA-AA/ EMSA-Ethiopia /IFMSA",
      workshops: "TNT, TNET, PRET, oCBB, CM (WCo)",
      sessions: "NMO Mx, Virtual CB series, LC Mx, CB CM",
      topics: "-----------------------------",
      certifiedWorkshops:
        "TNT (IFMSA), TNET (IFMSA), PRET (IFMSA), CBB (IFMSA), TNRET (EMSA), iPas (EMSA)",
      email: "seblewongelbirku@gmail.com",
      phoneNo: "+251923513409",
    },
    {
      name: "Dr. Tsinat Mulugeta Gebre",
      img: "https://media.licdn.com/dms/image/C4D03AQFxde-BCe6hCw/profile-displayphoto-shrink_800_800/0/1637905752276?e=1723075200&v=beta&t=cQqwQ2Swbcdt6lXATJiZqZyikXY5AoxV95HhQP-vlbk",
      position: "National supervising Council 2022/24",
      LC: "EMSA-ST.PAUL / EMSA-ETHIOPIA",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "TNT (EMSA)",
      email: "mulugetatsinat@gmail.com",
      phoneNo: "+251925318506",
    },
    {
      name: "Abel Desta Abdela",
      img: "abel.png",
      position: "VPM 23 CB GA 23/24 SCORE Finance assistant 22",
      LC: "EMSA-AA/ EMSA Ethiopia",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA) TNRET (EMSA)",
      email: "abeldesta802@gmail.com",
      phoneNo: "+251916865570",
    },
    {
      name: "Natnael Mathewos Assele",

      img: "https://media.licdn.com/dms/image/C5603AQFkMV-WqnbNEQ/profile-displayphoto-shrink_800_800/0/1650327842711?e=1723075200&v=beta&t=CYqkt-U1-j1keBlLyg2cKCS6eK6XWArTzr72J6xu49s",
      position: "Vice Director of SCOME AA 22",
      LC: "EMSA-AA/ EMSA Ethiopia / IFMSA",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA) TNRET (EMSA)",
      email: "nati4mati@gmail.com",
      phoneNo: "+251968592201",
    },
    {
      name: "Dagmawit Bedilu Dingetu",
      img: "https://media.licdn.com/dms/image/D4E03AQG9RNkQFnWvCw/profile-displayphoto-shrink_800_800/0/1702462438925?e=1723075200&v=beta&t=3bqBnLFF-LADruUc7JKKXEnVAFkkLcVKDHVoG5WMBQM",
      position: "VPCB 23",
      LC: "TNRET (EMSA)",
      workshops: "PRET (WCo), CM",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA), TNET (IFMSA), TNT (IFMSA)",
      email: "Dagmbedilu@gmail.com",
      phoneNo: "+251954869983",
    },
    {
      name: "Dr. Ruth Feyissa Worku",
      img: "woman-avatar.png",
      position: "National Exchange officer / SCOPE GA",
      LC: "EMSA-ST PAUL/EMSA ",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA), TNET (IFMSA), TNT (IFMSA)",
      email: "ruthworku101@gmail.com",
      phoneNo: "+251954869983",
    },
    // ኖት ደን
    {
      name: "Sumeya Nahwi Mohammed",
      img: "sumeya.png",
      position: "LC President 22/23 National CBA L& SCORP MRRC",
      LC: "EMSA-AA/ EMSA Ethiopia / IFMSA",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA) TNRET (EMSA)",
      email: "sumeyanahwi9@gmail.com",
      phoneNo: "+251912653057",
    },
    {
      name: "Dr. Selehadin Genzeb Semaw",
      img: "https://static.wixstatic.com/media/2def06_4cf3e1f60a59438b8b3966f4d9907394~mv2.png",
      position:
        "LC Supervising Council/ SCOPE National Team GA/SCOPE RA for Africa",
      LC: "EMSA-St. Paul/EMSA Ethiopia",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA) TNRET (EMSA)",
      email: "sgselehadin@gmail.com",
      phoneNo: "+2519-29-08-15-39",
    },
    {
      name: "Biruh Tesfaye Yehualawork",
      img: "https://media.licdn.com/dms/image/C4E03AQEQ2vabSNZViw/profile-displayphoto-shrink_800_800/0/1660335930007?e=1723075200&v=beta&t=xUvgsTgfivsna5irKKEBX1zoKwxxkthpeH8C8xxfv3Y",
      position: "Director of SCORA St. Paul 2023",
      LC: "TNT (IFMSA)",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA), TNET (IFMSA), TNT (IFMSA)",
      email: "biruhtesfaye7@gmail.com",
      phoneNo: "+251938647373",
    },
    {
      name: "Dr. Higewongel Belete",
      img: "https://media.licdn.com/dms/image/D4E03AQGQkwacZAyAaQ/profile-displayphoto-shrink_800_800/0/1692735823253?e=1723075200&v=beta&t=5Jha2UKV-08ATt1ou45W5yEyLGwTjwcRnxrAWqQd5lY",
      position: "Director of SCORE hawassa",
      LC: "EMSA-Hawassa",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA), TNRET (EMSA)",
      email: "belehige19@gmail.com",
      phoneNo: "+251931561673",
    },
    {
      name: "Dr. Laltu Megerssa Negasa",
      img: "https://media.licdn.com/dms/image/D4D03AQHVQzXhF5VaMQ/profile-displayphoto-shrink_800_800/0/1688151433996?e=1723075200&v=beta&t=k6e0GUZPdn6rI1Cmrkp0YCrzTcsOjvnZob7vS2hQG9c",
      position:
        "Activity Coordinator of people with Disabilities in SCORP national team 2022/23",
      LC: "EMSA-AA",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "TNT (IFMSA)",
      email: "laltumegerssa@gmail.com",
      phoneNo: "+251936559889",
    },
    {
      name: "Fikir Getahun Sisay",
      img: "http://localhost:3000/fikir.png",
      position: "SCORE St. Paul Director, National Member’s Assistant ",
      LC: "EMSA-St. Paul",
      workshops: "-----------------------------",
      sessions: "-----------------------------",
      topics: "-----------------------------",
      certifiedWorkshops: "PRET (IFMSA), TNRET (EMSA)",
      email: "getfikir11@gmail.com",
      phoneNo: "+251973121752",
    },
  ];

  useEffect(() => {
    const element = document.getElementsByClassName("navigation")[0];
    if (element && open) {
      element.style.zIndex = 100;
    }
  }, [open]);

  return (
    <div className="trainers">
      <Header shouldLogoChange={false}/>
      <div className="trainers-front">
        <div className="trainers-descrp">
          <h1>EMSA Training Team</h1>
          <p>
            Talented and experienced trainers of EMSA which are passionate about
            empowering fellow medical students with the knowledge and skills
            necessary to excel in the healthcare field. Our trainers come from
            diverse backgrounds within EMSA, with expertise across a wide range
            of medical topics.
          </p>
          <p>
            They have a proven track record of delivering engaging workshops,
            sessions, and trainings on clinical skills, public health advocacy,
            or professional development to produce a well-rounded healthcare
            professional.
          </p>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{
              fontSize: "1rem",
              padding: "10px 2rem",
              textTransform: "capitalize",
              fontFamily: '"Lato", Verdana, sans-serif',
              borderRadius: "7px",
              backgroundColor: "#163241 !important",
              color: "white",
            }}
          >
            Explore Trainers Pool
          </Button>
        </div>
        <div className="trainers-img">
          <img src="Trainers.svg" alt="" />
        </div>
      </div>
      <div className="trainers-pool-cont">
        <h1>Trainers Pool</h1>
        <div className="trainers-pool">
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQE9CDWGDkAbXw/profile-displayphoto-shrink_800_800/0/1701160197940?e=1723075200&v=beta&t=RtOBfcJX1DiJWL5Mwtpc8qs-c0pwcmTxCZ8mZtfWiwQ"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[0])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Nanati Jemal Aliye</p>
            <p>National Exchange officer /SCOPE GA</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://i1.rgstatic.net/ii/profile.image/993178513575939-1613803618233_Q512/Seblewengel-Kebebew.jpg"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[1])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Seblewengel Birku Kebebew</p>
            <p>EMSA VPCB, IFMSA CBGA (2023-24)</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQFxde-BCe6hCw/profile-displayphoto-shrink_800_800/0/1637905752276?e=1723075200&v=beta&t=cQqwQ2Swbcdt6lXATJiZqZyikXY5AoxV95HhQP-vlbk"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[2])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Tsinat Mulugeta Gebre</p>
            <p>National supervising Council 2022/24</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img src="abel.png" alt="" />
              <div
                onClick={() => handleOpen(contents[3])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Abel Desta Abdela</p>
            <p>VPM 23 CB GA 23/24 SCORE Finance assistant 22</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/C5603AQFkMV-WqnbNEQ/profile-displayphoto-shrink_800_800/0/1650327842711?e=1723075200&v=beta&t=CYqkt-U1-j1keBlLyg2cKCS6eK6XWArTzr72J6xu49s"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[4])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Natnael Mathewos Assele</p>
            <p>Vice Director of SCOME AA 22</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQG9RNkQFnWvCw/profile-displayphoto-shrink_800_800/0/1702462438925?e=1723075200&v=beta&t=3bqBnLFF-LADruUc7JKKXEnVAFkkLcVKDHVoG5WMBQM"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[5])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dagmawit Bedilu Dingetu</p>
            <p>VPCB 23</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img src="woman-avatar.png" alt="" />
              <div
                onClick={() => handleOpen(contents[6])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Ruth Feyissa Worku</p>
            <p>Dr. Ruth Feyissa Worku</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img src="sumeya.png" alt="" />
              <div
                onClick={() => handleOpen(contents[7])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Sumeya Nahwi Mohammed</p>
            <p>LC President 22/23 National CBA L& SCORP MRRC</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://static.wixstatic.com/media/2def06_4cf3e1f60a59438b8b3966f4d9907394~mv2.png"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[8])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Selehadin Genzeb Semaw</p>
            <p>
              LC Supervising Council/ SCOPE National Team GA/SCOPE RA for Africa
            </p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQEQ2vabSNZViw/profile-displayphoto-shrink_800_800/0/1660335930007?e=1723075200&v=beta&t=xUvgsTgfivsna5irKKEBX1zoKwxxkthpeH8C8xxfv3Y"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[9])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Biruh Tesfaye Yehualawork</p>
            <p>Director of SCORA St. Paul 2023</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQGQkwacZAyAaQ/profile-displayphoto-shrink_800_800/0/1692735823253?e=1723075200&v=beta&t=5Jha2UKV-08ATt1ou45W5yEyLGwTjwcRnxrAWqQd5lY"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[10])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Higewongel Belete</p>
            <p>Director of SCORE hawassa</p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQHVQzXhF5VaMQ/profile-displayphoto-shrink_800_800/0/1688151433996?e=1723075200&v=beta&t=k6e0GUZPdn6rI1Cmrkp0YCrzTcsOjvnZob7vS2hQG9c"
                alt=""
              />
              <div
                onClick={() => handleOpen(contents[11])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Dr. Laltu Megerssa Negasa</p>
            <p>
              Activity Coordinator of people with Disabilities in SCORP national
              team 2022/23
            </p>
          </div>
          <div className="trainer">
            <div className="trainer-img-cont">
              <img src="fikir.png" alt="" />
              <div
                onClick={() => handleOpen(contents[12])}
                className="detail-btn"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p>Fikir Getahun Sisay</p>
            <p>SCORE St. Paul Director, National Member’s Assistant</p>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContent sx={style}>
            <div className="modal-header">
              <i
                onClick={handleClose}
                className={
                  isHovered
                    ? "fa-solid fa-circle-xmark"
                    : "fa-regular fa-circle-xmark"
                }
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              ></i>{" "}
              <div className="modal-img-cont">
                <img src={`${modalContent.img}`} alt="" />
              </div>
              <div className="header-descrp">
                <h4>{modalContent.name}</h4>
                <p>{modalContent.position}</p>
                <p>{modalContent.LC}</p>
              </div>
            </div>
            <div className="modal-content">
              <div className="modal-content1">
                <h4>Workshops Delivered:</h4>
                <p>{modalContent.workshops}</p>
              </div>
              <div className="modal-content2">
                <h4>Certified Workshops:</h4>
                <p>{modalContent.certifiedWorkshops}</p>
              </div>
              <div className="modal-content3">
                <h4>Sessions:</h4>
                <p>{modalContent.sessions}</p>
              </div>
              <div className="modal-content4">
                <h4>Topics:</h4>
                <p>{modalContent.topics}</p>
              </div>
            </div>
            <div className="modal-contacts">
              <div>
                <div>
                  <i class="fa-solid fa-square-phone"></i>
                  <p>{modalContent.phoneNo}</p>
                </div>
                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <p>{modalContent.email}</p>
                </div>
              </div>
              <div className="modal-contact-links">
                <Link to="https://t.me/dag65">
                  <i class="fa-brands fa-telegram"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/dagmfre-seid-51a094214/">
                  <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </div>
            </div>
          </ModalContent>
        </Fade>
      </Modal>
      <Footer />
    </div>
  );
}

const Backdrop = forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: #236a889c;
  -webkit-tap-highlight-color: transparent;
`;

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const ModalContent = styled("div")(
  () => css`
    background-color: white;
    padding: 25px;
    font-weight: 500;
    max-width: 750px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 8px;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      border: 4px solid white;
      border-radius: 10px;
      z-index: -1;
    }

    & .modal-header {
      justify-content: flex-start;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: 2rem;
      position: relative;
      i {
        font-size: 2.5rem;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }

    .header-descrp h4 {
      font-weight: 900;
    }

    .header-descrp > :nth-child(2) {
      margin: 10px 0 0;
      font-weight: 600;
    }

    .header-descrp > :nth-child(3) {
      margin: 0;
    }

    & .modal-img-cont img {
      max-width: 150px;
      border-radius: 50%;
      border: "5px solid #989898",
    }

    & .modal-content {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      width: 100%;
      margin-top: 1rem;
      h4 {
        font-weight: 600;
      }
    }

    & .modal-contacts {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & .modal-contacts > :nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > * {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      i {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.1rem;
        margin: 0;
      }
    }

    & .modal-contact-links {
      display: flex;
      gap: 20px;
      font-size: 1.8rem;
      align-self: flex-end;
      a {
        text-decoration: none;
        color: inherit;
        &:nth-child(1) {
          color: #2f7c98;
        }
        &:nth-child(3) {
          color: #22bdd2;
        }
        &:nth-child(2) {
          color: #346a7e;
        }
      }
    }
  `
);
