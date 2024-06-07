import { useState } from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormData({ name: "", email: "", phoneNumber: "", message: "" });
  };

  return (
    <div className="contact">
      <div className="contact-info-cont">
        <div>
          <h1>Get in touch!</h1>
        </div>

        <img src="emsa-circle-img.png" alt="" />
      </div>
      <div className="contact-form">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">First Name:</label>
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
            <label htmlFor="email">Last Name:</label>
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
              name="email"
              placeholder="Enter your email"
              value={formData.email}
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
