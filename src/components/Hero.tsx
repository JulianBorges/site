
import React from 'react';
import { Button } from "@/components/ui/button";
import { openChatDialog } from "@/components/ChatDialog";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 left-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-1/3 h-1/3 bg-brand-purple/10 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-brand-purple/10 rounded-full mb-5">
                Meet Your AI SDR Assistant
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gradient">
                Transform Your Sales with Nora
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Nora is an AI-powered SDR that engages prospects, qualifies leads, and books meetings for your sales team 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6"
                  onClick={() => openChatDialog()}
                >
                  Try Nora Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/5 px-8 py-6"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="glass-morphism rounded-2xl p-6 relative z-10 animate-float">
                <div className="w-full aspect-video rounded-lg flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20"></div>
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">N</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white">Nora AI</h3>
                  <p className="text-sm text-gray-400">Your 24/7 Sales Development Representative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
