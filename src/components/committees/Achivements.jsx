// Achievements.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import achievementsInfo from "./AchivementInfo";

export default function Achievements({ standingCommittee }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        {achievementsInfo?.[standingCommittee].map((achievement, index) => (
          <SwiperSlide key={index}>
            <p
              className="title"
              data-swiper-parallax="-300"
              style={{ fontWeight: "900" }}
            >
              {achievement?.title}
            </p>
            <div className="text" data-swiper-parallax="-100">
              {achievement?.imageSrc && (
                <img
                  src={`/${achievement?.imageSrc}`}
                  alt={achievement?.imageSrc}
                />
              )}
              <p>{achievement?.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
