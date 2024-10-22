import React, { useRef, useState } from "react";
import Slider from "react-slick";
import bannerSlide from "../data/slides.json";
import slideData from "../data/slideData.json";

const Presentation = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: false,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };

  const baseSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const slideDataSettings = {
    ...baseSettings,
    initialSlide: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          ...baseSettings,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <div className="logo-section">
        <div className="main-logo">Logo</div>
        {currentSlide === 1 && (
          <div>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
            >
              Discover More
            </a>
          </div>
        )}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {bannerSlide.map((slide) => (
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
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition duration-500">
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
                <div className="star"></div>
                {[...Array(15)].map((_, index) => (
                  <div key={index} className={`meteor-${index + 1}`}></div>
                ))}
                <div className="earth-slide">
                  <div className="planet-container">
                    <div className="night"></div>
                    <div className="day"></div>
                    <div className="clouds"></div>
                    <div className="inner-shadow"></div>
                  </div>
                </div>
              </>
            )}
            {currentSlide === 1 && (
              <div className="nested-slider mt-5">
                <h1 className="slide-title">Donec Nec Justo</h1>
                <Slider {...slideDataSettings}>
                  {slideData.map((dataItem) => (
                    <div key={dataItem.id} className="slide-data-item">
                      <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                        <img
                          className="w-full"
                          src="./card-top.jpg"
                          alt="Sunset in the mountains"
                          onLoad={() => console.log("Image loaded")}
                          onError={() => console.error("Image failed to load")}
                        />
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">
                            {dataItem.title}
                          </div>
                          <p className="text-gray-700 text-base">
                            {dataItem.content}
                          </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                          </span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                          </span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Presentation;
