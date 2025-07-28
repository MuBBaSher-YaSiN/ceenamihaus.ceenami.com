'use client'

import { motion } from 'framer-motion'
import { BsHouseDoorFill } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="relative bg-black pt-12 pb-8 px-4 overflow-hidden border-t border-gray-800">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.05, 0],
              scale: [1, 1.3, 1.6]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* VRBO Link */}
          <a 
                                href="https://www.vrbo.com/4483058?chkin=2025-08-27&chkout=2025-08-30&d1=2025-08-27&d2=2025-08-30&startDate=2025-08-27&endDate=2025-08-30&x_pwa=1&rfrr=HSR&pwa_ts=1753152033608&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=2&regionId=6049199&destination=Edgewater%2C+Florida%2C+United+States+of+America&destType=MARKET&neighborhoodId=553248635976471180&latLong=28.988876%2C-80.902275&privacyTrackingState=CAN_TRACK&productOffersId=91a1abd7-8c72-4bb3-9c68-079d480c726f&searchId=67693a34-620f-45ef-90d7-3369c7726bac&sort=RECOMMENDED&top_dp=253&top_cur=USD&userIntent=&selectedRoomType=113899418&selectedRatePlan=000446779f25e09d488a9f9d95139614fde6&expediaPropertyId=113899418"

            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors mb-6"
          >
            <BsHouseDoorFill className="text-xl transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium">Book on VRBO</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ceenami Haus. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}