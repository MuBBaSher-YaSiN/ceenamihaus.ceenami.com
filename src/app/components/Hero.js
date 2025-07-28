// 'use client'

// import Image from 'next/image'
// import airbnbCover from '../assets/img-1.jpg'

// export default function Hero() {
//     return (
//         <section className="relative w-full h-[90vh]">
//             <Image
//                 src={airbnbCover}
//                 alt="Ceenami Haus Cover"
//                 fill
//                 priority
//                 className="object-cover brightness-[0.6]"
//             />
//             <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white px-4">
//                 <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Ceenami Haus</h1>
//                 <p className="text-lg md:text-xl mb-6 max-w-xl">
//                     Experience stylish comfort in this modern, cozy vacation rental, thoughtfully designed by Ceenami.
//                 </p>
//                 <a
//                     href="https://www.airbnb.com/h/ceenamihaus"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
//                 >
//                     View on Airbnb
//                 </a>
//             </div>
//         </section>
//     )
// }

'use client'

import Image from 'next/image'
// import airbnbCover from 'assets/img-1.jpg'
// import logo from 'assets/white-logo.png'

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh]">
            <Image
                src='/assets/img-1.jpg'
                alt="Ceenami Haus Cover"
                fill
                priority
                className="object-cover brightness-[0.6]"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

                {/* Logo */}
                <div className="mb-4">
                    <Image
                        src='/assets/white-logo.png'
                        alt="Ceenami Haus Logo"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Headline and Button */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to Ceenami Haus
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl">
                    Experience stylish comfort in this modern, cozy vacation rental, thoughtfully designed by Ceenami.
                </p>
                <a
                    href="https://www.vrbo.com/4483058?chkin=2025-08-27&chkout=2025-08-30&d1=2025-08-27&d2=2025-08-30&startDate=2025-08-27&endDate=2025-08-30&x_pwa=1&rfrr=HSR&pwa_ts=1753152033608&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=2&regionId=6049199&destination=Edgewater%2C+Florida%2C+United+States+of+America&destType=MARKET&neighborhoodId=553248635976471180&latLong=28.988876%2C-80.902275&privacyTrackingState=CAN_TRACK&productOffersId=91a1abd7-8c72-4bb3-9c68-079d480c726f&searchId=67693a34-620f-45ef-90d7-3369c7726bac&sort=RECOMMENDED&top_dp=253&top_cur=USD&userIntent=&selectedRoomType=113899418&selectedRatePlan=000446779f25e09d488a9f9d95139614fde6&expediaPropertyId=113899418"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                    View on Airbnb
                </a>
            </div>
        </section>
    )
}
