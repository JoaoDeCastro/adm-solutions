"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoError, setVideoError] = useState<string | null>(null);

  // Replace with your actual project images
  const slides = [
    { type: "image", src: "/images/hero/hero-1.png", alt: "Bathroom renovation by ADM Solutions" },
    { type: "image", src: "/images/hero/hero-2.png", alt: "Shower remodel in Fairfield County" },
    { type: "image", src: "/images/hero/hero-3.png", alt: "Modern tile and glass shower" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video error:", e);
    setVideoError("Error loading video");
  };

  return (
    <section className="relative h-[90vh] md:h-screen" style={{ background: "transparent" }}>
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            aria-hidden={currentSlide !== index}
          >
            {slide.type === "video" ? (
              <>
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onError={handleVideoError}
                >
                  {/* @ts-ignore */}
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                    {videoError}
                  </div>
                )}
              </>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => console.error("Image error:", e)}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay (matches Promise: from-[#4b5363] via-[#222] to-[#1b1b1b]) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4b5363]/55 via-[#222]/60 to-[#1b1b1b]/60 pointer-events-none" />

      {/* Soft bottom vignette for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

			{/* Content */}
			<div className="relative h-full flex items-center justify-center text-center z-10">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
					>
						No Matter the Size of Your Dream,
						<br />
						{`We'll Help You Build It`}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg"
					>
						Luxury bathroom renovations with 30+ years of expertise
					</motion.p>
					<motion.a
						href="https://docs.google.com/forms/d/e/1FAIpQLScG7cTvwlJwmkZQnj_DKMHw4bQ7nugY8Ngd-WDpck65QA3wHw/viewform?usp=header"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						animate={{
							scale: [1, 1.05, 1],
							boxShadow: [
								"0 0 0 0 rgba(0, 0, 0, 0)",
								"0 0 0 10px rgba(0, 0, 0, 0.1)",
								"0 0 0 0 rgba(0, 0, 0, 0)",
							],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
					>
						Request a Free Quote
					</motion.a>
				</div>
			</div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 shadow ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
