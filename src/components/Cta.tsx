
import React from 'react';
import { Button } from "@/components/ui/button";
import { openChatDialog } from "./ChatDialog";

const Cta = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-morphism rounded-2xl overflow-hidden">
          <div className="relative p-12 text-white">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-brand-purple/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Pronto para revolucionar seu processo de vendas?</h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Converse com um especialista hoje mesmo e descubra como a NORA™ pode ajudar sua equipe de vendas a alcançar resultados extraordinários.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-brand-purple text-white hover:bg-brand-purple/90 px-8 py-6"
                  onClick={() => openChatDialog()}
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
