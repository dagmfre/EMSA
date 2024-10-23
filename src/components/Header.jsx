import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Cookies from "js-cookie";

export default function Header(props) {
  const [isSticky, setIsSticky] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.get("token");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.isSticky]);

  useEffect(() => {
    if (token) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [token]);

  return (
    <div
      className={`header navigation ${
        isSticky || props.isSticky ? "sticky" : ""
      }`}
    >
      <div>
        <Link to={"/"}>
          <img
            rel="Preload"
            src={`${
              !isSticky && props.shouldLogoChange
                ? "/logo.png"
                : "/logo_black.png"
            }`}
            alt=""
          />
        </Link>
        <input
          type="checkbox"
          className="navigation-checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation-button">
          <span
            style={{
              backgroundColor:
                !isSticky && props.shouldLogoChange ? "white" : "black",
            }}
            className="menu-line"
          ></span>
          <span
            style={{
              backgroundColor:
                !isSticky && props.shouldLogoChange ? "white" : "black",
            }}
            className="menu-line"
          ></span>
          <span
            style={{
              backgroundColor:
                !isSticky && props.shouldLogoChange ? "white" : "black",
            }}
            className="menu-line"
          ></span>
        </label>
        <div className="navigation-background"></div>
        <nav className="navigation-nav">
          <div className="navigation-list">
            <Link to="/" className="navigation-link">
              Home
            </Link>
            <Link to="/about" className="navigation-link">
              About Us
            </Link>
            <Link to="/trainers-pool" className="navigation-link">
              Trainers Pool
            </Link>
            <Link to="/committees" className="navigation-link">
              Standing Committees
            </Link>
            <Link to="/local-chapters" className="navigation-link">
              Local Chapters
            </Link>
            <Link to="/news" className="navigation-link">
              News & Announcements
            </Link>
            {isAdmin && (
              <Link to="/certificate-form" className="navigation-link">
                Generate Certificate
              </Link>
            )}
            <Link to="/join-us" className="navigation-link">
              How to Join Us
            </Link>
            <Link to="/login" className="navigation-link">
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
