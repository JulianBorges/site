
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { openChatDialog } from "@/utils/chatStore";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient-primary">Doptos</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Recursos</a>
            <a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demonstração</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
            <Button 
              className="bg-brand-purple hover:bg-brand-purple/90"
              onClick={() => openChatDialog()}
            >
              Testar Grátis Agora
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} className="text-brand-purple" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/blog" className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-md" onClick={toggleMenu}>Blog</Link>
            <a href="#features" className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-md" onClick={toggleMenu}>Recursos</a>
            <a href="#demo" className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-md" onClick={toggleMenu}>Demonstração</a>
            <a href="#about" className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-md" onClick={toggleMenu}>Sobre</a>
            <div className="pt-2">
              <Button 
                className="w-full bg-brand-purple hover:bg-brand-purple/90"
                onClick={() => openChatDialog()}
              >
                Testar Grátis Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
