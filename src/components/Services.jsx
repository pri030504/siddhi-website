import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Bridal Makeup',
      description: 'Flawless, long-lasting bridal looks that photograph beautifully and make you feel like the most beautiful version of yourself.',
      price: '₹15,000',
      features: ['Trial Session', 'HD Makeup', 'Premium Products', 'Touch-up Kit', 'All Day Stay'],
      highlight: 'Most Popular',
    },
    {
      id: 2,
      title: 'Party / Occasion Makeup',
      description: 'Glamorous looks perfect for parties, events, and special celebrations. Stand out and shine with confidence.',
      price: '₹8,000',
      features: ['Consultation', 'Glam Finish', 'Lashes Included', '4-6 Hours Wear', 'Photo-Ready'],
    },
    {
      id: 3,
      title: 'Engagement / Pre-wedding',
      description: 'Romantic, elegant makeup for your engagement or pre-wedding shoots that captures your love story perfectly.',
      price: '₹12,000',
      features: ['Multiple Looks', 'Trial Available', 'Hairstyling', 'Touch-ups', 'Travel Included'],
    },
    {
      id: 4,
      title: 'Photoshoot / Editorial',
      description: 'Bold, creative editorial looks for photoshoots, fashion, and commercial projects. Artistic and camera-ready.',
      price: '₹10,000',
      features: ['Creative Looks', 'HD Finish', 'Multiple Changes', 'On-Set Service', 'Collaboration Welcome'],
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-nude-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm tracking-widest uppercase text-blush-400 mb-4 font-medium">
            Services & Pricing
          </span>
          <h2 className="section-title">
            What I Offer
          </h2>
          <p className="section-subtitle mt-4">
            Premium makeup services tailored to your unique needs and special moments
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Card */}
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-white shadow-soft group-hover:shadow-elegant transition-all duration-500 elegant-border overflow-hidden">
                
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-blush-400 to-gold-400 text-white text-xs font-semibold px-6 py-2 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wide">
                      {service.highlight}
                    </div>
                  </div>
                )}

                {/* Decorative element */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blush-200/20 to-gold-200/20 rounded-full blur-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-elegant text-3xl text-charcoal-700 mb-3">{service.title}</h3>
                  
                  <p className="text-charcoal-500 leading-relaxed mb-6">{service.description}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-nude-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-charcoal-400 uppercase tracking-wide">Starting from</span>
                      <span className="font-elegant text-4xl text-blush-400">{service.price}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-charcoal-600">
                        <svg className="w-5 h-5 text-blush-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a href="#contact" className="btn-outline w-full text-center block group-hover:bg-charcoal-600 group-hover:text-white group-hover:border-charcoal-600 transition-all duration-300">
                    Book This Service
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Packages Note */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blush-50 to-gold-50 elegant-border"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-3 bg-white rounded-full mb-4 shadow-soft">
            <svg className="w-8 h-8 text-blush-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="font-elegant text-2xl text-charcoal-700 mb-3">Custom Looks & Packages</h3>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Every face and occasion is unique. I offer customized packages and personalized looks tailored to your vision and budget. 
            <span className="block mt-2 font-medium text-charcoal-700">Let's create something beautiful together!</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
