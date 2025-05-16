
import React from 'react';

type ChatMessageProps = {
  content: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
};

const ChatMessage = ({ content, sender, isTyping }: ChatMessageProps) => {
  return (
    <div 
      className={`flex ${sender === 'bot' ? 'justify-start' : 'justify-end'}`}
    >
      <div 
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          sender === 'bot' 
            ? 'bg-brand-blue/20 text-white rounded-tl-none' 
            : 'bg-white/10 text-white rounded-tr-none'
        }`}
      >
        {sender === 'bot' && (
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center mr-2">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="text-xs font-medium text-brand-blue">NORA™ IA</span>
          </div>
        )}
        <p className="text-sm">
          {isTyping ? (
            <span className="inline-flex">
              <span className="animate-pulse">.</span>
              <span className="animate-pulse delay-100">.</span>
              <span className="animate-pulse delay-200">.</span>
            </span>
          ) : (
            content
          )}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
