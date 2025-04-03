
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2574&auto=format&fit=crop" 
          alt="Jewelry crafting background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-elegance-navy/40 via-transparent to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto text-center px-4 pt-16">
        <span className="inline-block mb-4 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
          Exclusive Jewelry Crafting
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegance-navy mb-4 leading-tight">
          Crafting Timeless
          <span className="bg-gradient-to-r from-elegance-pink via-elegance-purple to-elegance-pink bg-clip-text text-transparent animate-shine">
            {" "}Elegance
          </span>
        </h2>
        <p className="font-inter text-elegance-navy/90 max-w-2xl mx-auto mb-6 text-lg">
          Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
        </p>
        <a href="#collections">
          <motion.button 
            className="bg-elegance-pink text-white font-inter px-8 py-3 rounded-full hover:bg-elegance-purple transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collections
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
