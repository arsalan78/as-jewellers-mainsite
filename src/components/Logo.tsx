
import React from 'react';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  isScrolled?: boolean;
  isFooter?: boolean;
};

const Logo = ({ size = 'md', isScrolled = false, isFooter = false }: LogoProps) => {
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  // Determine text colors based on context
  const firstPartColor = isFooter ? 'text-white' : isScrolled ? 'text-elegance-navy' : 'text-white';
  const secondPartColor = 'text-elegance-pink';

  return (
    <div className="flex items-center flex-col md:flex-row">
      <span className={`font-playfair font-bold ${sizeClasses[size]}`}>
        <span className={firstPartColor}>A.S</span>
        <span className={secondPartColor}> Jewellers</span>
      </span>
      <span className={`${firstPartColor} text-xs ml-1 ${isFooter ? 'md:ml-2' : 'md:ml-2'}`}>Since 1992</span>
    </div>
  );
};

export default Logo;
