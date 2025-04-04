
import React from 'react';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  isScrolled?: boolean;
  isFooter?: boolean;
  showTagline?: boolean;
};

const Logo = ({ size = 'md', isScrolled = false, isFooter = false, showTagline = false }: LogoProps) => {
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  // Determine text colors based on context
  const firstPartColor = isFooter ? 'text-white' : isScrolled ? 'text-elegance-navy' : 'text-white';
  const secondPartColor = 'text-elegance-pink';
  const sinceColor = isFooter ? 'text-white/80' : 'text-elegance-navy';

  return (
    <div className={`flex flex-col ${isScrolled ? 'items-start' : 'items-center'}`}>
      <div className="flex items-center">
        <span className={`font-playfair font-bold ${sizeClasses[size]}`}>
          <span className={firstPartColor}>A.S</span>
          <span className={secondPartColor}> Jewellers</span>
        </span>
        <span className={`${sinceColor} text-xs ml-1 md:ml-2 font-medium ${isFooter && isMobile ? 'ml-auto' : ''}`}>Since 1992</span>
      </div>
      {showTagline && (
        <span className={`${firstPartColor} text-sm italic mt-1`}>Trust • Purity • Elegance</span>
      )}
    </div>
  );
};

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export default Logo;
