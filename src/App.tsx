import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import { motion, AnimatePresence } from 'framer-motion';
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
    // Simulate loading progress with smoother animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Smooth transition
          return 100;
        }
        return prev + Math.random() * 15 + 5; // More natural progress
      });
    }, 150);

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

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1],
    duration: 0.6
  };

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LoadingBar progress={Math.min(progress, 100)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Suspense 
              fallback={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-screen flex items-center justify-center"
                >
                  <div className="loading-shimmer w-full h-64 rounded-lg"></div>
                </motion.div>
              }
            >
              <Routes>
                <Route path="/" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Home />
                  </motion.div>
                } />
                <Route path="/about" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <About />
                  </motion.div>
                } />
                <Route path="/services" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Services />
                  </motion.div>
                } />
                <Route path="/portfolio" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Portfolio />
                  </motion.div>
                } />
                <Route path="/contact" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Contact />
                  </motion.div>
                } />
                <Route path="/case-studies" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <CaseStudies />
                  </motion.div>
                } />
                <Route path="/privacy-policy" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <PrivacyPolicy />
                  </motion.div>
                } />
                <Route path="/terms-of-service" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <TermsOfService />
                  </motion.div>
                } />
                <Route path="/faq" element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <FAQ />
                  </motion.div>
                } />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Suspense fallback={<div className="h-64 loading-shimmer"></div>}>
          <Footer />
        </Suspense>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <WhatsAppWidget
            phoneNumber="917500740941"
            message="Hello! How can we help you today?"
            companyName="PIXELPIEMEDIA"
            replyTimeText="Typically replies within an hour"
            className="z-50"
          />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;