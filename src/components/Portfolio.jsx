import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../css/Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
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
        <SwiperSlide className="swiperSlide map">
          <a href="https://map-project-brown.vercel.app/">
            {/* <p>Map Project</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide todo">
          <a href="https://todoapp-plum-six.vercel.app/">
            {/* <p>Todo App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide imageSearch">
          <a href="https://imagesearch-woad.vercel.app/">
            {/* <p>Image_Search App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide vegist">
          <a href="https://vegistfinalfront.vercel.app/">
            {/* <p>Vegist Website</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide quiz">
          <a href="https://quizapp-seven-dun.vercel.app/">
            {/* <p>Quiz App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide weather">
          <a href=" https://weatherapp-ebon-one.vercel.app/">
            {/* <p>Weather_Forecast App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide calculator">
          <a href="https://calcapp-olive.vercel.app/">
            {/* <p>Calculator App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide searchGitHubProfile">
          <a href="https://searchgithubprofile-eta.vercel.app/">
            {/* <p>Search_GitHub_Profile App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide tictactoe">
          <a href="https://tic-tac-toe-nine-flax.vercel.app/">
            {/* <p>Tic_Tac_Toe App</p> */}
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide taskManager">
          <a href="https://github.com/HuseynliTogrul/task_manager_project.git">
            {/* <p>Task Manager Project</p> */}
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

