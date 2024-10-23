import Header from "./Header";
import FrontPage from "./FrontPage";
import About from "./About";
import Mission from "./Mission";
import Partners from "./Partners";
import Team from "./Team";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Cookies from "js-cookie";
import axios from "axios";
import { PhotoCollage } from "./PhotoCollage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Alert, Box, Button, Card, CardContent } from "@mui/material";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

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
  }, [API_BASE_URL]);

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
    window.open("/news", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home">
          <Header shouldLogoChange={false} />
          <FrontPage />
          <About />
          <Mission />
          <Partners />
          <Team />
          <div className="news" style={{ padding: "50px 0" }}>
            <div className="news-header">
              <h1 style={{ fontSize: "3rem" }}>News & Events</h1>
              <div className="news-form-external-link">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                  startIcon={
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  }
                >
                  Explore All News
                </Button>
              </div>
            </div>
            {news?.data?.length > 0 ? (
              <div className="news-cards-cont">
                {news.data.slice(0, 3).map((newItem) => (
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
          <Testimonials />
          <Contacts />
          <Footer />
        </div>
      )}
    </>
  );
}
