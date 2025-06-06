import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface LoadingBarProps {
  progress: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-gradient-to-r from-purple-600 to-cyan-600"
        />
      </div>
      <p className="mt-4 text-gray-400">Loading... {progress}%</p>
    </div>
  );
};

export default LoadingBar;