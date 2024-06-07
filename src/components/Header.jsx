import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function Header(props) {
  const [isSticky, setIsSticky] = useState(false);

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
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.isSticky]);

  return (
    <div
      className={`header navigation ${
        isSticky || props.isSticky ? "sticky" : ""
      }`}
    >
      <div>
        <img
          rel="Preload"
          src={`${
            !isSticky && props.shouldLogoChange
              ? "/logo.png"
              : "/logo_black.png"
          }`}
          alt=""
        />
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
            <Link to="/chapters" className="navigation-link">
              Local Chapters
            </Link>
            <Link to="/news" className="navigation-link">
              News & Announcements
            </Link>
            <Link to="/join" className="navigation-link">
              Join Us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
