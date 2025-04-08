
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

type HeaderProps = {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const Header = ({ mobileMenuOpen, toggleMobileMenu }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {isScrolled && <Logo isScrolled={isScrolled} showTagline={isScrolled} />}
          
          {/* Desktop Navigation - right-aligned */}
          <div className={`hidden md:flex ml-auto space-x-8 font-inter`}>
            <a 
              href="#collections" 
              className={`${isScrolled ? 'text-[#f472b6]' : 'text-[#f472b6] font-medium bg-elegance-navy/70 px-3 py-1 rounded'} hover:text-[#f472b6]/80 transition-colors`}
            >
              Collections
            </a>
            <a 
              href="#about" 
              className={`${isScrolled ? 'text-[#f472b6]' : 'text-[#f472b6] font-medium bg-elegance-navy/70 px-3 py-1 rounded'} hover:text-[#f472b6]/80 transition-colors`}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`${isScrolled ? 'text-[#f472b6]' : 'text-[#f472b6] font-medium bg-elegance-navy/70 px-3 py-1 rounded'} hover:text-[#f472b6]/80 transition-colors`}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button onClick={toggleMobileMenu} className={`${isScrolled ? 'text-elegance-navy' : 'text-white'} p-1 ${!isScrolled ? 'ml-auto' : ''}`}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
