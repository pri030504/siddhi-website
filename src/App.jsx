import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import VideoShowcase from './components/VideoShowcase'
import Services from './components/Services'
import WhyChooseMe from './components/WhyChooseMe'
import Testimonials from './components/Testimonials'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <VideoShowcase />
        <Services />
        <About />
        <WhyChooseMe />
        <Testimonials />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
