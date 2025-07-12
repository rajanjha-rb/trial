"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/1.webp",
    headline: "Explore the Hidden Gems of Nepal",
    subheadline: "From Himalayan peaks to ancient temples — discover all.",
    alt: "Beautiful Nepal landscape with mountains and temples",
  },
  {
    img: "/2.webp",
    headline: "Journey Through Culture and Nature",
    subheadline: "Nepal offers unforgettable experiences at every turn.",
    alt: "Nepal cultural and natural scenery",
  },
  {
    img: "/3.webp",
    headline: "Timeless Nepal Awaits Your Next Escape",
    subheadline: "Nepal welcomes every soul seeking adventure and peace",
    alt: "Serene Nepal destination for adventure and peace",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen xl:max-h-[90vh] bg-[#F8F9FA] overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={slides[currentIndex].img}
            alt={slides[currentIndex].alt}
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            quality={100}
            className="object-cover"
            style={{
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Headline Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-700 bg-white/95 border-2 border-yellow-300 rounded-lg shadow-lg px-4 py-3 mx-auto max-w-xs sm:max-w-[90%] md:max-w-[85%]">
            {slides[currentIndex].headline}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 bg-yellow-100 rounded-lg shadow px-4 py-2 mx-auto max-w-xs sm:max-w-[85%] md:max-w-[80%]">
            {slides[currentIndex].subheadline}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 sm:h-1.5 transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 sm:w-8 bg-yellow-400"
                  : "w-1.5 sm:w-2 bg-white/60 hover:bg-white/80"
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
