import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import BrandMarquee from './BrandMarquee';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-12 sm:py-16 min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 relative z-10 w-full">
        <div className="w-full max-w-full lg:max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left w-full max-w-full"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-neutral-500">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight break-words max-w-full w-full"
            >
              <span className="block text-neutral-900">Ian</span>
              <span className="block text-neutral-900">
                <span className="inline-flex items-baseline flex-wrap w-full max-w-full">
                  <span>de Borja</span>
                  <span className="text-base xs:text-lg sm:text-xl font-bold ml-2 text-neutral-400 align-baseline">(a.k.a. idb)</span>
                </span>
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base xs:text-lg sm:text-xl md:text-2xl font-light text-neutral-600 mb-6 max-w-full w-full mx-auto lg:mx-0 leading-relaxed break-words"
            >
              Senior Marketing Leader, Pop-Culture Fanatic, and All Around Nice Guy
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-base xs:text-lg sm:text-xl text-neutral-500 mb-6 max-w-full w-full mx-auto lg:mx-0 leading-relaxed break-words"
            >
              Creative and strategic communications leader with 15 years of experience shaping social media, community engagement, video/podcast production, and brand partnerships for beloved web2 and web3 brands like Amazon, Bored Ape Yacht Club, IMDb, Lyft, and Metaplex.
            </motion.p>

            {/* Brand Ticker */}
            <div className="mb-6">
              <BrandMarquee />
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-0"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#contact')}
                className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wide hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements (hidden on mobile to prevent overlap) */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neutral-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-neutral-100 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero; 