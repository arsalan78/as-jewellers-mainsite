
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-full bg-trust-blue/10">
        <ShieldCheck className="w-7 h-7 text-trust-blue" />
      </div>
      <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-trust-blue to-trust-navy animate-shine bg-clip-text text-transparent">
        Elegance
      </span>
    </div>
  );
};

export default Logo;
