
import React from 'react';

type Message = {
  sender: 'nora' | 'prospect';
  text: string;
  delay?: number;
};

const ChatExample = () => {
  const conversation: Message[] = [
    { sender: 'nora', text: "Hi there! I'm Nora from CloudTech Solutions. I noticed your company has been growing rapidly. Are you currently facing any challenges with your customer data management?", delay: 0 },
    { sender: 'prospect', text: "Hi Nora, yes we've been growing and our current CRM is struggling to keep up.", delay: 1 },
    { sender: 'nora', text: "Thanks for sharing that. Many growing companies face similar issues. Would you be interested in seeing how our AI-powered CRM has helped similar businesses improve efficiency by 40%?", delay: 2 },
    { sender: 'prospect', text: "That sounds interesting. What kind of implementation time are we looking at?", delay: 3 },
    { sender: 'nora', text: "Great question! Our typical implementation takes just 2 weeks with minimal disruption. Would you be available for a 30-minute demo with our solutions specialist this Thursday or Friday?", delay: 4 },
    { sender: 'prospect', text: "Friday at 2pm would work for our team.", delay: 5 },
    { sender: 'nora', text: "Perfect! I've scheduled a demo for Friday at 2pm. You'll receive a calendar invite shortly. Is there anything specific you'd like the specialist to focus on during the demo?", delay: 6 },
  ];

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-brand-purple/10 rounded-full mb-4">
            See Nora in Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience Intelligent Conversations</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nora engages prospects naturally, qualifies them intelligently, and books meetings effortlessly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl overflow-hidden">
            <div className="bg-black/40 p-4 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-400 text-sm">Nora AI Chat</span>
              </div>
            </div>
            
            <div className="p-6 h-[500px] overflow-y-auto bg-black/20">
              <div className="space-y-6">
                {conversation.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.sender === 'nora' ? 'justify-start' : 'justify-end'} animate-fade-in`}
                    style={{ animationDelay: `${message.delay || 0}s` }}
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
                          <span className="text-xs font-medium text-brand-blue">Nora AI</span>
                        </div>
                      )}
                      <p className="text-sm md:text-base">{message.text}</p>
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
