'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-5.jpg'
import img6 from '../assets/img-6.jpg'
import img7 from '../assets/img-7.jpg'
import img8 from '../assets/img-8.jpg'
import img9 from '../assets/img-9.jpg'
import img10 from '../assets/img-10.jpg'
import img11 from '../assets/img-11.jpg'
import img12 from '../assets/img-12.jpg'
import img13 from '../assets/img-13.jpg'
import img14 from '../assets/img-14.jpg'
import img15 from '../assets/img-15.jpg'
import img16 from '../assets/img-16.jpg'
import img17 from '../assets/img-17.jpg'
import img18 from '../assets/img-18.jpg'
import img19 from '../assets/img-19.jpg'
import img20 from '../assets/img-20.jpg'
import img21 from '../assets/img-21.jpg'
import img22 from '../assets/img-22.jpg'
import img23 from '../assets/img-23.jpg'

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19,
    img20, img21, img22, img23
]

export default function PhotoGallery() {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl mb-10 font-bold">
                    Explore the Space
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={img}
                                    alt={`Airbnb Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
