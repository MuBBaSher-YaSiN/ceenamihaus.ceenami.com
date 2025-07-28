'use client'

import Image from 'next/image'

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
    <div className="mb-4">
      <Image
        src='/assets/white-logo.png'
        alt="Ceenami Haus Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
    <h1 className="section-heading">
      Welcome to Ceenami Haus
    </h1>
    <p className="text-xl mb-6 max-w-xl">
      Experience stylish comfort in this modern, cozy vacation rental...
    </p>
    <a
      href="https://www.vrbo.com/..."
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      View on VRBO
    </a>
  </div>
</section>
    )
}
