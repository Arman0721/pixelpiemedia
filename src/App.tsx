import React, { useEffect, Suspense, lazy, useState } from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Navbar from './components/Navbar';
import LoadingBar from './components/LoadingBar';

// Lazy load components with loading priority
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Pricing = lazy(() => import('./components/Pricing'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Preload critical components
    const preloadComponents = async () => {
      try {
        await Promise.all([
          import('./components/Hero'),
          import('./components/Services'),
          import('./components/Portfolio')
        ]);
      } catch (error) {
        console.error('Error preloading components:', error);
      }
    };

    preloadComponents();

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingBar progress={progress} />;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingBar progress={100} />}>
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