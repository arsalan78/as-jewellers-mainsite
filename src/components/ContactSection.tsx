import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="py-6 px-4 bg-elegance-navy/10 text-elegance-navy">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-playfair text-2xl font-bold mb-2">Contact Us</h2>
          <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto text-sm mb-6">
            Have questions about our collections or custom orders? Reach out to us.
          </p>
        </div>
        
        {isMobile ? (
          // Mobile Accordion Layout
          <div className="max-w-md mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="visit-us" className="border-b border-[#f472b6]/20">
                <AccordionTrigger className="flex items-center py-3 text-elegance-navy hover:no-underline">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#f472b6] mr-2" />
                    <span className="font-playfair">Visit Us</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-inter text-elegance-navy/70 text-sm py-2">
                    123 Elegance Boulevard, Gold District, 10001
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="call-us" className="border-b border-[#f472b6]/20">
                <AccordionTrigger className="flex items-center py-3 text-elegance-navy hover:no-underline">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#f472b6] mr-2" />
                    <span className="font-playfair">Call Us</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-inter text-elegance-navy/70 text-sm py-1">+1 (800) 123-4567</p>
                  <p className="font-inter text-elegance-navy/70 text-sm py-1">Monday - Saturday: 9am - 7pm</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="email-us" className="border-b border-[#f472b6]/20">
                <AccordionTrigger className="flex items-center py-3 text-elegance-navy hover:no-underline">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#f472b6] mr-2" />
                    <span className="font-playfair">Email Us</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-inter text-elegance-navy/70 text-sm py-1">info@asjewellers.com</p>
                  <p className="font-inter text-elegance-navy/70 text-sm py-1">custom@asjewellers.com</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ) : (
          // Desktop Layout - Keep the card format
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-6">
            <motion.div 
              className="text-center p-3 md:p-4 rounded-2xl bg-white backdrop-blur border border-elegance-navy/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#f472b6] mx-auto mb-1 md:mb-2" />
              <h3 className="font-playfair text-base md:text-lg mb-1">Visit Us</h3>
              <p className="font-inter text-elegance-navy/70 text-xs md:text-sm">123 Elegance Boulevard, Gold District, 10001</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-3 md:p-4 rounded-2xl bg-white backdrop-blur border border-elegance-navy/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#f472b6] mx-auto mb-1 md:mb-2" />
              <h3 className="font-playfair text-base md:text-lg mb-1">Call Us</h3>
              <p className="font-inter text-elegance-navy/70 text-xs md:text-sm">+1 (800) 123-4567</p>
              <p className="font-inter text-elegance-navy/70 text-xs md:text-sm">Monday - Saturday: 9am - 7pm</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-3 md:p-4 rounded-2xl bg-white backdrop-blur border border-elegance-navy/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#f472b6] mx-auto mb-1 md:mb-2" />
              <h3 className="font-playfair text-base md:text-lg mb-1">Email Us</h3>
              <p className="font-inter text-elegance-navy/70 text-xs md:text-sm">info@asjewellers.com</p>
              <p className="font-inter text-elegance-navy/70 text-xs md:text-sm">custom@asjewellers.com</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
