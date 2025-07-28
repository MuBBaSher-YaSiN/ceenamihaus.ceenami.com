'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const links = [
        { name: 'Ceenami Music', url: 'https://ceenami.com' },
        { name: 'CleanNami', url: 'https://cleannami-ceenami-com.vercel.app/' },
        { name: 'Shop', url: 'https://shop.ceenami.com' },
    ]

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative h-10 w-10 md:h-12 md:w-12"
                    >
                        <Image
                            src='/assets/white-logo.png'
                            fill
                            alt="Ceenami Haus Logo"
                            className="object-contain group-hover:opacity-90 transition-opacity"
                            priority
                        />
                    </motion.div>
                    <span className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                        Ceenami Haus
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                            target={link.url.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://www.vrbo.com/4483058"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-5 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-teal-700 hover:to-blue-700 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book Now
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button 
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-3 flex flex-col gap-3">
                            {links.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                                    onClick={() => setMenuOpen(false)}
                                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                    <FiChevronRight className="text-teal-400" />
                                </motion.a>
                            ))}
                            <motion.a
                                href="https://www.vrbo.com/4483058"
                                className="mt-2 py-3 px-4 text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-teal-700 hover:to-blue-700"
                                onClick={() => setMenuOpen(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                            >
                                Book Now on VRBO
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}