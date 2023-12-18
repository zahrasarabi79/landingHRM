"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/app/Components/slider/style.css";
import { FreeMode, EffectFade, Thumbs, Keyboard } from "swiper/modules";
import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import ThumbSlide from "./ThumbSlide";
import LandingNavbar from "./LandingNavbar";
import LandingIntroduction from "@/app/landing/LandingIntroduction";
import Icon from "@/app/Components/Icon/Icon";
export interface ISliderImages {
  url: string;
  name: string;
  icon: string;
}
export const sliderImages: ISliderImages[] = [
  {
    url: "/image/SliderImage/customer-relation-management.jpg",
    name: "مدیریت ارتباط با مشتری",
    icon: "../image/thumb-slider-icon/UserSpeak.svg",
  },
  {
    url: "/image/SliderImage/Financial-management-and-accounting.jpg",
    name: "مدیریت مالی و حسابداری",
    icon: "../image/thumb-slider-icon/WalletMoney.svg",
  },
  {
    url: "/image/SliderImage/Human-resources-management.jpg",
    name: "مدیریت منابع انسانی",
    icon: "../image/thumb-slider-icon/UsersGroupTwoRounded.svg",
  },
  { url: "/image/SliderImage/Poyashop.jpg", name: "پویاشاپ", icon: "../image/thumb-slider-icon/pouyashop.svg" },
  {
    url: "/image/SliderImage/Supply-Chain-Management.jpg",
    name: "مدیریت زنجیره تامین",
    icon: "../image/thumb-slider-icon/PresentationGraph.svg",
  },
  {
    url: "/image/SliderImage/customer-relation-management.jpg",
    name: "مدیریت ارتباط با مشتری",
    icon: "../image/thumb-slider-icon/UserSpeak.svg",
  },
];
export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index: number) => {
    if (thumbsSwiper) {
      if (sliderImages.length - 1 === index) {
        thumbsSwiper.slideTo(0);
        setActiveIndex(0);
      } else {
        thumbsSwiper.slideTo(index);
        setActiveIndex(index);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${sliderImages[activeIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container maxWidth={false}>
          <Grid container>
            <Grid item xs={12}>
              <LandingNavbar />
            </Grid>
            <Grid item xs={6}>
              form
            </Grid>
            {/* <LandingIntroduction /> */}
          </Grid>
          <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: "70px" }}>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={"auto"}
              rewind={true}
              keyboard={{
                enabled: true,
              }}
              watchSlidesProgress={true}
              modules={[Thumbs, Keyboard]}
              className="mySwiper"
            >
              {sliderImages.map((slide: ISliderImages, index: number) => (
                <SwiperSlide key={index} style={{ height: "100vh" }} onClick={() => handleSlideClick(index)}>
                  <ThumbSlide slide={slide} index={index} isActive={index === activeIndex} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Divider orientation="vertical" flexItem sx={{ mx: "20px" }} />

            <Box
              className="thumb-box"
              sx={{
                width: "30px",
                height: "30px",
                bgcolor: "rgba(253, 253, 253, 0.20)",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "rgba(253, 253, 253, 0.10)",
                  border: "2px solid #AEE9FF",
                  boxShadow: " 0px 5px 35px 0px rgba(174, 233, 255, 0.25);",
                  ".Arrow-icon": { backgroundColor: "#AEE9FF" },
                },
                
              }}
            >
              <Icon className="Arrow-icon" pathName="../image/thumb-slider-icon/AltArrowRight.svg" size="20px" color="white" />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
