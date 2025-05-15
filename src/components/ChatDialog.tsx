
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Olá! 👋 Eu sou NORA™, sua assistente de vendas com IA. Como posso ajudar você hoje?",
    sender: 'bot'
  }
];

// Create a store for the dialog state
let isOpen = false;
let setIsOpenCallback: ((open: boolean) => void) | null = null;

export const openChatDialog = () => {
  if (setIsOpenCallback) {
    setIsOpenCallback(true);
  }
};

export const closeChatDialog = () => {
  if (setIsOpenCallback) {
    setIsOpenCallback(false);
  }
};

const ChatDialog = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Register the callback for external control
  useEffect(() => {
    setIsOpenCallback = setOpen;
    return () => {
      setIsOpenCallback = null;
    };
  }, []);
  
  // Auto scroll to bottom when new messages come in
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        content: input,
        sender: 'user'
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      
      // Show typing indicator
      setTimeout(() => {
        const typingMessage: Message = {
          id: 'typing',
          content: '...',
          sender: 'bot',
          isTyping: true
        };
        
        setMessages(prev => [...prev, typingMessage]);
        
        // Simulate bot response after a delay
        setTimeout(() => {
          const responseOptions = [
            "Obrigada pela sua mensagem! Ficarei feliz em conectá-lo com um de nossos especialistas. Posso saber seu nome e empresa?",
            "Ótima pergunta! Nossa solução de IA pode automatizar até 70% das suas tarefas de prospecção. Gostaria de ver uma demonstração rápida?",
            "Entendo seus desafios. Muitas empresas como a sua viram um aumento de 40% nas reuniões agendadas após implementar nossa solução. Quantos SDRs você tem atualmente em sua equipe?",
            "Adoraria ajudar com isso. Poderia me contar um pouco mais sobre seu processo de vendas atual para que eu possa personalizar minhas recomendações?"
          ];
          
          const botMessage: Message = {
            id: Date.now().toString(),
            content: responseOptions[Math.floor(Math.random() * responseOptions.length)],
            sender: 'bot'
          };
          
          setMessages(prev => prev.filter(msg => msg.id !== 'typing').concat(botMessage));
        }, 1500);
      }, 500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden max-h-[80vh] bg-black border border-white/10">
        <div className="flex flex-col h-[600px]">
          {/* Chat header */}
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
          
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 bg-black/30">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'bot' 
                        ? 'bg-brand-blue/20 text-white rounded-tl-none' 
                        : 'bg-white/10 text-white rounded-tr-none'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center mr-2">
                          <span className="text-white text-xs font-bold">N</span>
                        </div>
                        <span className="text-xs font-medium text-brand-blue">NORA™ IA</span>
                      </div>
                    )}
                    <p className="text-sm">
                      {msg.isTyping ? (
                        <span className="inline-flex">
                          <span className="animate-pulse">.</span>
                          <span className="animate-pulse delay-100">.</span>
                          <span className="animate-pulse delay-200">.</span>
                        </span>
                      ) : (
                        msg.content
                      )}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t border-white/10 bg-black/80">
            <div className="flex">
              <input
                type="text"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-brand-blue"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
              />
              <Button 
                className="rounded-l-none bg-brand-blue hover:bg-brand-blue/90"
                onClick={handleSend}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
