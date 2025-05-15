
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-lightblue to-brand-purple text-transparent bg-clip-text">IA Automação</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando empresas através da automação inteligente com Inteligência Artificial de última geração.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>contato@iaautomacao.com.br</li>
              <li>+55 (11) 9999-9999</li>
              <li>Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 IA Automação. Todos os direitos reservados.
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
