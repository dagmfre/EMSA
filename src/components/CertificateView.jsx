import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CertificateView() {
  const location = useLocation();
  const locationStudentInfo = location.state;

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const type = queryParams.get("type");

  const [studentInfo, setStudentInfo] = useState(locationStudentInfo);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("Cer1");
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    if (name && type) {
      setLoading(true);
      axios
        .get(`${API_BASE_URL}/api/certificates/${name}/${type}`)
        .then((response) => {
          setStudentInfo(response.data[0]);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching certificates:", error);
          setLoading(false);
        });
    }
  }, [name, type]);

  console.log(name, type);

  const handleDownload = async (format) => {
    const element = document.getElementById("certificate");
    const scale = 2;
    const canvas = await html2canvas(element, { scale });
    const data = canvas.toDataURL("image/png");

    if (format === "pdf") {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(data, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("certificate.pdf");
    } else if (format === "image") {
      const link = document.createElement("a");
      link.href = data;
      link.download = "certificate.png";
      link.click();
    }
  };

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const constructUrl = () => {
    const studentName = studentInfo?.name || name;
    const certificateType = studentInfo?.type || type;
    return `http://localhost:3000/certificate-view?name=${encodeURIComponent(
      studentName
    )}&type=${encodeURIComponent(certificateType)}`;
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div
        id="certificate"
        style={{
          display: "grid",
          alignItems: "center",
          width: "940px",
          position: "relative",
          justifyContent: "center",
          margin: "auto",
          height: "90vh",
          fontFamily: '"Playfair Display", serif',
          fontOpticalSizing: "auto",
          fontWeight: "<weight>",
          fontStyle: "normal",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding:
              selectedTemplate === "Cer2" ? "0px 6rem 0 15rem" : "0 12rem",
            top: selectedTemplate === "Cer2" ? "2rem" : "3rem",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              marginTop:
                selectedTemplate === "Cer3"
                  ? "4rem"
                  : selectedTemplate === "Cer2"
                  ? "10px"
                  : "",
              textTransform: "uppercase",
              marginBottom:
                selectedTemplate === "Cer3"
                  ? "5px"
                  : selectedTemplate === "Cer2"
                  ? "2rem"
                  : "",
              fontWeight: "600",
            }}
          >
            OF {studentInfo?.type}
          </p>
          <div style={{ margin: "0" }}>
            <p>THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
            <h2
              style={{
                fontSize: "3.5rem",
                fontWeight: 900,
                margin: "1rem 0px 1rem",
                fontFamily: "Great Vibes, cursive",
                fontWight: "400",
                fontStyle: "normal",
              }}
            >
              {studentInfo?.name}
            </h2>
          </div>
          <p>{studentInfo?.body}</p>
          <div className="certificate-bottom">
            <div className="certificate-bottom-cont">
              <img src="signature.png" alt="" />
              <p>Mr. Abebe Kebede</p>
              <p>PRESIDENT</p>
            </div>
            <div className="certificate-bottom-cont">
              <img src="signature.png" alt="" />
              <p>{studentInfo?.issueDate}</p>
              <p>Date</p>
            </div>
          </div>
        </div>
        <img
          style={{
            width: "100%",
            zIndex: "-1",
            gridArea: "1 / 1 / 2 / 2",
            margin: "auto",
            position: "absolute",
          }}
          src={
            selectedTemplate === "Cer1"
              ? "/certificate1.png"
              : selectedTemplate === "Cer2"
              ? "/certificate2.png"
              : "/certificate3.png"
          }
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          margin: "auto",
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        className="btn-save-cont"
      >
        <FormControl variant="outlined" style={{ marginBottom: "1rem" }}>
          <InputLabel id="template-select-label">Template</InputLabel>
          <Select
            labelId="template-select-label"
            value={selectedTemplate}
            onChange={handleTemplateChange}
            label="Template"
            sx={{
              "& .MuiSelect-select": {
                padding: "8px 14px",
              },
            }}
          >
            <MenuItem value="Cer1">Template 1</MenuItem>
            <MenuItem value="Cer2">Template 2</MenuItem>
            <MenuItem value="Cer3">Template 3</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDownload("pdf")}
        >
          Save as PDF
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDownload("image")}
        >
          Save as Image
        </Button>
        <CopyToClipboard text={constructUrl()}>
          <Button variant="contained">Copy URL</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
}