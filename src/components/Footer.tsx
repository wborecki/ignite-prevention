import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Wifi } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-heading font-extrabold text-primary-foreground">
              WI-FIRE
            </span>
            <p className="text-sm leading-relaxed text-background/60">
              Engenharia Contra Incêndio. Soluções completas para a segurança do seu patrimônio.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider">
              Navegação
            </h4>
            {[
              { label: "Home", to: "/" },
              { label: "Soluções", to: "/solucoes" },
              { label: "Sobre", to: "/sobre" },
              { label: "Blog", to: "/blog" },
              { label: "Contato", to: "/contato" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={14} />
              <span>(47) 99768-9880</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={14} />
              <span>wifireengenharia@gmail.com</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>R. João Américo Watzko, 551 - São Vicente, Itajaí - SC</span>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} WI-Fire Engenharia Contra Incêndio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
