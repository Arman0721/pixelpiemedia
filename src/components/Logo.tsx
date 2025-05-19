import React from 'react';
import { Aperture } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Aperture className="h-8 w-8 text-cyan-500 animate-spin-slow" />
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        PIXELPIEMEDIA
      </span>
    </div>
  );
};

export default Logo;