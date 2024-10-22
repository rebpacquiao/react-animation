import React, { useRef, useState } from "react";
import Slider from "react-slick";
import slidesData from "../data/slides.json";

const Presentation = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: false,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };

  const handleNextSlide = () => {
    console.log("Moving to next slide");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <div className="logo-section">
        <div className="main-logo">Logo</div>
        {currentSlide === 1 && (
          <div>
            <a href="#">Discover More</a>
          </div>
        )}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide relative">
            {slide.type === "video" && (
              <>
                <video
                  src={slide.content.video}
                  autoPlay
                  loop
                  muted
                  className="w-full object-cover"
                />
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-[#000] bg-opacity-50 transition-opacity duration-500">
                  <h3 className="text-white text-3xl md:text-4xl font-bold">
                    {slide.content.overlay}
                  </h3>
                  <p className="text-white text-lg md:text-xl mt-2">
                    {slide.content.description}
                  </p>
                </div>
                <div className="arrow-down">
                  <button onClick={handleNextSlide}>
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h48v48H0z" fill="none" />
                      <g id="Shopicon">
                        <polygon points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586" />
                      </g>
                    </svg>
                  </button>
                </div>
              </>
            )}
            {slide.type === "image" && (
              <>
                <img
                  src={slide.content.image}
                  alt={slide.content.overlay}
                  className="w-full h-full object-cover"
                />
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500">
                  <h3 className="text-white text-3xl md:text-4xl font-bold">
                    {slide.content.overlay}
                  </h3>
                  <p className="text-white text-lg md:text-xl mt-2">
                    {slide.content.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Presentation;
