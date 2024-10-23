import React, { useState, useEffect } from "react";
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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Student name is required")
    .min(2, "Name should be at least 2 characters long")
    .max(50, "Name should not exceed 50 characters"),
  type: yup.string().required("Certificate type is required"),
});

const GetCertificatesForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setError("");
      setSuccess("");
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/certificates/${values.name}/${values.type}`
        );
        setSuccess("Certificate fetched successfully!");

        setTimeout(
          () =>
            navigate(`/certificate-view`, {
              state: response.data[0],
            }),
          2000
        );
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setError(
          error.response?.data?.message ||
            error.response?.data?.errors ||
            error.response?.data?.errors?.map(
              (error) => error?.msg || error?.message
            ) ||
            "Error submitting student info"
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Get Certificates
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
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Student Name"
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="type-label">Certificate Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={formik.values.type}
              label="Certificate Type"
              onChange={formik.handleChange}
              error={formik.touched.type && Boolean(formik.errors.type)}
            >
              <MenuItem value="Completion">Completion</MenuItem>
              <MenuItem value="Achievement">Achievement</MenuItem>
              <MenuItem value="Training">Training</MenuItem>
              <MenuItem value="Participation">Participation</MenuItem>
            </Select>
            {formik.touched.type && formik.errors.type && (
              <Typography color="error">{formik.errors.type}</Typography>
            )}
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Get Certificates"}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
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

export default GetCertificatesForm;
