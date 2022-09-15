import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
        <SwiperSlide className="slide">

        </SwiperSlide>
      </Swiper>
    </>
  );
}
