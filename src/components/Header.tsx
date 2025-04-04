
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
          <Logo isScrolled={isScrolled} showTagline={isScrolled} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-inter">
            <a 
              href="#collections" 
              className="text-elegance-navy hover:text-elegance-pink transition-colors"
            >
              Collections
            </a>
            <a 
              href="#about" 
              className="text-elegance-navy hover:text-elegance-pink transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-elegance-navy hover:text-elegance-pink transition-colors"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button onClick={toggleMobileMenu} className="text-elegance-navy p-1">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
