const clients = [
  "Construtora Sul",
  "Grupo Atlântico",
  "Hotel Marinas",
  "Rede Farma+",
  "Logística Express",
  "Shopping Vale",
  "Hospital São Lucas",
  "Tech Park",
  "Indústria Brava",
  "Porto Real",
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
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center h-16 px-8 bg-secondary rounded-lg border border-border shrink-0 min-w-[180px]"
            >
              <span className="font-heading font-bold text-sm text-muted-foreground whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
