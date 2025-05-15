
import React from 'react';
import { MessageCircle, Clock, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: "Conversas Naturais",
    description: "NORA™ utiliza IA avançada para conduzir conversas naturais e personalizadas com seus potenciais clientes."
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Disponibilidade 24/7",
    description: "Sua SDR virtual trabalha incansavelmente, qualificando leads e agendando reuniões a qualquer hora do dia."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Análise de Dados",
    description: "Obtenha insights detalhados sobre suas conversas e otimize sua abordagem de vendas com dados precisos."
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Integração com CRM",
    description: "Sincronização perfeita com seu CRM existente para manter todos os dados de leads organizados."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-brand-purple/10 rounded-full mb-4">
            Recursos Poderosos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Por que escolher a NORA™?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma assistente de vendas impulsionada por IA que transforma sua abordagem de prospecção
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-morphism rounded-xl p-6 hover:bg-white/5 transition-colors duration-300">
              <div className="bg-gradient-to-r from-brand-blue to-brand-purple rounded-full p-3 inline-flex mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
