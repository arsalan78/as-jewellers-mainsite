
import React from 'react';
import Logo from '@/components/Logo';
import { Heart, Star, Crown, ShieldCheck } from 'lucide-react';

type FooterProps = {
  showFooter: boolean;
};

const Footer = ({ showFooter }: FooterProps) => {
  return (
    <footer className={`${showFooter ? 'fixed-footer fixed bottom-0 w-full z-40' : 'bg-elegance-navy py-1'} border-t border-elegance-pink/20`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-2">
          <div className="flex items-center">
            <Logo size="sm" isFooter={true} />
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-8 text-xs text-elegance-white/80 order-3 md:order-2 w-full md:w-auto mt-2 md:mt-0 justify-center md:justify-start">
            <a href="#" className="hover:text-elegance-pink">Privacy Policy</a>
            <a href="#" className="hover:text-elegance-pink">Terms & Conditions</a>
            <a href="#" className="hover:text-elegance-pink hidden md:block">FAQ</a>
            <a href="#" className="hover:text-elegance-pink hidden md:block">Shipping Info</a>
          </div>
          
          <div className="flex space-x-3 order-2 md:order-3">
            <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
              <Heart className="h-4 w-4" />
            </a>
            <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
              <Star className="h-4 w-4" />
            </a>
            <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
              <Crown className="h-4 w-4" />
            </a>
            <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
              <ShieldCheck className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
