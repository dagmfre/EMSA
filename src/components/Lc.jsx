import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import emsaDescriptions, { emsaLocalChapters } from "./emsaDescriptions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LocalChapters() {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="our-story-cont local-chapters">
      <Header shouldLogoChange={false} />
      <div className="local-chapters-hero">
        <img src="lc.svg" alt="" />
        <div className="lc-main">
          <h1>Local Chapters</h1>
          <p>
            The Local Chapters of the Ethiopian Medical Students Association
            (EMSA) are vibrant branches of student engagement and professional
            growth, spread across 16 medical facilities with 10 more under
            establishments. Each chapter is dedicated to fostering leadership,
            collaboration, and community service among medical students, playing
            a crucial role in advancing healthcare initiatives within their
            regions. Through educational programs, public health campaigns, and
            hands-on training, the local chapters empower students to be
            proactive in addressing health challenges and improving public
            health outcomes.
          </p>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            maxWidth: "max-content",
            margin: "auto",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              justifyContent: "center",
              maxWidth: "max-content",
            }}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {emsaDescriptions.map((chapter, index) => (
              <Tab label={chapter.name} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </Box>

        {emsaDescriptions.map((chapter, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <div className="emsa-lc-description-cont" sx={{ padding: 0 }}>
              <div className="emsa-lc-head">
                <img src={chapter.logo} alt={chapter.name} />
                <h2>{chapter.name}</h2>
                <p>{chapter.description}</p>
              </div>
              <div className="emsa-lc-body-cont">
                <div className="emsa-lc-body">
                  <img src={chapter.image1} alt="" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: chapter?.content1?.replace(/\n/g, "<br />"),
                    }}
                  />
                </div>
                {chapter.image2 && (
                  <div className="emsa-lc-body reverse">
                    <img src={chapter.image2} alt="" />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: chapter?.content1?.replace(/\n/g, "<br />"),
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </CustomTabPanel>
        ))}
      </Box>

      <div className="all-chapters">
        <div className="lc-chapters-head" onClick={handleClick}>
          <h2>See all chapters</h2>
          {isOpen ? (
            <ArrowDropUpIcon width="2rem" height="2rem" />
          ) : (
            <ArrowDropDownIcon />
          )}
        </div>
        <div
          style={{ display: isOpen ? "grid" : "none" }}
          className="lc-chapters-cont"
        >
          {emsaLocalChapters.map((chapter, index) => (
            <div className="lc-chapter" key={index}>
              <p>{chapter.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
