import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update title dynamically
    document.title = 'PIXELPIEMEDIA | Innovative Digital Solutions & Creative Agency';
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PIXELPIEMEDIA",
      "description": "Leading digital innovation agency specializing in web development, mobile apps, and digital marketing solutions.",
      "url": "https://pixelpiemedia.com",
      "logo": "https://pixelpiemedia.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8171572626",
        "contactType": "customer service",
        "email": "contact@pixelpiemedia.com",
        "areaServed": "Worldwide"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BARFKHANA CHAURAH",
        "addressLocality": "FIROZABAD",
        "postalCode": "283203",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://facebook.com/pixelpiemedia",
        "https://twitter.com/pixelpiemedia",
        "https://linkedin.com/company/pixelpiemedia",
        "https://instagram.com/pixelpiemedia"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;