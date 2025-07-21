'use client'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-sm text-blue-100">
                    © {new Date().getFullYear()} Ceenami Haus. All rights reserved.
                </p>
                <a
                    href="https://www.airbnb.com/h/ceenamihaus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-500 hover:text-red-400 transition-colors duration-200"
                >
                    View on Airbnb →
                </a>
            </div>
        </footer>
    )
}
