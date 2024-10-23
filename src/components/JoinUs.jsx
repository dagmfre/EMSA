import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PeopleIcon from "@mui/icons-material/People";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

const steps = [
  {
    title: "Step 1: Contact Vice-President",
    description:
      "Interested medical students/schools can contact the Vice-President of Members of EMSA-Ethiopia to initiate the process.",
    image: "/join1.png",
    icon: <ContactMailIcon />,
  },
  {
    title: "Step 2: Submit Letter",
    description:
      "Submit a letter to the school’s administration, requesting recognition and support for the establishment of an EMSA local chapter.",
    image: "/join2.png",
    icon: <MailOutlineIcon />,
  },
  {
    title: "Step 3: EMSA101 Session",
    description:
      "Coordinate with the Vice-President of Members and Vice-President of Capacity Building to deliver an EMSA101 session.",
    image: "/join3.png",
    icon: <SchoolIcon />,
  },
  {
    title: "Step 4: Form Electoral Board",
    description:
      "Assign a contact person to facilitate the formation of an Electoral Board consisting of representatives from each batch.",
    image: "/join4.png",
    icon: <GroupIcon />,
  },
  {
    title: "Step 5: Election Process",
    description:
      "Conduct the election of the Executive Board members in a fair manner, adhering to an election manual.",
    image: "/join5.png",
    icon: <HowToVoteIcon />,
  },
  {
    title: "Step 6: Set Up Team",
    description:
      "The newly-elected Executive Board members will set up their Team of Officials.",
    image: "/join6.png",
    icon: <PeopleIcon />,
  },
  {
    title: "Step 7: Present Activities",
    description:
      "Present the activities carried out in their term to EMSA-Ethiopia’s General Assembly for candidature acceptance.",
    image: "/join7.png",
    icon: <CoPresentIcon />,
  },
];

export default function JoinUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    user_email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");
    setLoading(true);

    emailjs
      .sendForm(
        "service_mrs2gmr",
        "template_1atvw44",
        formRef.current,
        "2vAafyWokU5vCYmE9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setSuccessMessage("Your message has been sent successfully!");
          setLoading(false);

          setFormData({
            firstName: "",
            lastName: "",
            user_email: "",
            phoneNumber: "",
            message: "",
          });

          setTimeout(() => {
            setIsSent(false);
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send your message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      style={{
        padding: "7rem 5rem 5rem",
      }}
      className="join-us-cont"
    >
      <Header shouldLogoChange={false} />
      <Container>
        <Typography
          sx={{
            margin: "0",
            marginTop: "2rem",
            fontWeight: "700",
          }}
          variant="h2"
          gutterBottom
        >
          How Can We Get Involved?
        </Typography>
        <Typography variant="body1" paragraph>
          EMSA unites medical students nationwide to lead initiatives that
          positively impact the communities we serve...
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={step?.image}
                  alt={step?.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {step?.icon} {step?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step?.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div
          className="contact"
          style={{
            margin: "5rem 0",
          }}
        >
          <div
            className="contact-form"
            style={{
              width: "100%",
              padding: 0,
            }}
          >
            <h1>Contact us</h1>
            {isSent && successMessage && (
              <Alert severity="success" sx={{ width: "100%", mt: 2 }}>
                {successMessage}
              </Alert>
            )}

            {error && (
              <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
                {error}
              </Alert>
            )}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter your email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                endIcon={<FontAwesomeIcon icon={faArrowRight} />}
                sx={{
                  fontSize: "1.2rem",
                  padding: "1rem 0",
                  width: "100%",
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Join Us"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
