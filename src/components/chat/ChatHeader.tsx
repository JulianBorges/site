
import React from 'react';

const ChatHeader = () => {
  return (
    <div className="bg-black/90 p-4 border-b border-white/10 flex items-center">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center mr-3">
        <span className="text-white font-bold text-sm">N</span>
      </div>
      <div>
        <h3 className="font-semibold text-white">NORA™ IA</h3>
        <p className="text-xs text-gray-400">Assistente de Vendas IA</p>
      </div>
      <div className="ml-auto flex items-center">
        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
        <span className="text-xs text-green-500">Online</span>
      </div>
    </div>
  );
};

export default ChatHeader;
