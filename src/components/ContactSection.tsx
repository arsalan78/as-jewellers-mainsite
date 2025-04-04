
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="py-6 px-4 bg-elegance-navy text-elegance-white">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-playfair text-2xl font-bold mb-2">Contact Us</h2>
          <p className="font-inter text-elegance-white/70 max-w-2xl mx-auto text-sm mb-6">
            Have questions about our collections or custom orders? Reach out to us.
          </p>
        </div>
        
        {/* Mobile layout - stacked cards instead of horizontal scroll */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-6">
          <motion.div 
            className="text-center p-3 md:p-4 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin className="w-6 h-6 md:w-7 md:h-7 text-elegance-pink mx-auto mb-1 md:mb-2" />
            <h3 className="font-playfair text-base md:text-lg mb-1">Visit Us</h3>
            <p className="font-inter text-elegance-white/70 text-xs md:text-sm">123 Elegance Boulevard, Gold District, 10001</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-3 md:p-4 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Phone className="w-6 h-6 md:w-7 md:h-7 text-elegance-pink mx-auto mb-1 md:mb-2" />
            <h3 className="font-playfair text-base md:text-lg mb-1">Call Us</h3>
            <p className="font-inter text-elegance-white/70 text-xs md:text-sm">+1 (800) 123-4567</p>
            <p className="font-inter text-elegance-white/70 text-xs md:text-sm">Monday - Saturday: 9am - 7pm</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-3 md:p-4 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="w-6 h-6 md:w-7 md:h-7 text-elegance-pink mx-auto mb-1 md:mb-2" />
            <h3 className="font-playfair text-base md:text-lg mb-1">Email Us</h3>
            <p className="font-inter text-elegance-white/70 text-xs md:text-sm">info@asjewellers.com</p>
            <p className="font-inter text-elegance-white/70 text-xs md:text-sm">custom@asjewellers.com</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
