import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../data/blogPosts';
import { ArrowRight, Clock } from 'lucide-react';

export default function BlogIndex() {
  const posts = getBlogPosts(false);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Urunk Tourism Marketing & Direct Booking Blog",
    "description": "Expert advice, SEO tips, and ad strategies for hotels, riads, and tour operators.",
    "publisher": {
      "@type": "Organization",
      "name": "Urunk"
    }
  };

  return (
    <div className="w-full pb-20">
      <SEO 
        title="Hospitality Marketing Blog | Urunk Agency" 
        description="Actionable advice, SEO tips, and ad strategies for hotels, riads, and tour operators looking to increase direct bookings in Morocco & worldwide." 
        schema={schemaMarkup}
      />
      
      <section className="bg-bg-alt py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Insights & Strategy</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hospitality Marketing Insights</h1>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Learn how to reduce OTA commissions, optimize your website, and run high-ROI ad campaigns for your tourism business.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link to={`/en/blog/${post.slug}`} key={i} className="group bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-sm transition-all flex flex-col h-full hover:border-accent/40">
              <div className="flex justify-between items-center text-xs font-semibold   mb-4">
                <span className="text-accent">{post.category || "Hospitality"}</span>
                <span className="text-primary/70 flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h2>
              <p className="text-primary/70 text-sm mb-8 line-clamp-3 flex-grow leading-relaxed">
                {post.metaDescription}
              </p>
              <div className="text-sm font-semibold flex items-center gap-1.5 text-accent mt-auto pt-4 border-t border-primary/5">
                Read full article <ArrowRight size={14}/>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
