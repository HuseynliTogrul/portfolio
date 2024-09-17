import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../css/Portfolio.css";
import todo from "../images/todo.png"
import map from "../images/map.png"
import imageSearch from "../images/imageSearch.png"
// import vegist from "../images/project1.png"

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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
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
          <a href="https://github.com/HuseynliTogrul/mapProject.git">
            {/* <img className="slideImg"
              src={todo}
              // src={vegist}
              alt="Nature 1"
            /> */}
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="Nature 5"
            />
          </a>
          {/* </a> */}
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/HuseynliTogrul/todo-app.git">
            {/* <img
              src={map}
              alt="Nature 2"
            /> */}
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="Nature 5"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/HuseynliTogrul/ImageSearch.git">
            {/* <img
              src={imageSearch}
              alt="Nature 3"
            /> */}
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="Nature 5"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Nature 5"
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

