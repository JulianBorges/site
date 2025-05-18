
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChatExample from "@/components/ChatExample";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import ChatDialog from "@/components/ChatDialog";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <div className="py-12"></div> {/* Espaçamento ajustado */}
        <Features />
        <div className="py-10"></div> {/* Espaçamento ajustado */}
        <ChatExample />
        <div className="py-10"></div> {/* Espaçamento ajustado */}
        <Cta />
      </main>
      <Footer />
      <ChatDialog />
      <FloatingButton />
    </div>
  );
};

export default Index;
