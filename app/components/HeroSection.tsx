"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/siam.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="font-playfair text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide">
          <span className="block text-shadow-sm">WELCOME TO</span>
          <span className="block text-yellow-300 font-black text-shadow-sm">
            Siam Jumbo
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="font-inter bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Products
          </button>
          <button className="font-inter border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute  left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
}
