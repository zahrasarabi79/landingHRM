"use client";
import { cardsContent } from "../../public/static-data/introSection";
import Footer from "./Components/footer/Footer";
import ImageSlider from "./Components/slider/ImageSlider";
import CardContent from "./Components/card-content/CardContent";
import Navbar from "./Components/navbar/Navbar";
import React, { useRef } from "react";

export default function Home() {
  const sectionRefs = useRef<any>({
    imageSlider: React.createRef(),
    cards: cardsContent.map(() => React.createRef()),
    footer: React.createRef(),
  });

  const handleScrollToSection = (sectionKey: string, index?: number) => {
    if (index !== undefined) {
      sectionRefs.current[sectionKey][index]?.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      sectionRefs.current[sectionKey]?.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <main className="scroller">
      <Navbar handleScrollToSection={handleScrollToSection} />

      <ImageSlider ref={sectionRefs.current.imageSlider} />
      {cardsContent.map((cardContent, index) => (
        <CardContent key={index} ref={sectionRefs.current.cards[index]} cardContent={cardContent} />
      ))}

      <Footer ref={sectionRefs.current.footer} />
    </main>
  );
}
