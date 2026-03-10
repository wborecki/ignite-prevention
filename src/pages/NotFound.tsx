import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Página não encontrada | WI-Fire"
        description="A página que você procura não existe ou foi movida."
      />
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            404
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Página não encontrada
          </p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container text-center space-y-6">
          <p className="text-muted-foreground text-lg">
            A página que você procura não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-heading font-bold text-base hover:bg-primary-dark transition-colors"
          >
            Voltar para o início
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
