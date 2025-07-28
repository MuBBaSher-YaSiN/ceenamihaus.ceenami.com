'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background with multiple fallbacks */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src="/assets/img-1.jpg"
          alt="Ceenami Haus Cover"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
      </div>
      
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-teal-300"
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

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        
        
        {/* Headline with refined accent color */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Ceenami Haus</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl font-light text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Experience <span className="font-medium text-teal-300">stylish comfort</span> in our modern, 
          <br className="hidden sm:block" />cozy vacation rental.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://www.vrbo.com/4483058"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
          >
            <span className="relative z-10">Book Now on VRBO</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-teal-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span>Rated 4.9/5 on VRBO</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Edgewater, Florida</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}