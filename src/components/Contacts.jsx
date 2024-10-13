import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

export default function Contacts() {
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
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");

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
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-info-cont">
        <div>
          <h1>Get in touch!</h1>
        </div>

        <img src="/emsa-circle-img.png" alt="" />
      </div>

      <div className="contact-form">
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
              type="text"
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
          >
            Join Us
          </Button>
        </form>
      </div>
    </div>
  );
}
