import React from 'react'
import { motion } from 'framer-motion'

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: 'Bridal Transformation',
      type: 'Tutorial',
      thumbnail: 'gradient1',
    },
    {
      id: 2,
      title: 'Party Glam Look',
      type: 'Transformation',
      thumbnail: 'gradient2',
    },
    {
      id: 3,
      title: 'Behind the Scenes',
      type: 'BTS',
      thumbnail: 'gradient3',
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  }

  return (
    <section id="videos" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blush-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm tracking-widest uppercase text-blush-400 mb-4 font-medium">
            Video Content
          </span>
          <h2 className="section-title">
            Tutorials & Transformations
          </h2>
          <p className="section-subtitle mt-4">
            Watch my makeup tutorials and see stunning transformations come to life
          </p>
        </motion.div>

        {/* Video Grid - Center Focus Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className={`group relative cursor-pointer ${
                  index === 1 ? 'md:scale-110 md:z-10' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: index === 1 ? 1.15 : 1.05 }}
              >
                {/* Video Thumbnail Frame */}
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-nude-200 to-blush-100">
                  {/* Placeholder - Reels-style frame */}
                  <svg viewBox="0 0 270 480" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`video-grad-${video.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={video.id === 1 ? '#F5BDD0' : video.id === 2 ? '#FFE599' : '#D9CCC0'} stopOpacity="0.5" />
                        <stop offset="100%" stopColor={video.id === 1 ? '#FFE599' : video.id === 2 ? '#F5BDD0' : '#FFE599'} stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    <rect width="270" height="480" fill={`url(#video-grad-${video.id})`}/>
                    
                    {/* Portrait */}
                    <ellipse cx="135" cy="180" rx="60" ry="80" fill="#E8E8E8"/>
                    <circle cx="120" cy="165" r="7" fill="#6B6B6B"/>
                    <circle cx="150" cy="165" r="7" fill="#6B6B6B"/>
                    <path d="M115 195 Q135 205 155 195" stroke="#F09DB9" strokeWidth="3" fill="none"/>
                    
                    {/* Play button overlay */}
                    <circle cx="135" cy="240" r="35" fill="white" opacity="0.9"/>
                    <path d="M125 225 L155 240 L125 255 Z" fill="#2D2D2D"/>
                    
                    {/* Video UI elements */}
                    <text x="20" y="450" fill="white" fontSize="14" fontWeight="bold">{video.title}</text>
                    <text x="20" y="465" fill="white" fontSize="11" opacity="0.8">{video.type}</text>
                    
                    {/* Likes/views icons */}
                    <circle cx="240" cy="350" r="20" fill="white" opacity="0.3"/>
                    <circle cx="240" cy="400" r="20" fill="white" opacity="0.3"/>
                  </svg>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg className="w-8 h-8 text-charcoal-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-elegant text-xl text-charcoal-700 mb-1">{video.title}</h3>
                  <p className="text-sm text-charcoal-400 uppercase tracking-wide">{video.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* YouTube CTA */}
        <motion.div
          className="text-center mt-16"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-charcoal-500 mb-6 text-lg">
            Subscribe to my YouTube channel for weekly tutorials!
          </p>
          <a
            href="https://www.youtube.com/@Siddhijain9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase
