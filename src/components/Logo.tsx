
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <ShieldCheck className="w-8 h-8 text-trust-blue" />
      <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-trust-blue to-trust-navy bg-clip-text text-transparent">
        Elegance
      </span>
    </div>
  );
};

export default Logo;
