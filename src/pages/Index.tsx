import React from 'react';
import { motion, spring } from 'framer-motion';
import { Gem, Crown, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 w-full bg-cream/80 backdrop-blur-md z-50 border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold text-dark">
            Elegance Jewelry
          </h1>
          <nav className="hidden md:flex space-x-8 font-inter">
            <a href="#collections" className="text-dark/80 hover:text-gold transition-colors">Collections</a>
            <a href="#about" className="text-dark/80 hover:text-gold transition-colors">About</a>
            <a href="#contact" className="text-dark/80 hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-gold/10 text-gold rounded-full font-inter text-sm">
            Premium Jewelry Crafting
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
            Crafting Timeless
            <span className="bg-gradient-to-r from-gold to-silver bg-clip-text text-transparent animate-shine">
              {" "}Elegance
            </span>
          </h2>
          <p className="font-inter text-dark/70 max-w-2xl mx-auto mb-8 text-lg">
            Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
          </p>
          <button className="bg-dark text-cream font-inter px-8 py-3 rounded-full hover:bg-gold transition-colors duration-300">
            Explore Collections
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark text-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-gold/20">
              <Gem className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Custom Designs</h3>
              <p className="font-inter text-cream/70">Bring your vision to life with our bespoke jewelry service</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-gold/20">
              <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Premium Quality</h3>
              <p className="font-inter text-cream/70">Finest materials and exceptional craftsmanship</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-gold/20">
              <Star className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Heritage</h3>
              <p className="font-inter text-cream/70">Years of expertise in gold and silver crafting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
