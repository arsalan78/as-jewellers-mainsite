
import React from 'react';
import { Gem } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Gem className="w-8 h-8 text-gold" />
      <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-gold to-silver bg-clip-text text-transparent">
        Elegance
      </span>
    </div>
  );
};

export default Logo;
