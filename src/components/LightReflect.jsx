import React from 'react';

const LightReflect = ({ children }) => {
  return (
    <div className="relative overflow-hidden group w-full h-full rounded-sm">
      {children}
      {/* Brilliant Reflection Sweep Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div 
          className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
          style={{
            animation: 'shine 10s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
      </div>
    </div>
  );
};

export default LightReflect;
