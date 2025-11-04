import Script from 'next/script'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "São Geraldo",
    "url": "https://saogeraldo.com.br",
    "logo": "https://saogeraldo.com.br/logo.png",
    "description": "Tradição e qualidade em produtos alimentícios",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "Sua Região",
      "addressLocality": "Sua Cidade"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-XX-XXXX-XXXX",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://facebook.com/saogeraldo",
      "https://instagram.com/saogeraldo"
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "São Geraldo",
    "url": "https://saogeraldo.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://saogeraldo.com.br/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </>
  )
}