"use client";
import React, { forwardRef, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Navigation, Autoplay, Keyboard, FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";

export const sliderImages = [
  { url: "/image/SliderImage/customer-relation-management.jpg" },
  { url: "/image/SliderImage/Financial-management-and-accounting.jpg" },
  { url: "/image/SliderImage/Human-resources-management.jpg" },
  { url: "/image/SliderImage/Poyashop.jpg" },
  { url: "/image/SliderImage/Supply-Chain-Management.jpg" },
];
const ImageSlider = forwardRef<SwiperRef>((props, ref) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null>(null);

  return (
    <>
      <Swiper
        ref={ref}
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Autoplay, Keyboard]}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} style={{ position: "relative", height: "100vh" }}>
            <Image
              src={image.url}
              alt={`Slide ${index + 1}`}
              fill
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={() => setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} style={{ position: "relative", height: "100vh" }}>
            <Image
              src={image.url}
              alt={`Slide ${index + 1}`}
              fill
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
ImageSlider.displayName = "ImageSlider";
export default ImageSlider;
