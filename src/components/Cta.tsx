
import React from 'react';
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl overflow-hidden shadow-lg">
          <div className="relative p-12 text-white">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Entre em contato conosco hoje mesmo e descubra como nossa solução de automação inteligente pode impulsionar os resultados da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 px-8 py-6">
                  Agendar Demonstração
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
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
