import React from 'react'
import { motion } from 'framer-motion'

const Expertise = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section id="expertise" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-nude-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-nude-200 to-blush-100">
              {/* Placeholder SVG */}
              <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="500" fill="#F5F1ED"/>
                {/* Person writing/working */}
                <rect x="60" y="180" width="280" height="200" rx="10" fill="#E8E8E8"/>
                <circle cx="200" cy="140" r="40" fill="#D9CCC0"/>
                {/* Coffee cup */}
                <circle cx="320" cy="250" r="25" fill="#6B4423" opacity="0.6"/>
                {/* Makeup items */}
                <circle cx="100" cy="400" r="20" fill="#F5BDD0" opacity="0.6"/>
                <rect x="250" y="390" width="60" height="8" rx="4" fill="#D4AF37" opacity="0.7"/>
                <circle cx="180" cy="420" r="15" fill="#FFE599" opacity="0.5"/>
              </svg>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="order-1 lg:order-2"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 sm:px-6 py-2 rounded-full border border-charcoal-300 text-xs sm:text-sm tracking-widest uppercase text-charcoal-600 mb-4 sm:mb-6">
              Skills & Services
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 leading-tight">
              <span className="font-light text-charcoal-400">What we bring to </span>
              <span className="font-elegant italic text-charcoal-700">the table...</span>
            </h2>

            {/* Makeup Artistry */}
            <div className="mb-8 sm:mb-10">
              <h3 className="font-elegant italic text-2xl sm:text-3xl md:text-4xl text-charcoal-700 mb-4 sm:mb-6">
                Makeup Artistry
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Bridal & Wedding Makeup</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Party & Occasion Glam</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Editorial & Photoshoot Ready</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Airbrush & HD Techniques</p>
                </div>
              </div>
            </div>

            {/* Professional Touch */}
            <div className="mb-8 sm:mb-10">
              <h3 className="font-elegant italic text-2xl sm:text-3xl md:text-4xl text-charcoal-700 mb-4 sm:mb-6">
                Professional Touch
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Premium Products (MAC, Huda Beauty, Charlotte Tilbury)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Hygienic & Sanitized Tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Personalized Consultations</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">On-Location Services Available</p>
                </div>
              </div>
            </div>

            {/* Trust & Expertise */}
            <div>
              <h3 className="font-elegant italic text-2xl sm:text-3xl md:text-4xl text-charcoal-700 mb-4 sm:mb-6">
                Trust & Expertise
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">5+ Years Experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">200+ Happy Clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-400 mt-2"></span>
                  <p className="text-base sm:text-lg text-charcoal-600">Certified Makeup Professional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
