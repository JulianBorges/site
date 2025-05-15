
import React from 'react';
import { Bot, Code, Database, Brain, MessageCircle, FileSearch } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Bot className="h-10 w-10 text-brand-blue" />,
    title: "Automação de Processos",
    description: "Automatize fluxos de trabalho repetitivos e libere sua equipe para tarefas de maior valor."
  },
  {
    icon: <Brain className="h-10 w-10 text-brand-purple" />,
    title: "IA para Análise de Dados",
    description: "Transforme dados em insights acionáveis com nossa plataforma de análise baseada em IA."
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-brand-blue" />,
    title: "Assistentes Virtuais",
    description: "Chatbots e assistentes virtuais inteligentes para atender clientes e funcionários 24/7."
  },
  {
    icon: <FileSearch className="h-10 w-10 text-brand-purple" />,
    title: "Processamento de Documentos",
    description: "Extraia, classifique e processe informações de documentos automaticamente."
  },
  {
    icon: <Code className="h-10 w-10 text-brand-blue" />,
    title: "Integração de Sistemas",
    description: "Conecte suas ferramentas existentes com soluções de IA para um fluxo de trabalho perfeito."
  },
  {
    icon: <Database className="h-10 w-10 text-brand-purple" />,
    title: "IA Personalizada",
    description: "Desenvolvimento de soluções de IA sob medida para necessidades específicas da sua empresa."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções de Automação</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de serviços de automação inteligente para transformar sua operação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="pt-6">
                <div className="mb-5 inline-flex p-3 rounded-lg bg-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
