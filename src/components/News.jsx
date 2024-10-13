import Header from "./Header";
import Footer from "./Footer";
import { PhotoCollage } from "./PhotoCollage";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        </div>
        <div className="news-cards-cont">
          {news?.data?.map((newItem) => (
            <div>
              <PhotoCollage images={newItem.images} />
              <h2>{newItem.title}</h2>
              <TruncateText text={newItem.body} maxLength={200} />
            </div>
          ))}
          <div
            style={{ display: `${isAdmin ? "flex" : "none"}` }}
            className="news-form-external-link"
          >
            <Link onClick={handleClick}>
              <h2>Add News & Events</h2>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
