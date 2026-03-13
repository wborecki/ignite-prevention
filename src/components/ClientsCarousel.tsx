import logoMagalu from "@/assets/clients/magazine-luiza.png";
import logoRenner from "@/assets/clients/renner.png";
import logoShopee from "@/assets/clients/shopee.png";
import logoCamicado from "@/assets/clients/camicado.png";
import logoFise from "@/assets/clients/fise-fechoplast.png";
import logoSesc from "@/assets/clients/sesc.png";
import logoIntegral from "@/assets/clients/colegio-integral.png";

const clients = [
  { name: "Magazine Luiza", logo: logoMagalu },
  { name: "Renner", logo: logoRenner },
  { name: "Shopee", logo: logoShopee },
  { name: "Camicado", logo: logoCamicado },
  { name: "Fise Fechoplast", logo: logoFise },
  { name: "SESC", logo: logoSesc },
  { name: "Colégio Integral", logo: logoIntegral },
];

const ClientsCarousel = () => {
  return (
    <section className="py-10 md:py-14 bg-background border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Clientes que Confiam na <span className="text-primary uppercase">WI-FIRE</span>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-x gap-12 w-max">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center h-36 px-10 shrink-0 min-w-[260px] group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-32 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
