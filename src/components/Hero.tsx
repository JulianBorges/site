
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { openChatDialog } from "@/utils/chatStore";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const words = ["Atenda", "Engaje", "Qualifique", "Agende", "Venda"];
  const currentWord = useRef(words[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle typing animation
      if (!isDeleting) {
        if (displayText.length < currentWord.current.length) {
          setDisplayText(currentWord.current.substring(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Start deleting after a pause
          setIsDeleting(true);
          setTypingSpeed(800); // Pause before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.current.substring(0, displayText.length - 1));
          setTypingSpeed(50); // Delete faster than type
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % words.length;
            currentWord.current = words[nextIndex];
            return nextIndex;
          });
          setTypingSpeed(200); // Pause before typing next word
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 left-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-1/3 h-1/3 bg-brand-purple/10 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-brand-purple/10 rounded-full mb-5">
                Conheça sua Assistente SDR com IA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white relative inline-block">
                  <span className="h-[1.2em] inline-block">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </span>
                <br />
                <span className="text-white">com NORA™</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                NORA™ é uma SDR impulsionada por IA que engaja clientes em potencial, qualifica leads e agenda reuniões para sua equipe de vendas 24 horas por dia, 7 dias por semana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6"
                  onClick={() => openChatDialog()}
                >
                  Testar Grátis Agora
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            {/* Espaço vazio onde estava a caixa flutuante */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
