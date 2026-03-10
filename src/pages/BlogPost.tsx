import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Voltar ao blog
        </Link>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-heading font-bold mt-8 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-lg font-heading font-semibold mt-6 mb-3">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("| ")) {
        const rows = block.split("\n").filter((r) => !r.startsWith("|--") && !r.startsWith("| --"));
        return (
          <div key={i} className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-secondary">
                  {rows[0]?.split("|").filter(Boolean).map((cell, j) => (
                    <th key={j} className="px-4 py-2 text-left font-semibold border-b border-border">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, ri) => (
                  <tr key={ri}>
                    {row.split("|").filter(Boolean).map((cell, j) => (
                      <td key={j} className="px-4 py-2 border-b border-border">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      if (block.startsWith("- ") || block.startsWith("1. ")) {
        const items = block.split("\n");
        const isOrdered = block.startsWith("1. ");
        const Tag = isOrdered ? "ol" : "ul";
        return (
          <Tag key={i} className={`my-4 space-y-1.5 ${isOrdered ? "list-decimal" : "list-disc"} pl-6`}>
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground leading-relaxed">
                {item.replace(/^[-\d]+\.\s?/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </Tag>
        );
      }
      return (
        <p key={i} className="text-muted-foreground leading-relaxed my-4">
          {block.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });
  };

  return (
    <>
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6"
          >
            <ArrowLeft size={16} />
            Voltar ao blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/50 mb-4">
            <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
            <span>·</span>
            <span>{post.readTime} de leitura</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full max-w-3xl mx-auto h-80 object-cover rounded-lg mb-10"
          />
          <article className="max-w-3xl mx-auto prose-sm">
            {renderContent(post.content)}
          </article>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-12 bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold mb-3">
              Precisa de ajuda com seu projeto?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Entre em contato com a WI-Fire e solicite um orçamento.
            </p>
            <a
              href="https://wa.me/5547997689880?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold text-sm hover:bg-primary-dark transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
