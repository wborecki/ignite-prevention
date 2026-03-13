import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="text-white/80" style={{ backgroundColor: 'hsl(210, 60%, 20%)' }}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-1">
              <img src={logoIcon} alt="WI-Fire" className="h-10 w-auto" />
              <span className="text-2xl font-heading font-extrabold text-white">
                WI-FIRE
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Engenharia Contra Incêndio. Soluções completas para a segurança do seu patrimônio.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
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
                className="block text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={14} />
              <span>(47) 99768-9880</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={14} />
              <span>contato@wifire-engenharia.com.br</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>R. Gervasio Regis Jr, Lote Q2 - São Vicente, Itajaí - SC</span>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/wifireengenharia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/wifireengenharia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://br.linkedin.com/company/wi-fire-engenharia-contra-inc%C3%AAndio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@wi-fire-engenhariacontrain8045" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} WI-Fire Engenharia Contra Incêndio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
