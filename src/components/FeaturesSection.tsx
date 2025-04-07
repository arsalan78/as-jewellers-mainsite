
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crown, Star } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-3">
          <motion.div 
            className="text-center p-3 rounded-2xl bg-white shadow-md border border-[#f472b6]/10"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(244, 114, 182, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <ShieldCheck className="w-7 h-7 text-[#f472b6] mx-auto mb-2" />
            <h3 className="font-playfair text-lg mb-1 text-elegance-navy">Custom Designs</h3>
            <p className="font-inter text-elegance-navy/70 text-sm">Bring your vision to life with our bespoke jewelry service</p>
          </motion.div>
          <motion.div 
            className="text-center p-3 rounded-2xl bg-white shadow-md border border-[#f472b6]/10"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(244, 114, 182, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <Crown className="w-7 h-7 text-[#f472b6] mx-auto mb-2" />
            <h3 className="font-playfair text-lg mb-1 text-elegance-navy">Premium Quality</h3>
            <p className="font-inter text-elegance-navy/70 text-sm">Finest materials and exceptional craftsmanship</p>
          </motion.div>
          <motion.div 
            className="text-center p-3 rounded-2xl bg-white shadow-md border border-[#f472b6]/10"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(244, 114, 182, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-7 h-7 text-[#f472b6] mx-auto mb-2" />
            <h3 className="font-playfair text-lg mb-1 text-elegance-navy">Heritage</h3>
            <p className="font-inter text-elegance-navy/70 text-sm">Years of expertise in gold and silver crafting</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
