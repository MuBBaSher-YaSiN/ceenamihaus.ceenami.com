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
//                     A stylish, cozy, and modern Airbnb space hosted by Ceenami.
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
import airbnbCover from '../assets/img-1.jpg'
import logo from '../assets/white-logo.png'

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh]">
            <Image
                src={airbnbCover}
                alt="Ceenami Haus Cover"
                fill
                priority
                className="object-cover brightness-[0.6]"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

                {/* Logo */}
                <div className="mb-4">
                    <Image
                        src={logo}
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
                    A stylish, cozy, and modern Airbnb space hosted by Ceenami.
                </p>
                <a
                    href="https://www.airbnb.com/h/ceenamihaus"
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
