import React from 'react'
import { motion } from 'framer-motion'

const SocialProof = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blush-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blush-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm tracking-widest uppercase text-blush-400 mb-4 font-medium">
            Follow My Journey
          </span>
          <h2 className="section-title">
            Stay Connected
          </h2>
          <p className="section-subtitle mt-4">
            Follow my work for the latest looks, tutorials, and makeup inspiration
          </p>
        </motion.div>

        {/* Social Links - Large & Elegant */}
        <motion.div
          className="max-w-4xl mx-auto"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Instagram Card */}
            <motion.a
              href="https://instagram.com/facesbysiddhi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 rounded-3xl bg-white shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blush-50 to-gold-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Instagram Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blush-400 to-blush-500 text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                <h3 className="font-elegant text-3xl text-charcoal-700 mb-2">Instagram</h3>
                <p className="text-lg text-blush-400 font-medium mb-4">@facesbysiddhi</p>
                <p className="text-charcoal-500 leading-relaxed mb-6">
                  Daily makeup looks, client transformations, and beauty tips. Join 10K+ followers!
                </p>

                <div className="flex items-center text-charcoal-600 font-medium group-hover:text-blush-400 transition-colors duration-300">
                  <span>Follow Me</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>

            {/* YouTube Card */}
            <motion.a
              href="https://www.youtube.com/@Siddhijain9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 rounded-3xl bg-white shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-blush-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* YouTube Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>

                <h3 className="font-elegant text-3xl text-charcoal-700 mb-2">YouTube</h3>
                <p className="text-lg text-gold-500 font-medium mb-4">@Siddhijain9</p>
                <p className="text-charcoal-500 leading-relaxed mb-6">
                  Step-by-step tutorials, product reviews, and makeup secrets. Subscribe for weekly content!
                </p>

                <div className="flex items-center text-charcoal-600 font-medium group-hover:text-gold-500 transition-colors duration-300">
                  <span>Subscribe Now</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="font-elegant text-4xl md:text-5xl text-blush-400 mb-2">10K+</div>
            <div className="text-sm md:text-base text-charcoal-500 uppercase tracking-wide">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-elegant text-4xl md:text-5xl text-gold-400 mb-2">500+</div>
            <div className="text-sm md:text-base text-charcoal-500 uppercase tracking-wide">Videos</div>
          </div>
          <div className="text-center">
            <div className="font-elegant text-4xl md:text-5xl text-blush-400 mb-2">50K+</div>
            <div className="text-sm md:text-base text-charcoal-500 uppercase tracking-wide">Likes</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
