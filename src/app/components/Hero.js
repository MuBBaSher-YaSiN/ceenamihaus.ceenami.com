"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh]">
      <Image
        src="/assets/img-1.jpg"
        alt="Ceenami Haus Cover"
        fill
        priority
        className="object-cover brightness-[0.5]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="mb-6 animate-float">
          <Image
            src="/assets/white-logo.png"
            alt="Ceenami Haus Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Welcome to Ceenami Haus
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
          Experience stylish comfort in this modern, cozy vacation rental,
          thoughtfully designed by Ceenami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://www.vrbo.com/4483058?chkin=2025-08-27&chkout=2025-08-30&d1=2025-08-27&d2=2025-08-30&startDate=2025-08-27&endDate=2025-08-30&x_pwa=1&rfrr=HSR&pwa_ts=1753152033608&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=2&regionId=6049199&destination=Edgewater%2C+Florida%2C+United+States+of+America&destType=MARKET&neighborhoodId=553248635976471180&latLong=28.988876%2C-80.902275&privacyTrackingState=CAN_TRACK&productOffersId=91a1abd7-8c72-4bb3-9c68-079d480c726f&searchId=67693a34-620f-45ef-90d7-3369c7726bac&sort=RECOMMENDED&top_dp=253&top_cur=USD&userIntent=&selectedRoomType=113899418&selectedRatePlan=000446779f25e09d488a9f9d95139614fde6&expediaPropertyId=113899418"
            target="_blank"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            {" "}
            Book Now on VRBO
          </a>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span>Rated 4.9/5 on VRBO</span>
        </div>
      </div>
    </section>
  );
}
