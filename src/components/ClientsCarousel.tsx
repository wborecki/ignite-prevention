import logoConstrutora from "@/assets/clients/construtora-sul.png";
import logoAtlantico from "@/assets/clients/grupo-atlantico.png";
import logoMarinas from "@/assets/clients/hotel-marinas.png";
import logoFarma from "@/assets/clients/rede-farma.png";
import logoLogistica from "@/assets/clients/logistica-express.png";
import logoShopping from "@/assets/clients/shopping-vale.png";
import logoHospital from "@/assets/clients/hospital-sao-lucas.png";
import logoTech from "@/assets/clients/tech-park.png";
import logoBrava from "@/assets/clients/industria-brava.png";
import logoPorto from "@/assets/clients/porto-real.png";

const clients = [
  { name: "Construtora Sul", logo: logoConstrutora },
  { name: "Grupo Atlântico", logo: logoAtlantico },
  { name: "Hotel Marinas", logo: logoMarinas },
  { name: "Rede Farma+", logo: logoFarma },
  { name: "Logística Express", logo: logoLogistica },
  { name: "Shopping Vale", logo: logoShopping },
  { name: "Hospital São Lucas", logo: logoHospital },
  { name: "Tech Park", logo: logoTech },
  { name: "Indústria Brava", logo: logoBrava },
  { name: "Porto Real", logo: logoPorto },
];

const ClientsCarousel = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Clientes que Confiam na WI-Fire
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
