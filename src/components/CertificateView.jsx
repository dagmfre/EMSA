import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "./Utils/AxiosHelper";
import Cookies from "js-cookie";
import { Alert, Snackbar } from "@mui/material";

export default function CertificateView() {
  const location = useLocation();
  const studentInfo = location.state;
  const token = Cookies.get("token");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();

  const currentDate = `${date.getDate()}-${
    monthNames[date.getMonth()]
  }-${date.getFullYear()}`;

  useEffect(() => {
    if (token) {
      setAuthToken(token);
    } else {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/login?from=/certificate");
      }, 2000);
    }
  }, [token]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        maxWidth: "940px",
        position: "relative",
        justifyContent: "center",
        margin: "3rem auto 0",
      }}
    >
      <div
        style={{
          gridArea: "1 / 1 / 2 / 2",
          width: "100%",
          alignSelf: "flex-end",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            flex: "70%",
            padding: "0px 3rem 4rem",
          }}
        >
          <h2
            style={{
              marginBottom: "3rem",
              fontFamily: "Lobster",
              fontStyle: "normal",
              fontSize: "3rem",
              fontWeight: 900,
            }}
          >
            {studentInfo?.name}
          </h2>
          <div>
            <p>
              This certifies that{" "}
              <strong>
                <i>{studentInfo?.name}</i>
              </strong>{" "}
              has successfully completed the{" "}
              <strong>
                <i>{studentInfo?.course}</i>
              </strong>{" "}
              in
              <strong>
                <i>{studentInfo?.department}</i>
              </strong>
              , demonstrating exceptional knowledge and skills. This
              certification recognizes his/her achievement and commitment to
              excellence.
            </p>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* <p
                  style={{
                    borderBottom: "1px solid #00000069",
                  }}
                >
                  {currentDate}
                </p> */}
                <p>President Signature</p>
              </div>
              <div>
                <p
                  style={{
                    borderBottom: "1px solid #00000069",
                  }}
                >
                  {currentDate}
                </p>
                <p>Date</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: "20%" }}></div>
      </div>
      <img
        style={{
          width: "100%",
          zIndex: "-1",
          gridArea: "1 / 1 / 2 / 2",
        }}
        src="certificate.svg"
        alt=""
      />
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
    </div>
  );
}
