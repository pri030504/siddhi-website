import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory-100 via-nude-50 to-blush-50 pt-16 sm:pt-20">
      {/* Decorative floating shapes - subtle animation */}
      <motion.div
        className="absolute top-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blush-200/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gold-200/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block text-xs sm:text-sm md:text-base tracking-widest uppercase text-blush-400 mb-3 sm:mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional Makeup Artist
            </motion.span>

            <motion.h1
              className="font-elegant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-charcoal-700 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Faces by <span className="text-gradient">Siddhi</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-400 mb-8 sm:mb-10 leading-relaxed font-light px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Enhancing beauty, one face at a time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
                Book Now
              </a>
              <a href="#portfolio" className="btn-outline w-full sm:w-auto text-center">
                View Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Creative Image Frame */}
          <motion.div
            className="flex-1 relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main circular frame with decorative border */}
            <div className="relative w-full">
              {/* Decorative gold ring */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-full h-full border-2 sm:border-4 border-gold-400/30 rounded-full"></div>
              
              {/* Main image container */}
              <div className="relative aspect-square rounded-full overflow-hidden shadow-elegant bg-gradient-to-br from-nude-200 to-blush-100">
                <img 
                  src="/main.jpeg" 
                  alt="Siddhi - Professional Makeup Artist" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small accent circle */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-blush-300 to-blush-400 shadow-soft flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white font-elegant text-base sm:text-lg">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase text-charcoal-400">Scroll</span>
        <motion.div
          className="w-0.5 h-12 bg-gradient-to-b from-charcoal-400 to-transparent"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
