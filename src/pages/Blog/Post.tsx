import React from 'react';
import SEO from '../../components/SEO';
import { buildArticleSchema, buildFAQPageSchema } from '../../components/SEO/StructuredData';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getBlogPostBySlug } from '../../data/blogPosts';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Hairline from '../../components/ui/Hairline';

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

  const post = getBlogPostBySlug(slug, isFrench);

  if (!post) {
    return (
      <Section tone="light" className="pt-32">
        <div className="max-w-[68ch]">
          <h1 className="font-serif text-primary mb-6">
            {isFrench ? "Article Introuvable" : "Article Not Found"}
          </h1>
          <Link to={isFrench ? "/blog" : "/en/blog"}>
            {isFrench ? "Retour au blog" : "Return to Blog"}
          </Link>
        </div>
      </Section>
    );
  }

  const articleSchema = buildArticleSchema({
    type: 'BlogPosting',
    url: `https://urunk.com${location.pathname}`,
    headline: post.h1 || post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    lang: isFrench ? 'fr' : 'en'
  });

  const schemas: object[] = [articleSchema];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push(
      buildFAQPageSchema(
        post.faqs.map(item => ({ question: item.q, answer: item.a }))
      )
    );
  }

  const seoTitle = post.seoTitle || (() => {
    let formattedTitle = post.title.replace(/ \(.*?\)/, '').split(':')[0].trim();
    if (formattedTitle.length > 48) {
      formattedTitle = formattedTitle.substring(0, 48).split(' ').slice(0, -1).join(' ');
    }
    return `${formattedTitle} | Urunk`;
  })();

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={seoTitle}
        description={post.metaDescription}
        image={post.image}
        type="article"
        schema={schemas}
      />

      {/* Article Header */}
      <Section tone="alt" className="pt-28 md:pt-36 border-b border-border-subtle">
        <div className="max-w-[68ch]">
          <p className="mb-8 text-sm">
            <Link to={isFrench ? "/blog" : "/en/blog"}>
              {isFrench ? "Retour à tous les articles" : "Back to all articles"}
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-primary/70 mb-5">
            <span className="font-medium text-accent">{post.category || "Hospitality"}</span>
            <span>{post.date}</span>
            <span className="tabular-nums">{post.readTime}</span>
          </div>

          <h1 className="font-serif text-primary mb-8 text-balance">{post.h1}</h1>

          <Hairline className="mb-5" />

          <div className="text-sm text-primary/75">
            <span className="font-medium text-primary">
              {post.author || "Urunk Agency Team"}
            </span>
            <span className="block text-xs text-primary/65 mt-0.5">
              {isFrench
                ? "Spécialiste Réservations Directes Hôtellerie"
                : "Direct Booking & Hotel Marketing Specialist"}
            </span>
          </div>
        </div>
      </Section>

      {/* Main Article Body */}
      <Section tone="light">
        <article
          className="prose prose-lg max-w-[68ch] prose-headings:font-serif prose-headings:font-normal prose-headings:text-primary prose-p:text-primary/85 prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent-hover prose-li:text-primary/85 prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Section>

      {/* Action Callout */}
      <Section tone="dark">
        <div className="max-w-[68ch]">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            {isFrench
              ? "Prêt à Augmenter Vos Réservations Directes ?"
              : "Ready to Boost Your Direct Bookings?"}
          </h2>
          <p className="text-bg-light/85 mb-8 leading-relaxed text-lg">
            {isFrench
              ? "Notre équipe chez Urunk est spécialisée dans la transformation de ces stratégies en revenus réels sans commissions pour les hôtels, riads et voyagistes."
              : "Our team at Urunk specializes in turning these exact strategies into commission-free direct revenue for hotels, riads, and tour operators."}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="dark" href={isFrench ? "/contact" : "/en/contact"}>
              {isFrench
                ? "Demander une Consultation Gratuite"
                : "Book a Free Strategy Consultation"}
            </Button>
            <Link
              to={isFrench ? "/tarifs" : "/en/pricing"}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-bg-light/30 text-bg-light hover:bg-bg-light/10 font-medium text-[15px] no-underline transition-colors whitespace-nowrap shrink-0"
            >
              {isFrench ? "Voir Nos Tarifs Transparents" : "View Transparent Pricing"}
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
