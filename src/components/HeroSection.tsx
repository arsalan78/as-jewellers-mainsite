
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
    <section className="relative min-h-screen flex items-center justify-center bg-elegance-navy text-white pt-16">
      <div className="container relative z-10 mx-auto text-center px-4 flex flex-col items-center justify-center space-y-4">
        <div className="mb-4">
          <img 
            src="/lovable-uploads/df867d0d-9e97-45d8-8b8e-57a1990003f2.png" 
            alt="A.S Jewellers Logo" 
            className="w-32 h-32 mx-auto mb-4"
          />
        </div>
        
        <div className="mb-4 flex justify-center">
          <Logo size="lg" showTagline={true} />
        </div>
        
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
          Crafting Timeless
          <span className="text-[#db2777] ml-2">Elegance</span>
        </h2>
        
        <p className="font-inter text-white max-w-2xl mx-auto mb-6 text-base text-center bg-elegance-navy/70 p-3 rounded-lg">
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
            className="mt-4 cursor-pointer"
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
