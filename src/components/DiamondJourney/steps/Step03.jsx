import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight, Scissors, Target, Zap, Settings, Hexagon, Crosshair, CheckCircle, Diamond, Check, Scale } from 'lucide-react';

const Step03 = ({ onNext }) => {
  const { language } = useLanguage();
  const data = journeyData[language]?.[3] || journeyData.en[3];
  
  // Left 2x2 feature icons
  const featureIcons = [Scissors, Target, Zap, Settings];
  
  // Stats icons
  const statIcons = [Hexagon, Crosshair, CheckCircle, Zap, CheckCircle];
  
  // Cut quality standards icons
  const qualityIcons = [Check, Diamond, Scale];

  const processImages = [
    "/journey/3/cutting-process/image.png",
    "/journey/3/cutting-process/image copy.png",
    "/journey/3/cutting-process/image copy 2.png",
    "/journey/3/cutting-process/image copy 3.png",
    "/journey/3/cutting-process/image copy 4.png"
  ];

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
            STEP 03 / 08
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

        {/* Right: Hero Image */}
        <div className="lg:col-span-8 relative">
           <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src="/journey/3/hero.png" alt="Expert Cutting" className="w-full max-h-[280px] object-contain rounded-xl object-cover aspect-[2/1] bg-luxury-bg border border-luxury-border" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      </div>

      {/* Middle Row: Features | Cutting Process */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: 2x2 Feature Cards */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          {data.features.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div key={idx} className="bg-luxury-bg border border-luxury-border rounded-xl p-5 flex flex-col items-center text-center hover:border-gold-primary/50 transition-colors">
                <Icon className="text-gold-primary mb-3" size={24} strokeWidth={1} />
                <h4 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-2 leading-tight flex items-center justify-center h-8">{feature.label}</h4>
                <p className="text-xs text-luxury-text-sec leading-snug">{feature.text}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Cutting Process */}
        <div className="lg:col-span-8 flex flex-col justify-between">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-4">{data.processTitle || "Cutting Process"}</h3>
           <div className="flex-1 bg-luxury-bg border border-luxury-border rounded-xl p-5 flex items-center justify-between overflow-x-auto">
              {data.process.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center min-w-[80px]">
                    <div className="w-16 h-16 rounded-full bg-luxury-card border border-luxury-border flex items-center justify-center mb-4 overflow-hidden p-2">
                       <img src={processImages[idx]} alt={step.label} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="text-[10px] text-luxury-text-sec text-center whitespace-nowrap">{step.label}</span>
                  </div>
                  {idx < data.process.length - 1 && (
                    <div className="text-luxury-text-sec opacity-60 mb-6 px-2">→</div>
                  )}
                </React.Fragment>
              ))}
           </div>
        </div>
      </div>

      {/* Lower Middle: Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-luxury-border rounded-xl overflow-hidden bg-luxury-bg">
        {data.statistics.map((stat, idx) => {
          const Icon = statIcons[idx];
          return (
            <div key={idx} className="flex flex-col items-center justify-center p-5 border-b md:border-b-0 border-r last:border-r-0 border-luxury-border group">
               <Icon className="text-gold-primary mb-3 transition-transform group-hover:scale-110" size={24} strokeWidth={1} />
               <span className="text-xl text-luxury-text font-medium mb-1">{stat.value}</span>
               <span className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest text-center">{stat.label}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Row: Proportion Excellence | Cut Quality */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative mt-4">
        
        {/* Left: Proportion Excellence Image */}
        <div className="lg:col-span-7 flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">Proportion Excellence</h3>
           <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
              <img src="/journey/3/propotion-excellence.png" alt="Proportions" className="max-h-[200px] object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
           </div>
        </div>

        {/* Right: Cut Quality Standards */}
        <div className="lg:col-span-5 flex flex-col justify-between">
           <div className="bg-luxury-bg border border-luxury-border rounded-xl p-5 flex-1">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.standardsTitle || "Cut Quality Standards"}</h3>
              <div className="grid grid-cols-3 gap-4 h-full pt-4">
                {data.cutQuality.map((qual, idx) => {
                  const Icon = qualityIcons[idx];
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full border border-gold-primary/30 flex items-center justify-center mb-3">
                        <Icon className="text-gold-primary" size={20} strokeWidth={1} />
                      </div>
                      <span className="text-xs text-luxury-text font-medium mb-1">{qual.label}</span>
                      <span className="text-[10px] text-gold-primary mb-2">{qual.value}</span>
                      <p className="text-[10px] text-luxury-text-sec">{qual.text}</p>
                    </div>
                  );
                })}
              </div>
           </div>
           
           
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Step03;
