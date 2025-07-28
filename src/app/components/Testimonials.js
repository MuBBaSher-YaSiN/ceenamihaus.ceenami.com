"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Jordan",
    rating: 5,
    text: "Absolutely loved staying here. Clean, stylish, and perfect location. Would definitely come back.",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Maria",
    rating: 5,
    text: "Such a beautiful and comfortable space. You can tell a lot of thought went into every corner..",
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "Kris",
    rating: 5,
    text: "A hidden gem. Everything was exactly as described. Super cozy and welcoming.",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Devon",
    rating: 5,
    text: "Modern vibe with comfort. Loved the interior and peaceful atmosphere. Great stay overall.",
    avatar: "/avatars/avatar-3.png",
  },
  {
    name: "Maria",
    rating: 5,
    text: "Such a beautiful and comfortable space. You can tell a lot of thought went into every corner..",
    avatar: "/avatars/avatar-2.png",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 md:py-28 px-4 overflow-hidden">
      {/* Background elements - both floating circles and stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [1, 1.3, 1.6],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-yellow-400"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.1, 0],
              rotate: Math.random() > 0.5 ? [0, 120] : [0, -120],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          >
            <FaStar size={Math.random() > 0.5 ? 10 : 14} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-3 md:mb-4">
            Guest Experiences
          </h2>
          <p className="text-sm md:text-lg text-blue-200 max-w-2xl mx-auto">
            Hear what our guests say about their unforgettable stays
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectCreative]}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-80%", 0, 0], // Changed from opacity to slide in from left
                opacity: 0.6,
              },
              next: {
                translate: ["80%", 0, 0],
                opacity: 0.6,
              },
            }}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.8 }, // Adjusted for better balance
              1024: { slidesPerView: 2.5 },
            }}
            centeredSlides
            className="!overflow-visible"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.6,
                      y: isActive ? 0 : 10,
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <div
                      className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 h-full shadow-xl md:shadow-2xl border border-gray-700/50 transition-all duration-300 ${
                        isActive ? "scale-100" : "scale-90"
                      }`}
                    >
                      {/* Decorative left element for active card */}
                      {isActive && (
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                          <div className="h-16 w-16 rounded-full bg-blue-500/20 blur-md"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-blue-400"
                            >
                              <path
                                d="M10 17l5-5-5-5v10z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                          <div className="absolute inset-1 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={56}
                              height={56}
                              className="rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-white">
                            {review.name}
                          </h4>
                          <div className="flex gap-1 mt-1">
                            {Array.from({ length: review.rating }).map(
                              (_, i) => (
                                <FaStar
                                  key={i}
                                  className="text-yellow-400"
                                  size={14}
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                        {review.text}
                      </p>
                      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-blue-500/20"
                        >
                          <path
                            d="M7 17h10v3H7v-3zm5-12L7 6v2h10V6l-5-1z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fixed Navigation Buttons */}
          {isMounted && (
            <div className="flex justify-center gap-4 mt-8 md:mt-12">
              <button
                onClick={handlePrev}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all hover:scale-110 hover:text-blue-400 active:scale-95"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all hover:scale-110 hover:text-blue-400 active:scale-95"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
