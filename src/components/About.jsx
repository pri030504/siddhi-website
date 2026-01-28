import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  }

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-nude-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          {...fadeInUp}
        >
          <span className="inline-block px-4 sm:px-6 py-2 rounded-full border border-charcoal-300 text-xs sm:text-sm tracking-widest uppercase text-charcoal-600 mb-4 sm:mb-6">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
            <span className="font-light text-charcoal-400">Meet </span>
            <span className="font-elegant italic text-charcoal-700">Siddhi</span>
          </h2>
        </motion.div>

        {/* Story Section 1 - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <motion.div
            className="relative"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-2 -right-2 w-full h-full border-2 border-blush-300 rounded-3xl -z-10"></div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-blush-100 to-nude-200">
              <img 
                src="/about me/1.jpeg" 
                alt="Siddhi - Professional Makeup Artist" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight">
              <span className="font-light text-charcoal-400">Where it all </span>
              <span className="font-elegant italic text-charcoal-700">began...</span>
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
              <p>
                I'm <span className="text-charcoal-700 font-medium">Siddhi Jain</span>, a passionate makeup artist dedicated to bringing out the beauty in every face I touch. My journey in the world of makeup began during my college years, where I discovered my true calling while pursuing my <span className="font-medium text-charcoal-700">Bachelor of Arts from Delhi University</span>.
              </p>
              <p>
                During my time at DU, I actively participated in fashion shows, college events, and cultural festivals, which sparked my love for transforming looks and enhancing natural beauty. I realized that makeup was more than just an art form—it was a way to <span className="font-elegant italic text-charcoal-700">boost confidence</span> and make people feel extraordinary.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Story Section 2 - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <motion.div
            className="order-2 lg:order-1"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight">
              <span className="font-light text-charcoal-400">Professional </span>
              <span className="font-elegant italic text-charcoal-700">training</span>
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
              <p>
                After completing my degree, I pursued my passion professionally by enrolling in an intensive <span className="font-medium text-charcoal-700">Professional Makeup Artistry Course from Meribindiya International Academy</span>, one of India's premier beauty training institutes.
              </p>
              <p>
                There, I mastered advanced techniques including <span className="font-medium text-charcoal-700">HD makeup, airbrush application, contouring, color theory, and bridal styling</span>. I also specialized in editorial and fashion makeup, learning to create looks that translate beautifully both in person and on camera.
              </p>
              <p>
                This comprehensive training equipped me with the skills to work with diverse skin tones, face structures, and styles—ensuring every client gets a <span className="font-elegant italic text-charcoal-700">customized, flawless look</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -bottom-2 -left-2 w-full h-full border-2 border-gold-300 rounded-3xl -z-10"></div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-gold-100 to-blush-100">
              <img 
                src="/about me/2.jpeg" 
                alt="Siddhi's Professional Training" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Story Section 3 - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-nude-200 to-blush-100 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/about me/3.jpeg" 
                alt="Siddhi's Client Work" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight">
              <span className="font-light text-charcoal-400">What I </span>
              <span className="font-elegant italic text-charcoal-700">offer</span>
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">
              <p>
                Over the past 5+ years, I've had the privilege of working with over <span className="font-medium text-charcoal-700">200+ happy clients</span>, each with their unique style and vision. From brides on their special day to models for high-fashion editorials, I've created looks that leave lasting impressions.
              </p>
              <p>
                My expertise spans across <span className="font-medium text-charcoal-700">bridal makeup, party glam, engagement looks, editorial and photoshoot makeup, HD and airbrush techniques, natural and dewy finishes, and bold, dramatic transformations</span>.
              </p>
              <p>
                I work exclusively with <span className="font-medium text-charcoal-700">premium, cruelty-free products</span> from brands like MAC, Huda Beauty, Charlotte Tilbury, and NARS—ensuring your skin gets the best while looking absolutely stunning.
              </p>
              <p>
                What truly sets me apart? <span className="font-elegant italic text-charcoal-700">I listen</span>. Your comfort, your vision, and your confidence matter most. Every brushstroke is a step toward making you feel like the most beautiful version of yourself.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blush-50 to-nude-50">
                <div className="font-elegant text-xl sm:text-2xl md:text-3xl text-blush-400 mb-1">200+</div>
                <div className="text-xs text-charcoal-500 uppercase tracking-wide">Clients</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gold-50 to-blush-50">
                <div className="font-elegant text-xl sm:text-2xl md:text-3xl text-gold-500 mb-1">5+</div>
                <div className="text-xs text-charcoal-500 uppercase tracking-wide">Years</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-nude-50 to-gold-50">
                <div className="font-elegant text-xl sm:text-2xl md:text-3xl text-charcoal-700 mb-1">100%</div>
                <div className="text-xs text-charcoal-500 uppercase tracking-wide">Passion</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
