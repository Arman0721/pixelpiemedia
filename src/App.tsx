import React, { useEffect, Suspense, lazy } from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Navbar from './components/Navbar';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Pricing = lazy(() => import('./components/Pricing'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Preload critical components
    const preloadComponents = async () => {
      const components = [Hero, Services, Portfolio];
      await Promise.all(components.map(component => component()));
    };
    preloadComponents();
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <Services />
          <Portfolio />
          <Pricing />
          <About />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget
        phoneNumber="917500740941"
        message="Hello! How can we help you today?"
        companyName="PIXELPIEMEDIA"
        replyTimeText="Typically replies within an hour"
        className="z-50"
      />
    </div>
  );
}

export default App;