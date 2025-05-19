import React, { Suspense, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Box } from '@react-three/drei';

const Scene = () => {
  return (
    <>
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00BCD4"
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Sphere>
      <Torus args={[2, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
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
  return (
    <section id="home" className="relative pt-20 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-cyan-900 opacity-90"></div>
      
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Digital Creativity
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block mt-1"
              >
                Meets Innovation
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-cyan-100 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              We craft immersive digital experiences that push the boundaries of creativity and technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Services <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000"
          >
            <div className="animate-morph bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Innovation Team"
                className="rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Completed', value: '200' },
            { label: 'Years of Innovation', value: '10' },
            { label: 'Creative Minds', value: '30' },
            { label: 'Client Satisfaction', value: '99' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center transform-gpu"
            >
              <motion.p 
                className="text-3xl md:text-4xl font-bold"
              >
                <AnimatedCounter value={stat.value} />
              </motion.p>
              <motion.p className="text-cyan-200 mt-2">
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