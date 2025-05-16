
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
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
          className="rounded-l-none bg-brand-purple hover:bg-brand-purple/90"
          onClick={handleSend}
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
