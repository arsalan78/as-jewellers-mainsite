
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  isScrolled?: boolean;
  isFooter?: boolean;
  showTagline?: boolean;
};

const Logo = ({ size = 'md', isScrolled = false, isFooter = false, showTagline = false }: LogoProps) => {
  const isMobile = useIsMobile();
  
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  // Determine text colors based on context
  const firstPartColor = isFooter ? 'text-white' : isScrolled ? 'text-elegance-navy' : 'text-white';
  const secondPartColor = 'text-[#db2777]';
  const sinceColor = isFooter ? 'text-white/90' : isScrolled ? 'text-elegance-navy/90' : 'text-white/90';
  const taglineColor = isFooter ? 'text-white/90' : isScrolled ? 'text-elegance-navy/90' : 'text-white/90';

  return (
    <div className={`flex flex-col ${isScrolled ? 'items-start' : 'items-center'}`}>
      <div className="flex items-center">
        <span className={`font-playfair font-bold ${sizeClasses[size]}`}>
          <span className={firstPartColor}>A.S</span>
          <span className={secondPartColor}> Jewellers</span>
        </span>
        <span className={`${sinceColor} text-xs ml-1 md:ml-2 font-medium ${isFooter && isMobile ? 'ml-auto' : ''}`}>
          Since 1992
        </span>
      </div>
      {showTagline && (
        <span className={`${taglineColor} text-sm italic mt-1`}>Trust • Purity • Elegance</span>
      )}
    </div>
  );
};

export default Logo;
