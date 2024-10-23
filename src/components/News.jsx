import Header from "./Header";
import Footer from "./Footer";
import { PhotoCollage } from "./PhotoCollage";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

export default function News({ auth }) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_BASE_URL + "/api/news");
        setNews(res);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
    if (token) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [token]);

  const TruncateText = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isTruncated = text.length > maxLength;
    const truncatedText = text.substring(0, maxLength) + "...";

    const handleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <p style={{ whiteSpace: "pre-wrap" }}>
        {isExpanded ? text : truncatedText}
        {isTruncated && !isExpanded && (
          <span
            style={{
              cursor: "pointer",
              marginLeft: "5px",
              color: "#0000ffba",
            }}
            onClick={handleReadMore}
          >
            {" "}
            Read More
          </span>
        )}
        {isExpanded && (
          <span
            style={{
              cursor: "pointer",
              marginLeft: "5px",
              color: "#0000ffba",
            }}
            onClick={handleReadMore}
          >
            {" "}
            Show Less
          </span>
        )}
      </p>
    );
  };

  const handleClick = () => {
    window.open("/news-form", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header shouldLogoChange={false} />
      <div className="news">
        <div className="news-header">
          <h1>News & Events</h1>
          {isAdmin && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              startIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            >
              Add News & Events
            </Button>
          )}
        </div>

        {news?.data?.length > 0 ? (
          <div className="news-cards-cont">
            {news.data.map((newItem) => (
              <div key={newItem.id}>
                <PhotoCollage images={newItem.images} />
                <h2>{newItem.title}</h2>
                <TruncateText text={newItem.body} maxLength={200} />
              </div>
            ))}
          </div>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="60vh"
            className="no-news-found"
            sx={{
              width: "100%",
              maxWidth: "initial",
              height: "initial",
              justifyContent: "left",
            }}
          >
            <Card
              elevation={3}
              style={{
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                maxWidth: "320px",
                width: "100%",
                padding: 0,
              }}
            >
              <CardContent sx={{ paddingBottom: "0 !important" }}>
                <Alert severity="error" style={{ marginBottom: "16px" }}>
                  No News & Events found.
                </Alert>
              </CardContent>
            </Card>
          </Box>
        )}
      </div>
      <Footer />
    </>
  );
}
