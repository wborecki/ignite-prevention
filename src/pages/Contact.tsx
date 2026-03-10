import { useState } from "react";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Olá! Meu nome é ${result.data.name}.\nEmail: ${result.data.email}\nTelefone: ${result.data.phone}\nMensagem: ${result.data.message}`
    );
    window.open(`https://wa.me/5547997689880?text=${text}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp..." });
  };

  return (
    <>
      <SEO
        title="Contato - WI-Fire Engenharia Contra Incêndio Itajaí"
        description="Entre em contato com a WI-Fire para solicitar orçamento de PPCI, AVCB, inspeções e regularizações. Atendemos Itajaí, Balneário Camboriú e toda Santa Catarina."
        keywords="contato WI-Fire, orçamento PPCI, orçamento AVCB, engenharia contra incêndio contato, telefone WI-Fire Itajaí"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://wifire.com.br/" },
          { name: "Contato", url: "https://wifire.com.br/contato" },
        ])}
      />
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Contato
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Fale com a WI-Fire. Estamos prontos para atender você.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">
                Envie uma mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Seu telefone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark font-heading font-bold">
                  Enviar pelo WhatsApp
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Telefone</p>
                    <p className="text-muted-foreground text-sm">(47) 99768-9880</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">wifireengenharia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Endereço</p>
                    <p className="text-muted-foreground text-sm">R. João Américo Watzko, 551 - São Vicente, Itajaí - SC</p>
                  </div>
                </div>
              </div>

              {/* Mapa placeholder */}
              <div className="rounded-lg overflow-hidden border border-border h-64 bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground text-sm">R. João Américo Watzko, 551 - São Vicente, Itajaí - SC</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
