import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { setAuthToken } from "./Utils/AxiosHelper";
import Cookies from "js-cookie";

const CertificateForm = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    department: "",
    course: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = Cookies.get("token");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    setIsLoading(true);

    try {
      const response = await axios.post(
        API_BASE_URL + "/api/certificate",
        studentInfo
      );
      setSuccess(`Login successful! Redirecting to certificate-view page...`);
      setTimeout(
        () => navigate(`/certificate-view`, { state: response.data }),
        2000
      );
    } catch (error) {
      console.error("Error submitting student info:", error);
      setError(
        error.response?.data?.message || "Error submitting student info"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (token) {
      setAuthToken(token);
    } else {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/login?from=/certificate-form");
      }, 2000);
    }

    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }

    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [token, error, success]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <WorkspacePremiumIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Certificate Form
        </Typography>
        {error && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ width: "100%", mt: 2 }}>
            {success}
          </Alert>
        )}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Student Name"
            id="name"
            type="text"
            value={studentInfo.name}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, name: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="department"
            label="Department"
            id="department"
            type="text"
            value={studentInfo.department}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, department: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="course"
            label="Course"
            id="course"
            type="text"
            value={studentInfo.course}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, course: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              "Generate Certificate"
            )}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Unauthorized! Redirecting to login page...
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CertificateForm;
