import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../css/Portfolio.css";
import todo from "../images/todo.png"
import map from "../images/map.png"
import imageSearch from "../images/imageSearch.png"
import startStopTime from "../images/startStopTime.png"
import vegist from "../images/vegist.png"
import quizApp from "../images/quizApp.png"

export default function Portfolio() {
  return (
    <>
      <Swiper
        loop={true}
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
        <SwiperSlide className="swiperSlide">
          <a href="https://map-project-brown.vercel.app/">
            <p>Map</p>
            {/* <img className="slideImg"
              src={map}
              alt="map"
            /> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <a href="https://todoapp-plum-six.vercel.app/">
            <p>Todo App</p>
            {/* <img className="slideImg"
              src={todo}
              alt="todo"
            /> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <a href="https://imagesearch-woad.vercel.app/">
            <p>Image Search</p>
            {/* <img className="slideImg"
              src={imageSearch}
              alt="imageSearch"
            /> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <a href="https://start-stop-time.vercel.app/">
            <p>Start_Stop Time</p>
            {/* <img className="slideImg"
              src={startStopTime}
              alt="startStopTime"
            /> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <a href="https://vegistfinalfront.vercel.app/">
            <p>Vegist Website</p>
            {/* <img className="slideImg"
              src={vegist}
              alt="vegist"
            /> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <a href="https://quizapp-seven-dun.vercel.app/">
            <p>Quiz App</p>
            {/* <img className="quizApp"
              src={quizApp}
              alt="quizApp"
            /> */}
          </a>
        </SwiperSlide>
        <div className="sliderIcon">
          <FaChevronLeft className="swiperIcon swiper-button-prev" />
          <FaChevronRight className="swiperIcon swiper-button-next" />
        </div>
      </Swiper >
    </>
  );
}

