"use client";

import slideImageSource from "@/mock/home-hero-slide-image-source";
import ISlideImageSource from "@/types/home-hero-slide-image-source";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const HomeHeroSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        speed={1500}
        loop={true}
        effect={"fade"}
        allowTouchMove={false}
      >
        {slideImageSource.map(({ id, imgSrc }: ISlideImageSource) => (
          <SwiperSlide key={id}>
            <div className="h-screen w-full relative">
              <div className="absolute inset-0 bg-[radial-gradient(57.71%_48.15%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)]"></div>
              <img
                src={imgSrc}
                alt={`Slide ${id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSlider;
