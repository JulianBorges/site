
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { registerChatDialogCallback } from '@/utils/chatStore';
import { conversationFlow } from '@/data/conversationData';
import ChatHeader from './chat/ChatHeader';
import ChatMessages, { Message } from './chat/ChatMessages';
import ChatInput from './chat/ChatInput';

// Export utility functions from chatStore for backward compatibility
export { openChatDialog, closeChatDialog } from '@/utils/chatStore';

const ChatDialog = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Register the callback for external control
  useEffect(() => {
    return registerChatDialogCallback(setOpen);
  }, []);

  // Carregar a conversa completa quando o diálogo é aberto
  useEffect(() => {
    if (open && messages.length === 0) {
      // Carrega toda a conversa pré-definida
      const formattedMessages: Message[] = conversationFlow.map((msg, index) => ({
        id: `msg-${index}`,
        content: msg.content,
        sender: msg.sender as 'bot' | 'user'
      }));
      setMessages(formattedMessages);
    }
  }, [open]);

  const handleSendMessage = (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    
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
          "Ótimo! Nossa solução de IA pode automatizar até 70% das suas tarefas de prospecção. Gostaria de ver uma demonstração rápida?",
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
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden max-h-[80vh] bg-black border border-white/10">
        <div className="flex flex-col h-[600px]">
          <ChatHeader />
          <ChatMessages messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
