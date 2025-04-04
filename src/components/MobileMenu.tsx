
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
        <a href="#collections" className="mobile-menu-link" onClick={onClose}>Collections</a>
        <a href="#about" className="mobile-menu-link" onClick={onClose}>About</a>
        <a href="#contact" className="mobile-menu-link" onClick={onClose}>Contact</a>
      </div>
    </div>
  );
};

export default MobileMenu;
