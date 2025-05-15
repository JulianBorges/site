
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gradient-primary">Doptos</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando equipes de vendas com inteligência artificial avançada. NORA™ é a SDR virtual que nunca dorme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"></div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Produto</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demonstração</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>contato@doptos.com</li>
              <li>+55 (11) 9999-9999</li>
              <li>Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Doptos. Todos os direitos reservados. NORA™ é uma marca registrada.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
