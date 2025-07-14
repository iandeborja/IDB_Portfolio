import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AidbSection from './components/AidbSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <AidbSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 