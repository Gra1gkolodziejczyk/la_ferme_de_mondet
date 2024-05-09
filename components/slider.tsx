"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";

import Slide from "./slide";

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
      <div className="flex justify-center items-center content-center text-center self-center">
        <h2 className="text-6xl mt-32">Volailles</h2>
      </div>
      <div className="ml-12 mr-10 flex items-center content-center self-center text-center relative">
        <FiChevronLeft
          onClick={prevSlide}
          className="text-white text-7xl cursor-pointer"
        />
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <Slide
              key={index}
              image={slide.image}
              description={slide.description}
              isActive={index === currentSlide}
            />
          </div>
        ))}
        <FiChevronRight
          onClick={nextSlide}
          className="text-white text-7xl cursor-pointer"
        />
      </div>
    </>
  );
};

export default Slider;
