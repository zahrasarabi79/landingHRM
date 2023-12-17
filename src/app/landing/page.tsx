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
import { Box, Stack } from "@mui/material";
import ThumbSlide from "./ThumbSlide";
import LandingNavbar from "./LandingNavbar";
export interface ISliderImages {
  url: string;
  name: string;
  icon: string;
}
export const sliderImages: ISliderImages[] = [
  { url: "/image/SliderImage/customer-relation-management.jpg", name: "مدیریت ارتباط با مشتری", icon: "../image/thumb-slider-icon/UserSpeak.svg" },
  { url: "/image/SliderImage/Financial-management-and-accounting.jpg", name: "مدیریت مالی و حسابداری", icon: "../image/thumb-slider-icon/WalletMoney.svg" },
  { url: "/image/SliderImage/Human-resources-management.jpg", name: "مدیریت منابع انسانی", icon: "../image/thumb-slider-icon/UsersGroupTwoRounded.svg" },
  { url: "/image/SliderImage/Poyashop.jpg", name: "پویاشاپ", icon: "../image/thumb-slider-icon/pouyashop.svg" },
  { url: "/image/SliderImage/Supply-Chain-Management.jpg", name: "مدیریت زنجیره تامین", icon: "../image/thumb-slider-icon/PresentationGraph.svg" },
  { url: "/image/SliderImage/customer-relation-management.jpg", name: "مدیریت ارتباط با مشتری", icon: "../image/thumb-slider-icon/UserSpeak.svg" },
];
export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  const handleThumbsSlideChange = () => {
    // Synchronize mainSwiper with thumbsSwiper
    if (mainSwiper && thumbsSwiper) {
      const activeIndex = thumbsSwiper.activeIndex;
      console.log(activeIndex);
      mainSwiper.slideTo(activeIndex);
    }
  };

  const handleSlideClick = (index: number) => {
    console.log(index);
    if (thumbsSwiper) {
      if (index === sliderImages.length - 1) {
        thumbsSwiper.slideTo(0);
      } else {
        thumbsSwiper.slideTo(index);
      }
    }
  };

  return (
    <>
      <Swiper
        onSwiper={setMainSwiper}
        loop={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }} //(resolve the overlapping of the slides)
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFade]}
        className="mySwiper2"
      >
        {sliderImages.map((image: ISliderImages, index: number) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Stack>
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
          {sliderImages.map((slide: ISliderImages, index: number) => (
            <SwiperSlide key={index} style={{ height: "100vh" }} onClick={() => handleSlideClick(index)}>
              <ThumbSlide slide={slide} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <LandingNavbar/>
    </>
  );
}
