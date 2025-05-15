
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple text-transparent bg-clip-text">IA Automação</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-700 hover:text-brand-blue transition-colors">Serviços</a>
            <a href="#beneficios" className="text-gray-700 hover:text-brand-blue transition-colors">Benefícios</a>
            <a href="#sobre" className="text-gray-700 hover:text-brand-blue transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-brand-blue transition-colors">Contato</a>
            <Button className="bg-brand-blue hover:bg-brand-blue/90">Fale Conosco</Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#servicos" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Serviços</a>
            <a href="#beneficios" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Benefícios</a>
            <a href="#sobre" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Sobre</a>
            <a href="#contato" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Contato</a>
            <div className="pt-2">
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">Fale Conosco</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
