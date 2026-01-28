import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Siddhi is an absolute artist! She made me feel like a princess on my wedding day. The makeup lasted all day and looked flawless in every photo. Her attention to detail and warm personality made the whole experience so comfortable and enjoyable.",
      highlight: "She made me feel like a princess on my wedding day.",
      name: "Priya Sharma",
      role: "Bride",
      image: "PS",
    },
    {
      id: 2,
      quote: "I've worked with many makeup artists for photoshoots, but Siddhi truly understands how makeup translates on camera. She's creative, professional, and always brings fresh ideas to the table. Her work elevated our entire shoot.",
      highlight: "Siddhi truly understands how makeup translates on camera.",
      name: "Arjun Mehta",
      role: "Fashion Photographer",
      image: "AM",
    },
    {
      id: 3,
      quote: "Siddhi transformed my look for my engagement party and I received so many compliments! She listened to exactly what I wanted and enhanced my features beautifully. Professional, punctual, and incredibly talented.",
      highlight: "She listened to exactly what I wanted and enhanced my features beautifully.",
      name: "Neha Kapoor",
      role: "Engagement Party",
      image: "NK",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white to-nude-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 sm:px-6 py-2 rounded-full border border-charcoal-300 text-xs sm:text-sm tracking-widest uppercase text-charcoal-600 mb-4 sm:mb-6">
            Testimonials
          </span>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote */}
              <div className="mb-8 sm:mb-12 px-4 sm:px-8 md:px-12">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-400 leading-relaxed font-light">
                  "{current.quote.split(current.highlight)[0]}
                  <span className="text-charcoal-700 font-normal">
                    {current.highlight}
                  </span>
                  {current.quote.split(current.highlight)[1]}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-base sm:text-lg text-charcoal-500">
                  -{current.name}, <span className="text-charcoal-400">{current.role}</span>
                </p>

                {/* Client Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blush-300 to-blush-400 flex items-center justify-center text-white font-elegant text-xl sm:text-2xl shadow-soft">
                  {current.image}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center group active:scale-95"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-600 group-hover:text-blush-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center group active:scale-95"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-600 group-hover:text-blush-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
          <span className="text-sm sm:text-base text-charcoal-400 font-medium">
            {currentIndex + 1}/{testimonials.length}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
