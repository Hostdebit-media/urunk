import React from 'react';
import SEO from '../../components/SEO';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getBlogPostBySlug, getBlogPosts } from '../../data/blogPosts';
import { ArrowLeft, ArrowRight, Clock, User, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  
  const post = getBlogPostBySlug(slug, isFrench);
  const allPosts = getBlogPosts(isFrench).filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">{isFrench ? "Article Introuvable" : "Article Not Found"}</h1>
        <Link to={isFrench ? "/blog" : "/en/blog"} className="text-accent hover:underline">
          {isFrench ? "Retour au blog" : "Return to Blog"}
        </Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.h1 || post.title,
    "description": post.metaDescription,
    "datePublished": "2026-10-01",
    "dateModified": "2026-10-15",
    "author": {
      "@type": "Organization",
      "name": "Urunk Agency",
      "url": "https://urunk.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urunk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://urunk.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://urunk.com${location.pathname}`
    }
  };

  // Concise SEO Title under 60 characters
  const seoTitle = post.seoTitle || (() => {
    let formattedTitle = post.title.replace(/ \(.*?\)/, '').split(':')[0].trim();
    if (formattedTitle.length > 48) {
      formattedTitle = formattedTitle.substring(0, 48).split(' ').slice(0, -1).join(' ');
    }
    return `${formattedTitle} | Urunk`;
  })();

  return (
    <div className="w-full pb-20">
      <SEO 
        title={seoTitle}
        description={post.metaDescription}
        schema={schema}
      />
      
      {/* Header Banner */}
      <section className="bg-bg-alt py-20 px-6 border-b border-primary/10">
        <div className="max-w-4xl mx-auto">
          <Link to={isFrench ? "/blog" : "/en/blog"} className="text-sm font-medium flex items-center gap-2 text-primary/70 hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16}/> {isFrench ? "Retour à tous les articles" : "Back to all articles"}
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold   text-accent mb-4">
            <span className="bg-accent/10 px-3 py-1 rounded-full">{post.category || "Hospitality"}</span>
            <span className="text-primary/40">•</span>
            <span className="text-primary/70">{post.date}</span>
            <span className="text-primary/40">•</span>
            <span className="text-primary/70 flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary">{post.h1}</h1>

          <div className="flex items-center gap-3 text-sm text-primary/70 pt-2">
            <div className="w-9 h-9 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center">
              U
            </div>
            <div>
              <span className="font-semibold text-primary block">{post.author || "Urunk Agency Team"}</span>
              <span className="text-xs text-primary/70">{isFrench ? "Spécialiste Réservations Directes Hôtellerie" : "Direct Booking & Hotel Marketing Specialist"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <article 
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary prose-p:text-primary/80 prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent-hover prose-li:text-primary/80 prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Action Callout Box */}
        <div className="mt-16 bg-primary p-8 md:p-10 rounded-2xl text-white shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
            {isFrench ? "Prêt à Augmenter Vos Réservations Directes ?" : "Ready to Boost Your Direct Bookings?"}
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed text-sm md:text-base max-w-2xl">
            {isFrench 
              ? "Notre équipe chez Urunk est spécialisée dans la transformation de ces stratégies en revenus réels sans commissions pour les hôtels, riads et voyagistes."
              : "Our team at Urunk specializes in turning these exact strategies into commission-free direct revenue for hotels, riads, and tour operators."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={isFrench ? "/contact" : "/en/contact"} className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium text-center transition-all shadow-md">
              {isFrench ? "Demander une Consultation Gratuite" : "Book a Free Strategy Consultation"}
            </Link>
            <Link to={isFrench ? "/tarifs" : "/en/pricing"} className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium text-center transition-all">
              {isFrench ? "Voir Nos Tarifs Transparents" : "View Transparent Pricing"}
            </Link>
          </div>
        </div>

        {/* Interlinking Section: Related Articles */}
        {allPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-primary/10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {isFrench ? "Articles Connexes" : "Related Insights"}
              </h2>
              <Link to={isFrench ? "/blog" : "/en/blog"} className="text-sm font-semibold text-accent hover:underline flex items-center gap-1">
                {isFrench ? "Voir tous les articles" : "View all articles"} <ArrowRight size={14}/>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {allPosts.map((relPost, idx) => (
                <Link 
                  to={isFrench ? `/blog/${relPost.slug}` : `/en/blog/${relPost.slug}`} 
                  key={idx} 
                  className="group bg-bg-alt border border-primary/10 rounded-2xl p-6 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">{relPost.category}</span>
                    <h3 className="font-bold text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">{relPost.title}</h3>
                  </div>
                  <span className="text-xs text-accent font-semibold flex items-center gap-1 mt-4">
                    {isFrench ? "Lire" : "Read"} <ArrowRight size={12}/>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
