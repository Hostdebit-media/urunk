import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface JsonLdSchemaProps {
  customSchema?: object | object[];
}

export const mainAgencySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "DigitalMarketingAgency"],
      "@id": "https://urunk.com/#organization",
      "name": "Urunk",
      "legalName": "Urunk Digital Agency",
      "alternateName": "Urunk Agency",
      "url": "https://urunk.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://urunk.com/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://urunk.com/logo.png",
      "description": "High-performance digital agency specializing in website design, Google Ads, Meta Ads, and TripAdvisor Ads for hotels, riads, and growth-focused businesses.",
      "telephone": "+212668802096",
      "email": "contact@urunk.com",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3 Rue El Kadi Lass, Maarif",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20330",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.5855,
        "longitude": -7.6365
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "Country", "name": "Morocco" },
        { "@type": "Country", "name": "France" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "AdministrativeArea", "name": "Worldwide" }
      ],
      "knowsAbout": [
        "Web Design & Development",
        "Search Engine Marketing (SEM)",
        "Google Ads Management",
        "Meta Ads & Paid Social",
        "TripAdvisor Advertising",
        "Hotel Digital Marketing",
        "Direct Booking Engine Integration",
        "Conversion Rate Optimization (CRO)",
        "Search Engine Optimization (SEO)"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+212668802096",
          "contactType": "customer service",
          "email": "contact@urunk.com",
          "availableLanguage": ["English", "French", "Arabic"]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Design & Development",
              "description": "High-converting, responsive website design tailored for hotels, riads, and growth-oriented businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management",
              "description": "Targeted Google Search, Display, and Hotel Ads campaigns for maximum direct reservation ROI."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Meta Ads (Facebook & Instagram)",
              "description": "Visual, high-engagement paid social advertising targeting high-intent travelers and customers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "TripAdvisor Ads Management",
              "description": "Sponsored placements and direct booking link management on TripAdvisor for hospitality brands."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website & Ads Growth Bundle",
              "description": "All-in-one growth suite combining bespoke website creation with multi-channel ad management."
            }
          }
        ]
      },
      "sameAs": [
        "https://facebook.com/urunk",
        "https://instagram.com/urunk",
        "https://linkedin.com/company/urunk"
      ]
    }
  ]
};

export default function JsonLdSchema({ customSchema }: JsonLdSchemaProps) {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

  const langAwareSchema = {
    ...mainAgencySchema,
    "@graph": mainAgencySchema["@graph"].map((item) => {
      if (item["@id"] === "https://urunk.com/#organization") {
        return {
          ...item,
          "description": isFrench
            ? "Agence digitale à haute performance spécialisée dans la création de sites web, Google Ads, Meta Ads et TripAdvisor Ads pour hôtels, riads et entreprises ambitieuses."
            : item.description
        };
      }
      return item;
    })
  };

  const schemasToInject: object[] = [langAwareSchema];
  if (customSchema) {
    if (Array.isArray(customSchema)) {
      schemasToInject.push(...customSchema);
    } else {
      schemasToInject.push(customSchema);
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemasToInject)}
      </script>
    </Helmet>
  );
}
