
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
    <section className="relative min-h-screen flex items-center justify-center bg-elegance-navy text-white border-[16px] border-white">
      <div className="container relative z-10 mx-auto text-center px-4 flex flex-col items-center justify-center py-12">
        <div className="mb-1">
          <img 
            src="/lovable-uploads/df867d0d-9e97-45d8-8b8e-57a1990003f2.png" 
            alt="A.S Jewellers Logo" 
            className="w-64 h-64 mx-auto"
          />
        </div>
        
        <div className="-mt-8 flex justify-center">
          <Logo size="lg" showTagline={true} />
        </div>
        
        <h2 className="font-playfair text-base md:text-lg font-bold text-white mt-4">
          Crafting Timeless
          <span className="bg-gradient-to-r from-[#d4af37] via-[#f472b6] to-[#d4af37] bg-clip-text text-transparent animate-shine ml-2">Elegance</span>
        </h2>
        
        <p className="font-inter text-white max-w-lg mx-auto mb-8 text-xs text-center bg-elegance-navy/70 p-2 rounded-lg">
          Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
        </p>
        
        {/* Navigation Links Styled Like Link text with dots */}
        <div className="flex space-x-10 my-6">
          <div className="flex flex-col items-center">
            <a 
              href="#collections"
              className="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors font-inter text-sm md:text-base"
            >
              Collections
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-1"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <a 
              href="#about"
              className="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors font-inter text-sm md:text-base"
            >
              About
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-1"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <a 
              href="#contact"
              className="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors font-inter text-sm md:text-base"
            >
              Contact
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-1"></div>
          </div>
        </div>
        
        <motion.div 
          className="mt-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToCollections}
        >
          <CircleChevronDown size={36} className="text-white hover:text-white/80 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
