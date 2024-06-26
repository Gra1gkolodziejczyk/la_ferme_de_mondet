"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";

import Slide from "./slide";
import { Typography } from "@mui/material";

interface SliderProps {
  slides: { image: string; description: string }[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div
        id="volailles"
        className="flex justify-center items-center content-center text-center self-center"
      >
        <h2 className="text-6xl mt-32">Volailles</h2>
      </div>
      <div className="relative flex items-center justify-between mx-12">
        <FiChevronLeft
          onClick={prevSlide}
          className="absolute left-0 text-white text-7xl cursor-pointer z-10 transform -translate-y-1/2 top-1/2 md:left-4"
        />
        <div className="w-full flex justify-center items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <Slide
                key={index}
                image={slide.image}
                description={slide.description}
                isActive={index === currentSlide}
              />
            </div>
          ))}
        </div>
        <FiChevronRight
          onClick={nextSlide}
          className="absolute right-0 text-white text-7xl cursor-pointer z-10 transform -translate-y-1/2 top-1/2 md:right-4"
        />
      </div>
    </>
  );
};

export default Slider;
