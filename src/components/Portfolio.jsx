import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../css/Portfolio.css";
import vegist from "../images/project1.png"

export default function Portfolio() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={3}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}


        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false
        // }}
        pagination={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <a href="https://github.com/HuseynliTogrul/Vegist-Final-Front.git"> */}
          <img className="slideImg"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            // src={vegist}
            alt="Nature 1"
          />
          {/* </a> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Nature 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Nature 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Nature 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Nature 5"
          />
        </SwiperSlide>
        <div className="sliderIcon">
          <FaChevronLeft className="swiperIcon swiper-button-prev" />
          <FaChevronRight className="swiperIcon swiper-button-next" />
        </div>
      </Swiper >
    </>
  );
}

