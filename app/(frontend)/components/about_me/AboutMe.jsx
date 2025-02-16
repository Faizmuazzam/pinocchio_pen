"use client"


import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

/**
 * 
 */
const AboutMe = () => {
  const swiper = useSwiper();
  return (
    <div className="min-h-screen">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>

      </Swiper>
    </div>
  );
}


export default AboutMe;