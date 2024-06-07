import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
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
        <img
          data-aos-once="true"
          data-aos="fade-fade"
          className="cross-fill"
          src="cross_blue_fill.svg"
          alt=""
        />
        <div className="moto-descr-cont">
          <h1 data-aos-once="true" data-aos="fade-up" data-aos-duration="800">
            <span>Empowering</span> Future Healthcare Leaders
          </h1>
          <p data-aos-once="true" data-aos="fade-up" data-aos-duration="1200">
            We are a non-governmental organization dedicated to empowering
            Ethiopian medical students to advance healthcare delivery in
            Ethiopia.
          </p>
        </div>
        <div className="front-btn-cont">
          <Link
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <Button
              variant="contained"
              endIcon={<FontAwesomeIcon icon={faHandshake} />}
              sx={{
                fontSize: "1.2rem",
                padding: "1rem 0",
                width: "100%",
              }}
            >
              Join Us
            </Button>
          </Link>
          <Link
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="front-certificate-btn"
          >
            <p>Get Students Certificate</p>
            <i class="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </div>

      <div className="front-img-cont">
        <img
          data-aos-once="true"
          data-aos="fade-fade"
          data-aos-duration="1600"
          className="rec-shape"
          src="rectangle.svg"
          alt=""
        />
        <img className="rectangle" src="rectangle.svg" alt="" />
        <div
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-duration="1600"
          class="ripple-circles-cont"
        >
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
                <img src="front-img.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="front-img3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="front-img4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="front-img5.png" alt="" />
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
