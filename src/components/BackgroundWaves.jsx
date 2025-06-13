import React from 'react';
import waveBg from '../assets/waves.jpg';

const BackgroundWaves = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img
        src={waveBg}
        alt="Background waves"
        className="w-full h-full object-cover opacity-70"
      />
    </div>
  );
};

export default BackgroundWaves;
