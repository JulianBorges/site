
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-purple-50 rounded-full mb-5">
                Inovação para Empresas
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-lightblue text-transparent bg-clip-text">
                Transforme sua empresa com automação inteligente
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Soluções de automação baseadas em Inteligência Artificial para otimizar processos, reduzir custos e aumentar a produtividade do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6">
                  Agendar Demonstração
                </Button>
                <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 px-8 py-6">
                  Conhecer Soluções
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -z-10 top-1/3 left-1/3 w-2/3 h-2/3 bg-brand-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/3 right-1/3 w-1/2 h-1/2 bg-brand-purple/20 rounded-full blur-3xl"></div>
              <div className="w-full h-full relative">
                <div className="animate-float rounded-2xl bg-white shadow-xl border border-gray-100 p-6 relative z-10">
                  <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-brand-blue rounded-full"></div>
                      </div>
                      <p className="text-gray-500 text-sm">Demonstração Interativa</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-2/3 h-24 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl blur-md opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
