import React from "react";
import SEO from "../../components/SEO";
import { buildArticleSchema, parseIsoDate } from "../../components/SEO/StructuredData";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../../data/blogPosts";
import Section from "../../components/ui/Section";
import Hairline from "../../components/ui/Hairline";

export default function BlogFR() {
  const posts = getBlogPosts(true);

  const schemaMarkup = [
    buildArticleSchema({
      type: "Article",
      url: "https://urunk.com/blog",
      headline: "Blog Marketing Riad : Conseils & Stratégies SEO | Urunk",
      description: "Conseils pratiques, astuces SEO et stratégies publicitaires pour hôtels, riads et agences de voyage cherchant à augmenter leurs réservations directes au Maroc.",
      datePublished: "2026-01-15",
      lang: "fr"
    }),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://urunk.com/blog#blog",
      name: "Blog Urunk - Stratégies de Réservation Directe Hôtellerie",
      description:
        "Conseils d'experts et stratégies publicitaires pour hôtels, riads et voyagistes.",
      url: "https://urunk.com/blog",
      inLanguage: "fr-MA",
      publisher: {
        "@type": "Organization",
        name: "Urunk",
        url: "https://urunk.com",
        logo: {
          "@type": "ImageObject",
          url: "https://urunk.com/logo.png"
        }
      },
      blogPost: posts.slice(0, 10).map((post) => ({
        "@type": "BlogPosting",
        headline: post.h1 || post.title,
        url: `https://urunk.com/blog/${post.slug}`,
        image: post.image
          ? (post.image.startsWith("http") ? post.image : `https://urunk.com${post.image}`)
          : "https://urunk.com/og-image.jpg",
        datePublished: parseIsoDate(post.date),
        author: {
          "@type": "Person",
          name: "J.Mellal",
          url: "https://urunk.com/a-propos"
        }
      }))
    }
  ];

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Blog Marketing Touristique & Réservations Directes | Urunk"
        description="Conseils pratiques, astuces SEO et stratégies publicitaires pour hôtels, riads et agences de voyage cherchant à augmenter leurs réservations directes au Maroc."
        schema={schemaMarkup}
      />

      <Section tone="alt" className="pt-28 md:pt-36 border-b border-border-subtle">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-accent mb-4">Ressources &amp; Expertise</p>
          <h1 className="font-serif text-primary mb-6 text-balance">
            Stratégies &amp; Conseils Hôtellerie
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-[62ch] leading-relaxed">
            Découvrez comment réduire les commissions des OTA, optimiser votre site web et lancer des campagnes publicitaires rentables pour votre établissement touristique.
          </p>
        </div>
      </Section>

      <Section tone="light">
        <Hairline />
        {posts.map((post) => (
          <div key={post.slug}>
            <article className="py-9 md:py-11 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              <div className="md:col-span-3 text-sm text-primary/70 space-y-1">
                <p className="font-medium text-accent">{post.category || "Hôtellerie"}</p>
                <p className="tabular-nums text-xs text-primary/60">{post.readTime}</p>
              </div>
              <div className="md:col-span-9 max-w-[68ch]">
                <h2 className="font-serif text-[26px] leading-snug text-primary mb-3">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-primary/80 leading-relaxed">
                  {post.metaDescription}
                </p>
              </div>
            </article>
            <Hairline />
          </div>
        ))}
      </Section>
    </div>
  );
}
