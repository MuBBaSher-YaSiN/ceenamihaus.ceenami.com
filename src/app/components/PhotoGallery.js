"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const images = Array.from({ length: 10 }, (_, i) => `/assets/img-${i + 1}.webp`);

export default function SpotlightGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const prevImage = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    swiperRef.current?.slideToLoop(newIndex);
  };

  const nextImage = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    swiperRef.current?.slideToLoop(newIndex);
  };

  return (
    <section className="section bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl section-heading text-white tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Explore the Space
        </motion.h2>

        <div className="relative">
          {/* Manual Nav Buttons */}
          <div
            onClick={prevImage}
            className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 text-white text-4xl px-4 cursor-pointer select-none"
          >
            &#10094;
          </div>
          <div
            onClick={nextImage}
            className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 text-white text-4xl px-4 cursor-pointer select-none"
          >
            &#10095;
          </div>

          <Swiper
            modules={[Autoplay]}
            loop
            centeredSlides
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            spaceBetween={10}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.7 },
              1280: { slidesPerView: 3.2 },
            }}
          >
            {images.map((img, index) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide key={index} className="pb-10">
                  <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
                    <motion.div
                      onClick={() => openModal(index)}
                      className={`relative mx-auto h-96 transition-all duration-500 cursor-pointer shadow-xl rounded-2xl overflow-hidden ${
                        isActive
                          ? "w-[92%] scale-125 z-10"
                          : "w-[80%] opacity-70"
                      }`}
                      whileHover={{ scale: isActive ? 1.08 : 1.02 }}
                    >
                      <Image
                        src={img}
                        alt={`Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover rounded-2xl"
                        priority
                      />
                    </motion.div>
                  </Tilt>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[80vh] mx-auto"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`Expanded Image ${currentIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain rounded-xl"
              />

              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl px-2"
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0 ? images.length - 1 : currentIndex - 1
                  )
                }
              >
                &#10094;
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl px-2"
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === images.length - 1 ? 0 : currentIndex + 1
                  )
                }
              >
                &#10095;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
