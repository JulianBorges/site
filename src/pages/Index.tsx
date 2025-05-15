
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChatExample from "@/components/ChatExample";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import ChatDialog from "@/components/ChatDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatExample />
        <Cta />
      </main>
      <Footer />
      <ChatDialog />
    </div>
  );
};

export default Index;
