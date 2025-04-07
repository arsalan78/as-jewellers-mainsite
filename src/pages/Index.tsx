
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Components
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CollectionsSection from '@/components/CollectionsSection';
import CraftsmenCarousel from '@/components/CraftsmenCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const isMobile = useIsMobile();
  const [showFooter, setShowFooter] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFooter(window.scrollY > window.innerHeight * 0.5);
      setShowHeader(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white relative">
      {/* Header - Only show after scrolling */}
      {showHeader && <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />}
      
      {/* Mobile Menu Overlay */}
      {isMobile && <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />}

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <CollectionsSection />
        
        {/* Meet Our Craftsmen Section */}
        <section className="py-6 px-4 bg-elegance-pink/5">
          <div className="container mx-auto">
            <CraftsmenCarousel />
          </div>
        </section>
        
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer showFooter={showFooter} />
    </div>
  );
};

export default Index;
