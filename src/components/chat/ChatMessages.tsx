
import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

export type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
};

type ChatMessagesProps = {
  messages: Message[];
};

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages come in
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-black/30">
      <div className="space-y-4">
        {messages.map((msg) => (
          <ChatMessage 
            key={msg.id}
            content={msg.content}
            sender={msg.sender}
            isTyping={msg.isTyping}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
