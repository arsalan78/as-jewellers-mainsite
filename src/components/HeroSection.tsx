
import React from 'react';
import { motion } from 'framer-motion';
import { CircleChevronDown } from 'lucide-react';
import Logo from '@/components/Logo';

const HeroSection = () => {
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2574&auto=format&fit=crop" 
          alt="Jewelry crafting background" 
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-elegance-navy/60 via-transparent to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto text-center px-4 pt-16">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" showTagline={true} />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Crafting Timeless
          <span className="bg-gradient-to-r from-elegance-pink via-elegance-purple to-elegance-pink bg-clip-text text-transparent animate-shine">
            {" "}Elegance
          </span>
        </h2>
        <p className="font-inter text-white max-w-2xl mx-auto mb-6 text-lg font-semibold bg-elegance-navy/30 backdrop-blur-sm p-3 rounded-lg">
          Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
        </p>
        <div className="flex flex-col items-center">
          <a href="#collections">
            <motion.button 
              className="bg-elegance-pink text-white font-inter px-8 py-3 rounded-full hover:bg-elegance-purple transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collections
            </motion.button>
          </a>
          
          <motion.div 
            className="mt-6 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={scrollToCollections}
          >
            <CircleChevronDown size={48} className="text-white hover:text-elegance-pink transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
