
import React from 'react';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
};

const Logo = ({ size = 'md' }: LogoProps) => {
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className="flex items-center">
      <span className={`font-playfair font-bold ${sizeClasses[size]}`}>
        <span className="text-elegance-navy">Elegance</span>
        <span className="text-elegance-pink">Jewelry</span>
      </span>
    </div>
  );
};

export default Logo;
