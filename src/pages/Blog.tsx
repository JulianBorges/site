
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

// Mock data - to be replaced with Notion API integration
const fetchBlogPosts = async () => {
  // This would be replaced with actual Notion API call
  return [
    {
      id: "1",
      title: "Revolucionando o Atendimento ao Cliente com IA",
      excerpt: "Descubra como a NORA™ está transformando a maneira como as empresas interagem com seus clientes.",
      date: "2025-05-15",
      author: "Equipe Doptos",
      category: "Inovação",
      readTime: "5 min",
      slug: "revolucionando-atendimento-cliente-ia"
    },
    {
      id: "2",
      title: "5 Estratégias de Vendas Potencializadas por IA",
      excerpt: "Aprenda como implementar estratégias de vendas avançadas com o auxílio da inteligência artificial.",
      date: "2025-05-10",
      author: "Equipe Doptos",
      category: "Estratégia",
      readTime: "7 min",
      slug: "estrategias-vendas-potencializadas-ia"
    },
    {
      id: "3",
      title: "O Futuro do Trabalho: Humanos e IA Colaborando",
      excerpt: "Uma análise sobre como a colaboração entre humanos e inteligência artificial está moldando o futuro do trabalho.",
      date: "2025-05-05",
      author: "Equipe Doptos",
      category: "Tendências",
      readTime: "6 min",
      slug: "futuro-trabalho-humanos-ia"
    }
  ];
};

// Filter options for blog categories
const categories = ["Todos", "Inovação", "Estratégia", "Tendências", "Tecnologia"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });
  
  // Filter posts by selected category
  const filteredPosts = selectedCategory === "Todos" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Blog Doptos
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tendências e estratégias sobre automação inteligente, vendas e atendimento ao cliente potencializados por IA.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex overflow-x-auto scrollbar-none space-x-2 py-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "bg-brand-purple hover:bg-brand-purple/90 rounded-full"
                : "text-gray-400 hover:text-white hover:bg-white/5 rounded-full"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Featured Post (first post) */}
        {filteredPosts.length > 0 && (
          <div className="mb-16 animate-fade-in">
            <Link to={`/blog/${filteredPosts[0].slug}`} className="block">
              <Card className="glass-morphism overflow-hidden border-0 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-3 aspect-video bg-gradient-to-br from-brand-blue to-brand-purple rounded-l-lg"></div>
                  <div className="md:col-span-2 p-6 flex flex-col justify-center">
                    <div className="text-sm text-brand-purple mb-2">{filteredPosts[0].category}</div>
                    <CardTitle className="text-2xl md:text-3xl mb-3">{filteredPosts[0].title}</CardTitle>
                    <CardDescription className="text-gray-400 mb-6">{filteredPosts[0].excerpt}</CardDescription>
                    <CardFooter className="flex items-center justify-between p-0">
                      <div className="text-sm text-gray-500">{filteredPosts[0].date}</div>
                      <div className="text-sm text-gray-500">{filteredPosts[0].readTime} de leitura</div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}
        
        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="glass-morphism animate-pulse h-80">
                <div className="h-full"></div>
              </Card>
            ))
          ) : filteredPosts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-xl">Nenhum artigo encontrado nesta categoria</p>
            </div>
          ) : (
            // Skip the first post if it's already shown as featured
            filteredPosts.slice(selectedCategory === "Todos" ? 1 : 0).map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="block">
                <Card className="glass-morphism h-full border-0 hover:shadow-lg transition-all duration-300 animate-scale-in">
                  <div className="aspect-video bg-gradient-to-br from-brand-purple/70 to-brand-blue/70 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="text-sm text-brand-purple mb-1">{post.category}</div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-gray-400">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{post.date}</div>
                    <div className="text-sm text-gray-500">{post.readTime} de leitura</div>
                  </CardFooter>
                </Card>
              </Link>
            ))
          )}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-20 py-12 px-6 glass-morphism rounded-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Inscreva-se no Newsletter</h3>
            <p className="text-gray-400 mb-6">Receba os últimos artigos, análises e insights diretamente na sua caixa de entrada</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-grow neo-blur rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent px-4 py-2"
              />
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Separator className="bg-white/10" />
      <Footer />
    </div>
  );
};

export default Blog;
