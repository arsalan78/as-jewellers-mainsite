
import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <div 
      className={`fixed inset-0 bg-elegance-navy/95 flex items-center justify-center z-50 transition-opacity duration-300 backdrop-blur-sm ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button onClick={onClose} className="absolute top-5 right-5 text-white">
        <X size={24} />
      </button>
      <div className="flex flex-col items-center space-y-6">
        <a href="#collections" className="text-white text-xl font-playfair hover:text-elegance-pink transition-colors" onClick={onClose}>Collections</a>
        <a href="#about" className="text-white text-xl font-playfair hover:text-elegance-pink transition-colors" onClick={onClose}>About</a>
        <a href="#contact" className="text-white text-xl font-playfair hover:text-elegance-pink transition-colors" onClick={onClose}>Contact</a>
        
        {isAuthenticated && (
          <a href="/admin" className="text-elegance-pink text-xl font-playfair hover:text-white transition-colors" onClick={onClose}>Admin Panel</a>
        )}
        {!isAuthenticated && (
          <a href="/admin-login" className="text-gray-400 text-sm hover:text-elegance-pink transition-colors" onClick={onClose}>Admin Login</a>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
