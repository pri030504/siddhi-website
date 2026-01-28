import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a link
  const closeMenu = () => setMobileMenuOpen(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ivory-50/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-5">
            {/* Logo */}
            <a href="#home" className="flex items-center z-50" onClick={closeMenu}>
              <span className="font-elegant text-2xl md:text-3xl text-charcoal-700">
                Faces by Siddhi
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#portfolio" className="text-charcoal-500 hover:text-blush-400 transition-colors duration-300">
                Portfolio
              </a>
              <a href="#videos" className="text-charcoal-500 hover:text-blush-400 transition-colors duration-300">
                Videos
              </a>
              <a href="#services" className="text-charcoal-500 hover:text-blush-400 transition-colors duration-300">
                Services
              </a>
              <a href="#about" className="text-charcoal-500 hover:text-blush-400 transition-colors duration-300">
                About
              </a>
              <a href="#testimonials" className="text-charcoal-500 hover:text-blush-400 transition-colors duration-300">
                Testimonials
              </a>
              <a href="#contact" className="btn-primary text-xs">
                Book Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-charcoal-700/95 backdrop-blur-md"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.nav
              className="relative h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-8 text-center">
                <a 
                  href="#home" 
                  className="block font-elegant text-3xl text-ivory-50 hover:text-blush-300 transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a 
                  href="#portfolio" 
                  className="block font-elegant text-3xl text-ivory-50 hover:text-blush-300 transition-colors"
                  onClick={closeMenu}
                >
                  Portfolio
                </a>
                <a 
                  href="#videos" 
                  className="block font-elegant text-3xl text-ivory-50 hover:text-blush-300 transition-colors"
                  onClick={closeMenu}
                >
                  Videos
                </a>
                <a 
                  href="#services" 
                  className="block font-elegant text-3xl text-ivory-50 hover:text-blush-300 transition-colors"
                  onClick={closeMenu}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="block font-elegant text-3xl text-ivory-50 hover:text-blush-300 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a 
                  href="#testimonials" 
                  className="block font-elegant text-3xl text-ivory-50 hover:text-blush-300 transition-colors"
                  onClick={closeMenu}
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  className="inline-block mt-8 px-10 py-4 bg-blush-400 text-white rounded-full font-medium text-lg hover:bg-blush-500 transition-colors"
                  onClick={closeMenu}
                >
                  Book Now
                </a>
              </div>

              {/* Social Links in Mobile Menu */}
              <div className="absolute bottom-12 flex gap-6">
                <a
                  href="https://instagram.com/facesbysiddhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-ivory-100/10 hover:bg-blush-400 flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6 text-ivory-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Siddhijain9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-ivory-100/10 hover:bg-gold-400 flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6 text-ivory-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
