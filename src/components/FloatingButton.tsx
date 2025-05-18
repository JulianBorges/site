
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira uma URL de webhook válida",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Trigger n8n webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors", // Handle CORS issues
        body: JSON.stringify({
          source: "Doptos Website",
          timestamp: new Date().toISOString(),
          action: "floating_button_click",
        }),
      });

      toast({
        title: "Sucesso",
        description: "Webhook enviado com sucesso!",
      });
      
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao enviar webhook:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar o webhook. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-purple shadow-lg hover:bg-brand-purple/90 transition-all duration-300 hover:scale-110"
        aria-label="Configurar webhook n8n"
      >
        <img 
          src="/lovable-uploads/25ca8f0b-6483-4c59-b15b-ffd0be1e5606.png" 
          alt="Doptos" 
          className="w-8 h-8" 
        />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <img src="/lovable-uploads/25ca8f0b-6483-4c59-b15b-ffd0be1e5606.png" alt="Doptos" className="h-6 mr-2" />
              Integração com n8n
            </DialogTitle>
            <DialogDescription>
              Configure a URL do webhook do n8n para integração com a Doptos
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL do Webhook n8n</Label>
              <Input
                id="webhook-url"
                placeholder="https://seu-n8n.com/webhook/xyz123"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                Insira a URL do seu webhook criado no n8n para receber dados da Doptos
              </p>
            </div>
            
            <DialogFooter className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={handleCloseModal} disabled={isSubmitting}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Salvar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingButton;
