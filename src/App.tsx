import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Navbar from './components/Navbar';
import LoadingBar from './components/LoadingBar';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const FAQ = lazy(() => import('./pages/FAQ'));
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
          import('./pages/Home'),
          import('./pages/Services'),
          import('./pages/Contact')
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
    <Router>
      <div className="font-sans">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingBar progress={100} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
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
    </Router>
  );
}

export default App;