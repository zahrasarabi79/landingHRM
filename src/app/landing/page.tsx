"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/app/Components/slider/style.css";
import { FreeMode, EffectFade, Thumbs, Keyboard } from "swiper/modules";
import Image from "next/image";
import { sliderImages } from "@/app/Components/slider/ImageSlider";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  const handleThumbsSlideChange = () => {
    // Synchronize mainSwiper with thumbsSwiper
    if (mainSwiper && thumbsSwiper) {
      const activeIndex = thumbsSwiper.activeIndex;
      mainSwiper.slideTo(activeIndex);
    }
  };
  const handleSlideClick = (index: number) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        onSwiper={setMainSwiper}
        loop={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}//(resolve the overlapping of the slides)
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFade]}
        className="mySwiper2"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} style={{ position: "relative", height: "100vh" }}>
            <img src={image.url} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        onSlideChange={handleThumbsSlideChange}
        spaceBetween={10}
        slidesPerView={"auto"}
        rewind={true}
        freeMode={false}
        keyboard={{
          enabled: true,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Keyboard]}
        className="mySwiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} style={{ height: "100vh" }} onClick={() => handleSlideClick(index)}>
            <Image src={image.url} alt={`Slide ${index + 1}`} fill style={{ width: "100%", height: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
