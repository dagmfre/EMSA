import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function FrontPage() {

  return (
    <div className="front-page">
      <div className="front-descr-cont">
        <img className="cross-fill" src="cross_blue_fill.svg" alt="" />
        <div className="moto-descr-cont">
          <h1>
            <span>Empowering</span> Future Healthcare Leaders
          </h1>
          <p>
            We are a non-governmental organization dedicated to empowering
            Ethiopian medical students to advance healthcare delivery in
            Ethiopia.
          </p>
        </div>
        <div className="front-btn-cont">
          <Link>
            <Button
              variant="contained"
              endIcon={<i class="fa-regular fa-handshake"></i>}
              sx={{
                fontSize: "1.2rem",
                padding: "1rem 0",
                width: "100%",
              }}
            >
              Join Us
            </Button>
          </Link>
          <Link className="front-certificate-btn">
            <p>Get Students Certificate</p>
            <i class="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </div>

      <div className="front-img-cont">
        <img className="rec-shape" src="rectangle.svg" alt="" />
        <img className="cross-stroke1" src="cross_blue_stroke.svg" alt="" />
        <img className="cross-stroke2" src="cross_blue_stroke.svg" alt="" />
        <img className="rectangle" src="rectangle.svg" alt="" />
        <div class="ripple-circles-cont">
          <div class="circle1">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={false}
              pagination={false}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="front-img.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="front-img3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="front-img4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="front-img5.png" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="circle2"></div>
          <div class="circle3"></div>
        </div>
      </div>
    </div>
  );
}
