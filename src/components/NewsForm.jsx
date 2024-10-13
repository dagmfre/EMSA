import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Container,
  Snackbar,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { setAuthToken } from "./Utils/AxiosHelper";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    images: [],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
    } else {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/login?from=/news-form");
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

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const selectedImages = Array.from(files);

      // Validate maximum of 4 images
      if (selectedImages.length + formData.images.length > 4) {
        setError("You can only upload up to 4 images");
        return;
      } else if (selectedImages.length + formData.images.length < 2) {
        setError("Please upload minimum of 2 images");
        return;
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData.images, ...selectedImages],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    if (!formData.title || !formData.body) {
      setError("Title and body are required");
      return false;
    }
    if (formData.images.length > 4) {
      setError("You can only upload up to 4 images");
      return false;
    }
    if (formData.images.length < 2) {
      setError("Please upload minimum of 2 images");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setIsLoading(true);
    const newsData = new FormData();
    newsData.append("title", formData.title);
    newsData.append("body", formData.body);
    formData.images.forEach((image) => newsData.append("images", image));

    try {
      const response = await axios.post(`${API_BASE_URL}/api/news`, newsData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (response.data) {
        setSuccess("News added successfully! Redirecting to news page...");
        setTimeout(() => navigate("/news"), 2000);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      setError(
        err.response.data?.message ||
          err?.response?.data?.errors[0]?.msg ||
          "An error occurred while creating news"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ maxWidth: "550px !important" }}
    >
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
          <ArticleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add News
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
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            width: "100%",
            "& > *": { m: "0 !important" },
            gap: "1rem",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="News Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            name="body"
            label="News Body"
            id="body"
            value={formData.body}
            onChange={handleChange}
          />
          <div className="news-form-group">
            <div className="uploader-cont">
              <img src="/uploader.png" alt="" />
              <p>Upload Images</p>
            </div>
            <input
              accept="image/*"
              id="images"
              multiple
              type="file"
              onChange={handleChange}
              name="images"
            />
          </div>
          <Typography variant="body2" color="text.secondary" align="center">
            {formData.images.length} image(s) selected
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Add News"}
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

export default AddNews;
