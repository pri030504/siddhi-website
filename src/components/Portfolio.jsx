import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'party', name: 'Party / Glam' },
    { id: 'natural', name: 'Natural' },
    { id: 'editorial', name: 'Editorial' },
  ]

  // Portfolio items with different frame styles
  const portfolioItems = [
    { id: 1, category: 'bridal', style: 'circle', title: 'Classic Bridal', occasion: 'Wedding' },
    { id: 2, category: 'party', style: 'arch', title: 'Glamorous Evening', occasion: 'Party' },
    { id: 3, category: 'editorial', style: 'tilted', title: 'Editorial Bold', occasion: 'Photoshoot' },
    { id: 4, category: 'natural', style: 'rounded', title: 'Soft & Natural', occasion: 'Day Look' },
    { id: 5, category: 'bridal', style: 'arch', title: 'Modern Bridal', occasion: 'Reception' },
    { id: 6, category: 'party', style: 'circle', title: 'Party Glam', occasion: 'Celebration' },
    { id: 7, category: 'editorial', style: 'rounded', title: 'Fashion Forward', occasion: 'Editorial' },
    { id: 8, category: 'natural', style: 'tilted', title: 'Minimalist Beauty', occasion: 'Casual' },
    { id: 9, category: 'bridal', style: 'rounded', title: 'Engagement Look', occasion: 'Pre-wedding' },
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  // Frame style components
  const frameStyles = {
    circle: 'rounded-full',
    arch: 'rounded-tl-[100px] rounded-br-[100px]',
    tilted: 'transform rotate-3 rounded-2xl',
    rounded: 'rounded-3xl',
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-white to-nude-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm tracking-widest uppercase text-blush-400 mb-4 font-medium">
            My Work
          </span>
          <h2 className="section-title">
            Makeup Portfolio
          </h2>
          <p className="section-subtitle mt-4">
            Every look tells a story. Browse through my work and find inspiration for your next transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-charcoal-600 text-white shadow-soft'
                  : 'bg-white text-charcoal-500 hover:bg-nude-100 elegant-border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Creative Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container with Creative Frame */}
              <div className={`relative aspect-square overflow-hidden ${frameStyles[item.style]} bg-gradient-to-br from-nude-200 to-blush-100 shadow-elegant group-hover:shadow-2xl transition-all duration-500`}>
                {/* Placeholder Image - Creative SVG */}
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={index % 3 === 0 ? '#F5BDD0' : index % 3 === 1 ? '#FFE599' : '#D9CCC0'} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={index % 3 === 0 ? '#FFE599' : index % 3 === 1 ? '#F5BDD0' : '#D9CCC0'} stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" fill={`url(#grad-${item.id})`}/>
                  
                  {/* Portrait placeholder */}
                  <ellipse cx="200" cy="170" rx="70" ry="90" fill="#E8E8E8"/>
                  <circle cx="180" cy="155" r="8" fill="#6B6B6B"/>
                  <circle cx="220" cy="155" r="8" fill="#6B6B6B"/>
                  <path d="M175 190 Q200 200 225 190" stroke="#F09DB9" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  
                  {/* Makeup accents */}
                  <circle cx={100 + (index * 30) % 200} cy={300} r="20" fill="#F5BDD0" opacity="0.3"/>
                  <circle cx={280 - (index * 25) % 180} cy={320} r="25" fill="#FFE599" opacity="0.3"/>
                  <rect x="160" y="270" width="80" height="5" rx="2.5" fill="#D4AF37" opacity="0.5"/>
                </svg>

                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-700/90 via-charcoal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-elegant text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-nude-100 uppercase tracking-wide">{item.occasion}</p>
                  <div className="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-sm">View Details</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Zoom effect on image */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Bottom accent - decorative element */}
              {item.style === 'circle' && (
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gold-400 rounded-full shadow-soft"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-charcoal-500 mb-6 text-lg">
            Want to see more? Follow me on Instagram for daily updates!
          </p>
          <a
            href="https://instagram.com/facesbysiddhi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @facesbysiddhi
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
