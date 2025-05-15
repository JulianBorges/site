
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -z-10 top-1/3 left-1/3 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/3 right-1/3 w-1/2 h-1/2 bg-brand-purple/10 rounded-full blur-3xl"></div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg h-40"></div>
                  <div className="bg-brand-blue/10 rounded-lg h-40"></div>
                  <div className="bg-brand-purple/10 rounded-lg h-40"></div>
                  <div className="bg-gray-100 rounded-lg h-40"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="inline-block px-3 py-1 text-sm font-medium text-brand-purple bg-purple-50 rounded-full mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Especialistas em Automação Inteligente</h2>
            <p className="text-gray-600 mb-6">
              Somos uma empresa especializada em desenvolver soluções de automação com inteligência artificial para empresas de todos os portes. Nossa missão é transformar a maneira como as empresas trabalham, tornando-as mais eficientes, produtivas e inovadoras.
            </p>
            <p className="text-gray-600 mb-6">
              Com uma equipe de especialistas em IA, engenharia de software e automação de processos, temos o conhecimento e a experiência necessários para implementar soluções personalizadas para as necessidades específicas do seu negócio.
            </p>
            <p className="text-gray-600 mb-6">
              Já atendemos mais de 100 empresas em diversos setores, desde startups até grandes corporações, ajudando-as a se manterem competitivas na era digital.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-4xl font-bold text-brand-blue">100+</p>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-purple">92%</p>
                <p className="text-gray-600">Satisfação</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-blue">300+</p>
                <p className="text-gray-600">Projetos Entregues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
