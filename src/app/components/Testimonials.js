'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/autoplay'

const reviews = [
    {
        name: 'Jordan',
        rating: 5,
        text: 'Absolutely loved staying here. Clean, stylish, and perfect location. Would definitely come back.',
    },
    {
        name: 'Maria',
        rating: 5,
        text: 'One of the best Airbnb experiences I’ve had. Host was friendly and the space was beautiful.',
    },
    {
        name: 'Devon',
        rating: 4,
        text: 'Modern vibe with comfort. Loved the interior and peaceful atmosphere. Great stay overall.',
    },
    {
        name: 'Kris',
        rating: 5,
        text: 'A hidden gem. Everything was exactly as described. Super cozy and welcoming.',
    },
]

export default function Testimonials() {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Guest Experiences
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-neutral-900 rounded-xl p-6 shadow-lg h-full flex flex-col justify-between text-left">
                                <div>
                                    <div className="flex gap-1 mb-2 text-yellow-400">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <FaStar key={i} size={18} />
                                        ))}
                                    </div>
                                    <p className="text-blue-100 mb-4 italic">{review.text}</p>
                                </div>
                                <p className="text-white font-semibold">- {review.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
