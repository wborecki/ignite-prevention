import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <section className="bg-foreground text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Blog
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Conteúdos sobre engenharia contra incêndio, normas técnicas e dicas de segurança.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                    <span>·</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
