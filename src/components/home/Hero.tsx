import React, { Suspense, useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Box } from '@react-three/drei';

const Scene = () => {
  return (
    <>
      <Sphere args={[1, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00BCD4"
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Sphere>
      <Torus args={[2, 0.2, 12, 48]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#9C27B0"
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
      <Box args={[0.5, 0.5, 0.5]} position={[-2, 1, 1]}>
        <meshStandardMaterial
          color="#FF4081"
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    </>
  );
};

const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);
  const isPercentage = value.includes('%');

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.min(Math.floor(numericValue * progress), numericValue));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue, duration]);

  return (
    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      {count}{isPercentage ? '%' : '+'}
    </span>
  );
};

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="home" className="relative pt-20 overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      {isLoaded && (
        <div className="absolute inset-0 opacity-30">
          <Canvas
            camera={{ position: [0, 0, 5] }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.3}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white mb-6 backdrop-blur-sm border border-purple-500/20"
            >
              <Sparkles className="w-5 h-5 mr-2 text-purple-400 animate-pulse-subtle" />
              <span>Transforming Digital Experiences</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent gradient-shift">
                Digital Excellence
              </span>
              <span className="block mt-1">
                Delivered
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-cyan-100 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your business with cutting-edge digital solutions. From stunning websites to powerful mobile apps, we bring your vision to life.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="/services" 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center justify-center group"
              >
                Explore Services 
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a 
                href="/contact" 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(147, 51, 234, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-purple-400 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative perspective-1000"
          >
            <div className="animate-morph bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-1 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl hover-lift">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Innovation Team"
                className="rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Delivered', value: '250' },
            { label: 'Years Experience', value: '12' },
            { label: 'Expert Team', value: '45' },
            { label: 'Client Satisfaction', value: '99' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-center transform-gpu bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover-lift"
            >
              <motion.p 
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <AnimatedCounter value={stat.value} />
              </motion.p>
              <motion.p 
                className="text-cyan-200 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;