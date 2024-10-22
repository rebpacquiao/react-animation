import React, { useState } from "react";
import Slide from "./Slide";
import slidesData from "../data/slides.json";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <>
      <div className="relative">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={` ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Slide slide={slide} onNext={handleNextSlide} />
          </div>
        ))}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
