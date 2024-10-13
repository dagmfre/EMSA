import Header from "../Header";
import Footer from "../Footer";
import {
  Box,
  Collapse,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import BuildIcon from "@mui/icons-material/Build";
import RobotIcon from "@mui/icons-material/SmartToy";
import WorkshopIcon from "@mui/icons-material/Work";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function Scome() {
  const [open, setOpen] = useState([false, false, false]);

  const handleClick = (index) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

  return (
    <div className="scome the-committee">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/research1.svg" alt="" />
        <img src="/scome-background2.svg" alt="" />
        <img src="/SCORE3.png" alt="" />
        <h1>Medical Education (SCOME)</h1>
        <p>
          The Standing Committee on Medical Education (SCOME) Ethiopia operates
          under the Ethiopian Medical Students’ Association (EMSA), which is a
          member of the International Federation of Medical Students’
          Associations (IFMSA). As part of this global network, SCOME Ethiopia
          is committed to enhancing the medical education system in Ethiopia by
          empowering medical students to take an active role in shaping their
          learning experiences. By advocating for student-centered education and
          being involved in decision-making processes, SCOME Ethiopia strives to
          contribute to the development of future healthcare providers while
          improving the quality of healthcare for the communities they will
          serve. Through the support of EMSA and the broader IFMSA platform,
          SCOME Ethiopia works towards creating sustainable improvements in
          medical education.
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
            SCOME was one of the first standing committees present when EMSA was
            founded in 2003. It is the first standing committee to enroll an
            activity in the IFMSA database from EMSA Ethiopia and has been one
            of four or five African countries with voting rights for IFMSA SCOME
            elections since 2020. Previous SCOME officials include{" "}
            <strong>Heaven Yeshaneh (2019-2020) </strong>
            and
            <strong> Sabrina Zeleke (2020-2022).</strong>
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
            Medical students attain an optimal professional and personal
            development to reach their full potential as future doctors for
            better healthcare worldwide.
          </p>
        </div>
        <div className="objectives-cont">
          <div>
            <img src="/goal2.png" alt="" />
            <h4>Our Mission & Objective</h4>
          </div>
          <p>
            SCOME is a platform that creates a shared environment where medical
            students contribute, reflect, and work on the development of Medical
            Education through student-led activities. SCOME enables medical
            students to reach their full potential as Medical Education leaders
            through activities aimed at education, research, capacity
            development, meaningful youth engagement and, advocacy in order to
            create an effective impact on a local, national, regional, and
            international level.
          </p>
          <p>
            Our mission is to be the frame in which medical students worldwide
            contribute to the development of medical education. Students convene
            in SCOME to share and learn about medical education in order to
            improve it as well as benefit the most from it on a personal and
            professional basis.
          </p>
        </div>
      </div>
      <div className="scome committee-achievements">
        <Box display="flex" alignItems="center" mb={2}>
          <EmojiEventsIcon
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#0000001a",
              padding: "8px",
              borderRadius: "50%",
              border: "1px solid #00000052",
            }}
          />
          <Typography variant="h4" fontWeight={700}>
            Our Achievements
          </Typography>
        </Box>
        <Container>
          <Typography variant="body1" paragraph>
            SCOME has organized various activities and projects, including
            conferences, educational events, research initiatives, and webinars
            focused on medical education.
          </Typography>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              maxWidth: "initial",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Peer Assisted Learning" />
            </ListItemButton>

            <ListItemButton onClick={() => handleClick(0)}>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Clinical Year Demystifying" />
              {open[0] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Link
                      href="https://youtu.be/s4WMzTMSAtw"
                      target="_blank"
                      rel="noopener"
                    >
                      Watch The Webinar Series
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Back to the Basics - A Capacity Building Series" />
            </ListItemButton>

            <ListItemButton onClick={() => handleClick(1)}>
              <ListItemIcon>
                <RobotIcon />
              </ListItemIcon>
              <ListItemText primary="ANKI-BOT" />
              {open[1] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Link
                      href="https://t.me/SCOME_Anki"
                      target="_blank"
                      rel="noopener"
                    >
                      Join here
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Language Based Learning - A Sign Language Series" />
            </ListItemButton>

            <ListItemButton onClick={() => handleClick(2)}>
              <ListItemIcon>
                <WorkshopIcon />
              </ListItemIcon>
              <ListItemText primary="Items Development Workshops" />
              {open[2] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Link
                      href="https://t.me/SCOME_Anki"
                      target="_blank"
                      rel="noopener"
                    >
                      Explore The Workshops
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
