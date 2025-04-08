
import React from 'react';
import { X } from 'lucide-react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'visible' : 'hidden'}`}>
      <button onClick={onClose} className="absolute top-5 right-5 text-white">
        <X size={24} />
      </button>
      <div className="flex flex-col items-center space-y-6">
        <a href="#collections" className="text-[#f472b6] text-xl py-3 font-playfair hover:text-[#f472b6]/80 transition-colors" onClick={onClose}>Collections</a>
        <a href="#about" className="text-[#f472b6] text-xl py-3 font-playfair hover:text-[#f472b6]/80 transition-colors" onClick={onClose}>About</a>
        <a href="#contact" className="text-[#f472b6] text-xl py-3 font-playfair hover:text-[#f472b6]/80 transition-colors" onClick={onClose}>Contact</a>
      </div>
    </div>
  );
};

export default MobileMenu;
