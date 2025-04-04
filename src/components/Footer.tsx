
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
          <div className="text-xs text-elegance-white/80 mx-4 hidden md:block">
            © 2024 A.S Jewellers. All rights reserved.
          </div>
          <div className="flex space-x-3">
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
          <div className="text-xs text-elegance-white/80 w-full text-center md:hidden mt-1">
            © 2024 A.S Jewellers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
