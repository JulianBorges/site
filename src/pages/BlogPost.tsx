
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// This would be replaced with actual Notion API call
const fetchBlogPost = async (slug: string) => {
  // Mock data - to be replaced with Notion API
  const posts = [
    {
      id: "1",
      title: "Revolucionando o Atendimento ao Cliente com IA",
      content: `
        <p>Na era digital atual, o atendimento ao cliente está passando por uma revolução sem precedentes graças à inteligência artificial. A NORA™, nossa assistente virtual desenvolvida pela Doptos, está na vanguarda dessa transformação.</p>
        
        <h2>Como a IA Está Transformando o Atendimento</h2>
        
        <p>A integração da IA no atendimento ao cliente não é apenas uma tendência passageira, mas uma mudança fundamental na forma como as empresas interagem com seus clientes.</p>
        
        <p>Nossa assistente virtual NORA™ utiliza algoritmos avançados de processamento de linguagem natural para compreender as necessidades dos clientes com uma precisão nunca antes vista em sistemas automatizados.</p>
        
        <h2>Benefícios Comprovados</h2>
        
        <p>As empresas que adotaram nossa solução já estão reportando resultados impressionantes:</p>
        
        <ul>
          <li>Redução de 70% no tempo médio de resposta ao cliente</li>
          <li>Aumento de 45% na satisfação do cliente</li>
          <li>Economia de 30% nos custos operacionais</li>
        </ul>
        
        <h2>O Futuro é Colaborativo</h2>
        
        <p>Acreditamos que o futuro do atendimento ao cliente não está na substituição humana, mas na colaboração perfeita entre agentes humanos e assistentes de IA.</p>
        
        <p>A NORA™ foi projetada para potencializar as capacidades humanas, não para substituí-las. Ela lida com consultas repetitivas e de baixa complexidade, permitindo que os atendentes humanos se concentrem em interações de alto valor que requerem empatia e pensamento crítico.</p>
      `,
      date: "2025-05-15",
      author: "Equipe Doptos",
      category: "Inovação",
      readTime: "5 min",
      slug: "revolucionando-atendimento-cliente-ia"
    },
    {
      id: "2",
      title: "5 Estratégias de Vendas Potencializadas por IA",
      content: `
        <p>A inteligência artificial não está apenas mudando como interagimos com a tecnologia, mas também como vendemos produtos e serviços.</p>
        
        <h2>1. Personalização em Escala</h2>
        
        <p>Utilizando algoritmos de IA, é possível personalizar a experiência de cada cliente potencial em uma escala anteriormente impossível.</p>
        
        <h2>2. Previsão de Comportamento do Consumidor</h2>
        
        <p>A IA pode analisar padrões de comportamento e prever quais clientes têm maior probabilidade de comprar, permitindo que as equipes de vendas concentrem seus esforços onde terão maior impacto.</p>
        
        <h2>3. Assistentes Virtuais de Vendas</h2>
        
        <p>Nossa NORA™ representa a próxima geração de assistentes virtuais de vendas, capaz de qualificar leads, responder a perguntas frequentes e até mesmo fechar vendas simples de forma autônoma.</p>
        
        <h2>4. Otimização de Preços Dinâmica</h2>
        
        <p>Sistemas baseados em IA podem ajustar preços em tempo real com base em demanda, disponibilidade e comportamento do consumidor.</p>
        
        <h2>5. Análise Preditiva para Pipeline de Vendas</h2>
        
        <p>A IA pode fornecer previsões mais precisas sobre o pipeline de vendas, ajudando gerentes a tomar decisões estratégicas melhores.</p>
      `,
      date: "2025-05-10",
      author: "Equipe Doptos",
      category: "Estratégia",
      readTime: "7 min",
      slug: "estrategias-vendas-potencializadas-ia"
    },
    {
      id: "3",
      title: "O Futuro do Trabalho: Humanos e IA Colaborando",
      content: `
        <p>O debate sobre IA tem frequentemente se concentrado em extremos: ou ela vai criar um utopia de abundância ou levar à obsolescência humana. A realidade, como sempre, é muito mais nuançada.</p>
        
        <h2>A Era da Colaboração Homem-Máquina</h2>
        
        <p>Estamos entrando em uma era onde o maior valor será criado não por humanos sozinhos ou IA sozinha, mas pela colaboração efetiva entre ambos.</p>
        
        <h2>Redefinindo Trabalho Qualificado</h2>
        
        <p>A IA está nos forçando a reconsiderar o que significa ser "qualificado". Cada vez mais, as habilidades mais valiosas serão aquelas que complementam o que a IA pode fazer.</p>
        
        <h2>O Novo Fluxo de Trabalho</h2>
        
        <p>No futuro próximo, muitos fluxos de trabalho serão redesenhados em torno de um modelo onde humanos e IA trabalham juntos, cada um focando em seus pontos fortes.</p>
        
        <p>Nossa assistente NORA™ foi projetada precisamente com esta visão em mente, atuando como uma colaboradora digital que amplia as capacidades humanas em vez de substituí-las.</p>
        
        <h2>Implicações para Educação e Treinamento</h2>
        
        <p>As instituições educacionais e programas de treinamento corporativo precisarão se adaptar para preparar as pessoas para este novo modelo de trabalho colaborativo.</p>
      `,
      date: "2025-05-05",
      author: "Equipe Doptos",
      category: "Tendências",
      readTime: "6 min",
      slug: "futuro-trabalho-humanos-ia"
    }
  ];
  
  return posts.find(post => post.slug === slug);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchBlogPost(slug || ''),
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="animate-pulse max-w-3xl mx-auto">
            <div className="h-8 bg-white/10 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-white/10 rounded mb-2"></div>
            <div className="h-4 bg-white/10 rounded mb-2 w-5/6"></div>
            <div className="h-64 bg-white/10 rounded my-8"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-12 text-center">
          <h1 className="text-3xl mb-4">Artigo não encontrado</h1>
          <p className="mb-6">O artigo que você procura não existe ou foi removido.</p>
          <Button onClick={() => navigate('/blog')} className="bg-brand-purple hover:bg-brand-purple/90">
            Voltar para o Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white pl-0"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Button>
          </div>
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="text-sm text-brand-purple mb-2">{post.category}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span>{post.author}</span>
              </div>
              <div>
                <span>{post.date} • {post.readTime} de leitura</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-brand-blue via-brand-purple to-brand-lightblue rounded-lg mb-8"></div>
          
          {/* Article Content */}
          <div 
            className="prose prose-invert max-w-none prose-headings:text-brand-purple prose-a:text-brand-blue hover:prose-a:text-brand-lightblue prose-li:marker:text-brand-purple"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share and Tags */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-gray-400">Tags:</span>
              <Button variant="outline" size="sm" className="rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/5">
                Inteligência Artificial
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/5">
                Atendimento ao Cliente
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/5">
                Inovação
              </Button>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* These would be dynamically generated based on related content */}
              <div className="glass-morphism p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm text-brand-purple mb-2">Estratégia</div>
                <h4 className="text-xl font-semibold mb-2">5 Estratégias de Vendas Potencializadas por IA</h4>
                <p className="text-gray-400 line-clamp-2 mb-4">Aprenda como implementar estratégias de vendas avançadas com o auxílio da inteligência artificial.</p>
                <Button 
                  variant="link" 
                  className="text-brand-blue p-0 hover:text-brand-lightblue"
                  onClick={() => navigate('/blog/estrategias-vendas-potencializadas-ia')}
                >
                  Ler artigo
                </Button>
              </div>
              <div className="glass-morphism p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm text-brand-purple mb-2">Tendências</div>
                <h4 className="text-xl font-semibold mb-2">O Futuro do Trabalho: Humanos e IA Colaborando</h4>
                <p className="text-gray-400 line-clamp-2 mb-4">Uma análise sobre como a colaboração entre humanos e inteligência artificial está moldando o futuro do trabalho.</p>
                <Button 
                  variant="link" 
                  className="text-brand-blue p-0 hover:text-brand-lightblue"
                  onClick={() => navigate('/blog/futuro-trabalho-humanos-ia')}
                >
                  Ler artigo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Separator className="bg-white/10" />
      <Footer />
    </div>
  );
};

export default BlogPost;
