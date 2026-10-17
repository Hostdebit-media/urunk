import React from "react";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../../data/blogPosts";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export default function BlogFR() {
  const posts = getBlogPosts(true);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Urunk - Stratégies de Réservation Directe Hôtellerie",
    description:
      "Conseils d'experts et stratégies publicitaires pour hôtels, riads et voyagistes.",
    publisher: {
      "@type": "Organization",
      name: "Urunk",
    },
  };

  return (
    <div className="w-full pb-20">
      <SEO
        title="Blog Marketing Touristique & Réservations Directes | Urunk"
        description="Conseils pratiques, astuces SEO et stratégies publicitaires pour hôtels, riads et agences de voyage cherchant à augmenter leurs réservations directes au Maroc."
        schema={schemaMarkup}
      />

      <section className="bg-bg-alt py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Ressources & Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stratégies & Conseils Hôtellerie
          </h1>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Découvrez comment réduire les commissions des OTA, optimiser votre
            site web et lancer des campagnes publicitaires rentables pour votre
            établissement touristique.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link
              to={`/blog/${post.slug}`}
              key={i}
              className="group bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-sm transition-all flex flex-col h-full border hover:border-accent/40"
            >
              <div className="flex justify-between items-center text-xs font-semibold   mb-4">
                <span className="text-accent">
                  {post.category || "Hôtellerie"}
                </span>
                <span className="text-primary/70 flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-primary/70 text-sm mb-8 line-clamp-3 flex-grow leading-relaxed">
                {post.metaDescription}
              </p>
              <div className="text-sm font-semibold flex items-center gap-1.5 text-accent mt-auto pt-4 border-t border-primary/5">
                Lire l'article complet <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
