
import React from 'react';
import { TrendingUp, Clock, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Aumento de Produtividade",
    description: "Aumente a eficiência operacional em até 70% com automação inteligente de tarefas repetitivas.",
    color: "bg-brand-blue"
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Redução de Custos",
    description: "Reduza custos operacionais em até 30% com processos automatizados e otimizados.",
    color: "bg-brand-purple"
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Mais Segurança",
    description: "Minimize erros humanos e aumente a segurança nos processos através da automação.",
    color: "bg-brand-blue"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Melhoria na Experiência",
    description: "Ofereça atendimento mais rápido e personalizado aos seus clientes.",
    color: "bg-brand-purple"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-purple-50 rounded-full mb-4">
            Por que escolher automação com IA?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios para seu Negócio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossa solução pode transformar sua empresa e trazer resultados concretos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`${benefit.color} rounded-full p-3 inline-flex mb-5`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
