import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { ArrowRight, Scan, Monitor, Target, Award } from 'lucide-react';

const Step02 = ({ onNext }) => {
  const data = journeyData[2];
  const featureIcons = [Scan, Monitor, Target, Award];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full"
    >
      {/* Top Row: Info | Hero Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Info Block */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-4">
          <div className="text-gold-primary tracking-widest text-xs font-serif uppercase mb-6">
            STEP 02 / 08
          </div>
          <h1 className="text-3xl lg:text-4xl font-serif text-luxury-text uppercase tracking-wide mb-2">
            {data.title}
          </h1>
          <h2 className="text-sm lg:text-base font-medium text-gold-primary uppercase tracking-[0.15em] mb-6">
            {data.subtitle}
          </h2>
          <p className="text-luxury-text-sec text-sm leading-relaxed mt-4">
            {data.description}
          </p>
        </div>

        {/* Right: Hero Image (3D Scan + Planned Cut View) */}
        <div className="lg:col-span-8 relative">
           <img src="/journey/2/hero.png" alt="Precision Planning" className="w-full max-h-[280px] object-contain rounded-xl object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      </div>

      {/* Middle Row: Features (2x2) | Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: 2x2 Feature Cards */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          {data.features.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div key={idx} className="bg-luxury-bg border border-luxury-border rounded-xl p-5 flex flex-col items-center text-center hover:border-gold-primary/50 transition-colors">
                <Icon className="text-gold-primary mb-3" size={24} strokeWidth={1} />
                <h4 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-2 leading-tight h-6 flex items-center justify-center">{feature.label}</h4>
                <p className="text-xs text-luxury-text-sec leading-snug">{feature.text}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Stats Row (5 blocks) */}
        <div className="lg:col-span-8 flex items-end">
           <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-0 border border-luxury-border rounded-xl overflow-hidden bg-luxury-bg">
              {data.yieldEstimates.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-5 border-b md:border-b-0 border-r last:border-r-0 border-luxury-border">
                   <span className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-3">{stat.label}</span>
                   <span className="text-xl text-luxury-text font-medium">{stat.value}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Bottom Row: Cut Diagram | Proportions Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative mt-4">
        
        {/* Left: Cut Diagram Image */}
        <div className="lg:col-span-8 flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">Cut Diagram</h3>
           <div className="flex-1 flex items-center justify-center relative min-h-[250px]">
              <img src="/journey/2/cut-diagram.png" alt="Cut Diagram" className="max-h-[250px] object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
           </div>
        </div>

        {/* Right: Proportions Table & Button */}
        <div className="lg:col-span-4 flex flex-col justify-between">
           <div className="bg-luxury-bg border border-luxury-border rounded-xl p-5">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">Proportions</h3>
              <div className="flex flex-col gap-4">
                {data.proportions.map((prop, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-luxury-border last:border-0">
                    <span className="text-sm text-luxury-text-sec">{prop.label}</span>
                    <span className="text-sm text-gold-primary">{prop.value}</span>
                  </div>
                ))}
              </div>
           </div>
           
           
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Step02;
