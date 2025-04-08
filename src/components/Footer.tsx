
import React from 'react';
import Logo from '@/components/Logo';
import { Heart, Star, Crown, ShieldCheck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type FooterProps = {
  showFooter: boolean;
};

const Footer = ({ showFooter }: FooterProps) => {
  const isMobile = useIsMobile();
  
  return (
    <footer className={`${showFooter ? 'fixed-footer fixed bottom-0 w-full z-40' : 'bg-elegance-navy py-1'} border-t border-[#f472b6]/20`}>
      <div className="container mx-auto px-4">
        <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center justify-between'} py-2`}>
          <div className="flex items-center">
            <Logo size="sm" isFooter={true} />
          </div>
          
          <div className="flex items-center flex-wrap space-x-3 md:space-x-6 text-xs text-elegance-white/80 order-3 md:order-2 w-full md:w-auto justify-start md:justify-center">
            <a href="#" className="hover:text-[#f472b6]">Privacy Policy</a>
            <a href="#" className="hover:text-[#f472b6]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#f472b6]">FAQ</a>
            <a href="#" className="hover:text-[#f472b6]">Shipping Info</a>
          </div>
          
          <div className="flex space-x-3 order-2 md:order-3">
            <a href="#" className="text-elegance-white hover:text-[#f472b6] transition-colors">
              <Heart className="h-4 w-4" />
            </a>
            <a href="#" className="text-elegance-white hover:text-[#f472b6] transition-colors">
              <Star className="h-4 w-4" />
            </a>
            <a href="#" className="text-elegance-white hover:text-[#f472b6] transition-colors">
              <Crown className="h-4 w-4" />
            </a>
            <a href="#" className="text-elegance-white hover:text-[#f472b6] transition-colors">
              <ShieldCheck className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
