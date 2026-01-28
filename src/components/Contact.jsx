import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm tracking-widest uppercase text-blush-400 mb-4 font-medium">
            Let's Connect
          </span>
          <h2 className="section-title">
            Book Your Perfect Look
          </h2>
          <p className="section-subtitle mt-4">
            Ready to feel beautiful? Let's discuss your vision and create magic together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left - Contact Info */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:sticky lg:top-24">
              <h3 className="font-elegant text-3xl text-charcoal-700 mb-8">
                Get in Touch
              </h3>

              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blush-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-400 uppercase tracking-wide mb-1">Email</div>
                    <a href="mailto:facesbysiddhi@gmail.com" className="text-lg text-charcoal-700 hover:text-blush-400 transition-colors">
                      facesbysiddhi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-400 uppercase tracking-wide mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-lg text-charcoal-700 hover:text-gold-500 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Instagram DM */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blush-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-400 uppercase tracking-wide mb-1">Instagram DM</div>
                    <a href="https://instagram.com/facesbysiddhi" target="_blank" rel="noopener noreferrer" className="text-lg text-charcoal-700 hover:text-blush-400 transition-colors">
                      @facesbysiddhi
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blush-50 to-gold-50 elegant-border">
                <svg className="w-10 h-10 text-blush-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-charcoal-700 italic text-lg leading-relaxed font-light">
                  "Let's create your perfect look. I'm here to make you feel absolutely beautiful on your special day."
                </p>
                <p className="mt-4 font-elegant text-xl text-charcoal-700">— Siddhi</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2 uppercase tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl elegant-border bg-white text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl elegant-border bg-white text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2 uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl elegant-border bg-white text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Service & Date */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal-700 mb-2 uppercase tracking-wide">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl elegant-border bg-white text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="party">Party / Occasion</option>
                    <option value="engagement">Engagement / Pre-wedding</option>
                    <option value="editorial">Photoshoot / Editorial</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-charcoal-700 mb-2 uppercase tracking-wide">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl elegant-border bg-white text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2 uppercase tracking-wide">
                  Tell me about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-4 rounded-2xl elegant-border bg-white text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all resize-none"
                  placeholder="Share details about your event, preferred style, or any specific requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary text-base py-5 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Booking Request</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>

              <p className="text-sm text-charcoal-400 text-center">
                I typically respond within 24 hours. Can't wait to hear from you! ✨
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
