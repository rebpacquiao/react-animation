import React from "react";
import Slider from "react-slick";
import slidesData from "../data/slides.json";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
    onClick={onClick}
  >
    ➔
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
    onClick={onClick}
  >
    ←
  </div>
);

const Presentation = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <div className="logo-section">
        <div className="main-logo">Logo</div>
        <div>
          <a href="#">Discover More</a>
        </div>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide relative">
            {slide.type === "video" && (
              <>
                <video
                  src={slide.content.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-[#000] bg-opacity-50 transition-opacity duration-500">
                  <h3 className="text-white text-3xl md:text-4xl font-bold">
                    {slide.content.overlay}
                  </h3>
                  <p className="text-white text-lg md:text-xl mt-2">
                    {slide.content.description}
                  </p>
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
