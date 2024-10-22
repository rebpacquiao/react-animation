import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Slide = ({ slide, onNext }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    return () => {
      gsap.to(overlayRef.current, { opacity: 0, duration: 1 });
    };
  }, [slide]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {slide.type === "video" ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={`/${slide.content.video}`} type="video/mp4" />
        </video>
      ) : (
        <img
          src={slide.content.image}
          alt="Slide"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <div
        ref={overlayRef}
        className="absolute bg-black bg-opacity-50 text-white p-4 rounded"
      >
        <h1 className="text-3xl font-bold">{slide.content.overlay}</h1>
        <p>{slide.content.description}</p>
        {slide.type === "image" && (
          <a
            href="#"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Discover More
          </a>
        )}
      </div>
      <button className="absolute bottom-4 right-4" onClick={onNext}>
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slide;
