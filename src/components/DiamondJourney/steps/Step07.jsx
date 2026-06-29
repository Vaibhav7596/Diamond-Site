import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { ArrowRight, Lock, EyeOff, Umbrella, ShieldCheck, Map, CheckCircle, Package, Box, Truck, Shield } from 'lucide-react';

const Step07 = ({ onNext }) => {
  const data = journeyData[7];
  
  // Feature icons
  const featureIcons = [Lock, EyeOff, Umbrella, ShieldCheck, Map];
  
  // Process step icons
  const processIcons = [Shield, Lock, EyeOff, Box, Truck];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full"
    >
      {/* Top Row: Info | Hero Image | Packaging Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Info Block */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-4">
          <div className="text-gold-primary tracking-widest text-xs font-serif uppercase mb-6">
            STEP 07 / 08
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
        <div className="lg:col-span-4 lg:col-span-5 relative">
           <img src="/journey/7/hero.png" alt="Secure Packaging" className="w-full h-[300px] object-cover rounded-xl bg-luxury-bg border border-luxury-border" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        {/* Right: Packaging Overview (Layers) */}
        <div className="lg:col-span-3 flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">Packaging Overview</h3>
           <div className="flex flex-col gap-4 relative">
              {data.layers.map((layer, idx) => (
                <div key={idx} className="flex items-center gap-4 relative z-10">
                   <div className="w-8 h-8 rounded border border-gold-primary/30 flex items-center justify-center bg-luxury-bg flex-shrink-0">
                     <Package className="text-gold-primary" size={14} />
                   </div>
                   <span className="text-xs text-luxury-text-sec">{layer}</span>
                </div>
              ))}
              {/* Connecting line behind icons */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gold-primary/20 z-0"></div>
           </div>
        </div>
      </div>

      {/* Middle Row: Our Packaging Process */}
      <div className="flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5">
         <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">Our Packaging Process</h3>
         <div className="flex items-start justify-between overflow-x-auto gap-4">
            {data.process.map((step, idx) => {
              const Icon = processIcons[idx];
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col min-w-[120px] max-w-[160px]">
                    <div className="w-full aspect-video rounded border border-luxury-border bg-luxury-card flex items-center justify-center mb-4">
                       <Icon className="text-gold-primary/60" size={32} strokeWidth={1} />
                    </div>
                    <span className="text-[10px] text-gold-primary uppercase tracking-widest mb-2 font-medium">{step.title}</span>
                    <span className="text-[10px] text-luxury-text-sec leading-snug">{step.text}</span>
                  </div>
                  {idx < data.process.length - 1 && (
                    <div className="text-luxury-text-sec opacity-60 mt-10 px-2">→</div>
                  )}
                </React.Fragment>
              );
            })}
         </div>
      </div>

      {/* Bottom Row: Features | Why It Stands Out */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: 5 Features */}
        <div className="lg:col-span-8 flex flex-col">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {data.features.map((feature, idx) => {
                const Icon = featureIcons[idx];
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                     <div className="w-12 h-12 rounded-lg border border-gold-primary/30 flex items-center justify-center mb-3 group hover:bg-gold-primary/10 transition-colors">
                       <Icon className="text-gold-primary" size={20} strokeWidth={1.5} />
                     </div>
                     <span className="text-[9px] text-luxury-text uppercase tracking-widest mb-2 leading-tight h-6 flex items-center justify-center">{feature.title}</span>
                     <span className="text-[9px] text-luxury-text-sec opacity-80 leading-snug">{feature.text}</span>
                  </div>
                );
              })}
           </div>
        </div>

        {/* Right: Why Our Packaging Stands Out */}
        <div className="lg:col-span-4 flex flex-col justify-between">
           <div className="flex flex-col">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-4">Why Our Packaging Stands Out</h3>
              <div className="flex flex-col gap-3">
                 {data.standsOut.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-luxury-text-sec">{item}</span>
                   </div>
                 ))}
              </div>
           </div>

           
        </div>

      </div>
      
      
    </motion.div>
  );
};

export default Step07;
