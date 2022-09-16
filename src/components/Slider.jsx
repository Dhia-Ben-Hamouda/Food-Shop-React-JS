import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={ window.innerWidth > 768 ? 3 : 1}
        spaceBetween={30}
        grabCursor={true}
        slidesPerGroup={window.innerWidth > 768 ? 3 : 1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">

          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
