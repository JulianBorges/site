
import React, { useState, useEffect } from 'react';

type Message = {
  sender: 'nora' | 'prospect';
  text: string;
  isTyping?: boolean;
  isComplete?: boolean;
};

const initialMessages: Message[] = [
  { sender: 'nora', text: "Olá! Sou a NORA™ da Doptos. Notei que sua empresa tem crescido rapidamente. Vocês estão enfrentando desafios com o gerenciamento de dados de clientes?", isComplete: true },
];

const ChatExample = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullConversation: Message[] = [
    { sender: 'nora', text: "Olá! Sou a NORA™ da Doptos. Notei que sua empresa tem crescido rapidamente. Vocês estão enfrentando desafios com o gerenciamento de dados de clientes?", isComplete: true },
    { sender: 'prospect', text: "Olá NORA™, sim, temos crescido e nosso CRM atual está com dificuldades para acompanhar.", isComplete: false },
    { sender: 'nora', text: "Obrigada por compartilhar. Muitas empresas em crescimento enfrentam problemas similares. Gostaria de ver como nosso CRM com IA ajudou empresas semelhantes a melhorar a eficiência em 40%?", isComplete: false },
    { sender: 'prospect', text: "Isso parece interessante. Quanto tempo levaria para implementar?", isComplete: false },
    { sender: 'nora', text: "Ótima pergunta! Nossa implementação típica leva apenas 2 semanas com interrupção mínima. Você teria disponibilidade para uma demonstração de 30 minutos com nosso especialista nesta quinta ou sexta-feira?", isComplete: false },
    { sender: 'prospect', text: "Sexta às 14h funcionaria para nossa equipe.", isComplete: false },
    { sender: 'nora', text: "Perfeito! Agendei uma demonstração para sexta-feira às 14h. Você receberá um convite no calendário em breve. Há algo específico que gostaria que o especialista abordasse durante a demonstração?", isComplete: false },
  ];

  useEffect(() => {
    if (currentIndex >= fullConversation.length) return;
    
    const timer = setTimeout(() => {
      // Primeiro mostrar a mensagem como digitando
      if (!fullConversation[currentIndex].isComplete) {
        setMessages(prev => [...prev, { 
          ...fullConversation[currentIndex],
          isTyping: true,
          text: "..."
        }]);
        
        // Depois de um tempo, mostrar a mensagem completa
        setTimeout(() => {
          setMessages(prev => prev.map((msg, i) => 
            i === prev.length - 1 
              ? { ...fullConversation[currentIndex], isTyping: false, isComplete: true }
              : msg
          ));
          
          // Avançar para a próxima mensagem
          setCurrentIndex(prev => prev + 1);
        }, 1500);
      }
    }, currentIndex === 0 ? 0 : 2000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-brand-purple/10 rounded-full mb-4">
            Veja NORA™ em Ação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experimente Conversas Inteligentes</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NORA™ engaja clientes naturalmente, qualifica-os de forma inteligente e agenda reuniões sem esforço.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl overflow-hidden">
            <div className="bg-black/40 p-4 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-400 text-sm">Chat NORA™ IA</span>
              </div>
            </div>
            
            <div className="p-6 h-[500px] overflow-y-auto bg-black/20">
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.sender === 'nora' ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === 'nora' 
                          ? 'bg-brand-blue/20 text-white rounded-tl-none' 
                          : 'bg-white/10 text-white rounded-tr-none'
                      }`}
                    >
                      {message.sender === 'nora' && (
                        <div className="flex items-center mb-1">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">N</span>
                          </div>
                          <span className="text-xs font-medium text-brand-blue">NORA™ IA</span>
                        </div>
                      )}
                      <p className="text-sm md:text-base">
                        {message.isTyping && (
                          <span className="inline-flex">
                            <span className="animate-pulse">.</span>
                            <span className="animate-pulse delay-100">.</span>
                            <span className="animate-pulse delay-200">.</span>
                          </span>
                        )}
                        {!message.isTyping && message.text}
                      </p>
                      <div className="text-right mt-1">
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatExample;
