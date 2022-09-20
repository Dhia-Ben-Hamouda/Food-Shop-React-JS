import React, { useRef, useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img1 from "../images/profile1.jpg";
import img2 from "../images/profile2.jpg";
import img3 from "../images/profile3.jpg";
import img4 from "../images/profile4.jpg";
import img5 from "../images/profile5.jpg";
import img6 from "../images/profile6.jpg";
import img7 from "../images/profile7.jpg";
import img8 from "../images/profile8.jpg";
import img9 from "../images/profile9.jpg";
import "swiper/css/pagination";
import "swiper/css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={ window.innerWidth > 1024 ? 3 : 1}
        spaceBetween={30}
        grabCursor={true}
        slidesPerGroup={window.innerWidth > 1024 ? 3 : 1}
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
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img1} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img2} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img3} />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img4} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img5} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img6} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img7} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img8} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="top">
            <ImQuotesRight className="icon"/>
          </div>
          <div className="middle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus, maiores cupiditate et repudiandae iure esse reiciendis numquam deserunt </p>
          </div>
          <div className="bottom">
            <img src={img9} alt="customer image" />
            <h3>Customer name</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
