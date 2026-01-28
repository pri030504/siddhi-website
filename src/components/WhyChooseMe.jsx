import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseMe = () => {
  const values = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Premium Products',
      description: 'I exclusively use high-end, professional makeup brands that ensure flawless finish and all-day wear.',
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Personalized Looks',
      description: 'Every look is customized to enhance your natural features and match your personal style perfectly.',
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Hygiene & Professionalism',
      description: 'Strict hygiene standards with sanitized tools and brushes. Professional, punctual, and reliable service.',
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Client Satisfaction',
      description: 'Your happiness is my priority. I work closely with you to ensure you feel confident and beautiful.',
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm tracking-widest uppercase text-blush-400 mb-4 font-medium">
            Why Choose Me
          </span>
          <h2 className="section-title">
            What Sets Me Apart
          </h2>
          <p className="section-subtitle mt-4">
            Combining expertise, passion, and professionalism to create exceptional experiences
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blush-100 to-gold-100 text-blush-400 mb-6 group-hover:shadow-elegant transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {value.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-elegant text-2xl text-charcoal-700 mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-charcoal-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe
