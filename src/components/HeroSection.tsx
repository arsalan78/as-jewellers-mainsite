
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
    <section className="relative min-h-screen flex items-center justify-center bg-elegance-navy text-white border-8 border-[#d4af37]/70">
      <div className="container relative z-10 mx-auto text-center px-4 flex flex-col items-center justify-center space-y-2 py-12">
        <div className="mb-1">
          <img 
            src="/lovable-uploads/df867d0d-9e97-45d8-8b8e-57a1990003f2.png" 
            alt="A.S Jewellers Logo" 
            className="w-48 h-48 mx-auto"
          />
        </div>
        
        <div className="-mt-2 flex justify-center">
          <Logo size="lg" showTagline={true} />
        </div>
        
        <h2 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2">
          Crafting Timeless
          <span className="bg-gradient-to-r from-[#d4af37] via-[#f472b6] to-[#d4af37] bg-clip-text text-transparent animate-shine ml-2">Elegance</span>
        </h2>
        
        <p className="font-inter text-white max-w-xl mx-auto mb-4 text-sm text-center bg-elegance-navy/70 p-3 rounded-lg">
          Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
        </p>
        
        <div className="flex flex-col items-center">
          <a href="#collections">
            <motion.button 
              className="bg-[#f472b6] text-white font-inter px-8 py-3 rounded-full hover:bg-[#f472b6]/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collections
            </motion.button>
          </a>
          
          <motion.div 
            className="mt-4 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={scrollToCollections}
          >
            <CircleChevronDown size={48} className="text-[#f472b6] hover:text-[#f472b6]/80 transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
