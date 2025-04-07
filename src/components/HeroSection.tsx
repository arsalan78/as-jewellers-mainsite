
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
    <section className="relative min-h-screen flex items-center justify-center bg-elegance-navy/10 pt-16">
      <div className="absolute inset-0 z-0 bg-elegance-navy/10"></div>
      <div className="container relative z-10 mx-auto text-center px-4 pt-16 flex flex-col items-center">
        <img 
          src="/lovable-uploads/df867d0d-9e97-45d8-8b8e-57a1990003f2.png" 
          alt="A.S Jewellers Logo" 
          className="w-48 h-48 mb-8"
        />
        <div className="mb-8 flex justify-center">
          <Logo size="lg" showTagline={true} />
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-elegance-navy mb-4 leading-tight">
          Crafting Timeless
          <span className="bg-gradient-to-r from-[#db2777] via-[#db2777] to-[#db2777] bg-clip-text text-transparent animate-shine">
            {" "}Elegance
          </span>
        </h2>
        <p className="font-inter text-elegance-navy max-w-2xl mx-auto mb-6 text-lg font-semibold bg-white/70 backdrop-blur-sm p-3 rounded-lg">
          Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
        </p>
        <div className="flex flex-col items-center">
          <a href="#collections">
            <motion.button 
              className="bg-[#db2777] text-white font-inter px-8 py-3 rounded-full hover:bg-elegance-purple transition-colors duration-300"
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
            <CircleChevronDown size={48} className="text-[#db2777] hover:text-elegance-pink transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
