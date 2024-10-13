import Header from "../Header";
import Footer from "../Footer";
import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Score() {
  return (
    <div className="the-committee score">
      <Header shouldLogoChange={true} />
      <div className="the-committee-front">
        <img src="/research1.svg" alt="" />
        <img src="/research2.svg" alt="" />
        <img src="/SCORE.png" alt="" />
        <h1>Research Exchanges (SCORE)</h1>
        <p>
          SCORE is the standing committee on research exchange which is one of
          the six standing committees of the IFMSA. EMSA Ethiopia's SCORE has
          been in office for more than 5 years now. The main focus area are
          Research and Research exchanges.
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
            SCORE Ethiopia has been handed down through many generations. The
            current NORE is Dr. Abigael Abiy Mesfin. In 2023, SCORE Ethiopia was
            activated in IFMSA during Dr. Sauel Mesfin Girma's term as the
            National officer on Research Exchange. In the year 2024, SCORE
            Ethiopia started its first research exchanges with around 18
            outgoing exchange students.
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
            Research is a crucial part of any education especially medicine.
            Therefore, We believe medical students should have the necessary
            exposure to research as medical students. Our vision is for research
            to be adequately included as part of the medical curricula and for
            medical students to be competent in addition to their academics. Our
            mission is to improve the access and engagement of medical students
            to research and research education. To cultivate medical students'
            passion and enthusiasm on research
          </p>
        </div>
        <div className="objectives-cont">
          <div className="objectives">
            <img src="/score-icon1.svg" alt="" />
            <div>
              <h4>Research Exchanges</h4>
              <p>
                Promote research exchanges locally and internationally to foster
                collaboration and knowledge sharing.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon2.svg" alt="" />
            <div>
              <h4>Research Basics</h4>
              <p>
                Ensure medical students know the basics of how to do research,
                providing them with essential skills for their future careers.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon3.svg" alt="" />
            <div>
              <h4>Career Options</h4>
              <p>
                Highlight career options in medical research to inspire and
                guide students towards various professional paths in the field.
              </p>
            </div>
          </div>
          <div className="objectives">
            <img src="/score-icon5.svg" alt="" />
            <div>
              <h4>Research Culture</h4>
              <p>
                Influence the research culture in hospitals to involve the young
                generation, encouraging their active participation and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="score committee-achievements">
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
            SCORE has achieved significant contributions to research education,
            international collaboration, and organizational partnerships.
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
              <ListItemText primary="Conducted nation-wide research education training series" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Hosted international research exchanges in our country for the first time" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <Groups2Icon />
              </ListItemIcon>
              <ListItemText primary="Built partnerships with research organizations" />
            </ListItemButton>
          </List>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
