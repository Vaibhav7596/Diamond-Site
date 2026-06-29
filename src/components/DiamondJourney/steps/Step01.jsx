import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { ArrowRight, Box, Activity, Clock, Gem } from 'lucide-react';

const Step01 = ({ onNext }) => {
  const data = journeyData[1];

  const featureIcons = [Box, Activity, Clock, Gem];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full"
    >
      {/* Top Row: Info | Image | Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: Info Block */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="text-gold-primary tracking-widest text-xs font-serif uppercase mb-6">
            STEP 01 / 08
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

        {/* Center: Hero Image */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden bg-luxury-bg border border-luxury-border p-2">
             <img src="/journey/1/hero.png" alt="Growth Chamber" className="w-full h-[280px] object-cover rounded-xl" />
          </div>
        </div>

        {/* Right: The Growth Process Timeline */}
        <div className="lg:col-span-3 flex flex-col items-center">
           <h3 className="text-luxury-text text-xs tracking-widest uppercase mb-5">The Growth Process</h3>
           <div className="relative flex flex-col items-center gap-5">
              {data.timeline.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 relative z-10">
                   <div className="w-12 h-12 rounded-lg bg-luxury-bg border border-luxury-border flex items-center justify-center p-2">
                     {/* Try to use the provided icons, fallback to nothing if path is tricky */}
                     <img 
                       src={idx === 0 ? "/journey/1/growth-process/image.png" : 
                            idx === 1 ? "/journey/1/growth-process/image copy.png" : 
                            idx === 2 ? "/journey/1/growth-process/image copy 2.png" : 
                            "/journey/1/growth-process/image copy 3.png"} 
                       alt={step.title} 
                       className="w-full h-full object-contain"
                       onError={(e) => { e.target.style.display = 'none'; }}
                     />
                   </div>
                   <span className="text-[10px] text-luxury-text-sec text-center w-24">{step.title}</span>
                   {idx < data.timeline.length - 1 && (
                     <div className="text-luxury-text-sec opacity-60 my-1">↓</div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Middle Row: 4 Features + Specs Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4">
        
        {/* Features Row */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.features.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div key={idx} className="bg-luxury-bg border border-luxury-border rounded-xl p-5 flex flex-col items-center text-center hover:border-gold-primary/50 transition-colors">
                <Icon className="text-gold-primary mb-4" size={28} strokeWidth={1} />
                <h4 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-3">{feature.label}</h4>
                <p className="text-sm text-luxury-text font-medium mb-1">{feature.title}</p>
                <p className="text-xs text-luxury-text-sec">{feature.text}</p>
              </div>
            );
          })}
        </div>

        {/* Specs Table */}
        <div className="lg:col-span-4 bg-luxury-bg border border-luxury-border rounded-xl p-5">
          <h3 className="text-luxury-text text-xs tracking-widest uppercase mb-6">Growth Specifications</h3>
          <div className="flex flex-col gap-3">
            {data.specifications.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-luxury-border last:border-0">
                <span className="text-xs text-luxury-text-sec opacity-80">{spec.label}</span>
                <span className="text-xs text-gold-primary text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: Transformation Banner */}
      <div className="flex items-center justify-center gap-16 md:gap-32 mt-5 border-t border-luxury-border pt-8 relative">
         {/* Left Diamond */}
         <div className="flex flex-col items-center gap-4 z-10 bg-luxury-bg px-4">
            <img src="/journey/1/from-to-section/image.png" className="h-16 object-contain" alt="Seed" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest">From A Microscopic Seed</span>
         </div>

         {/* Dashed line connecting them */}
         <div className="hidden sm:block absolute left-[20%] right-[20%] top-[35%] border-t border-dashed border-gold-primary/30 z-0"></div>

         {/* Right Diamond */}
         <div className="flex flex-col items-center gap-4 z-10 bg-luxury-bg px-4">
            <img src="/journey/1/from-to-section/image copy.png" className="h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" alt="Rough" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest">To A Diamond In The Making</span>
         </div>
      </div>
       {/* Bottom padding spacer */}
    </motion.div>
  );
};

export default Step01;
