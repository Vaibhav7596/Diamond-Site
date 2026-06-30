import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight, Crosshair, Sparkles, Droplet, Hand, Check, Diamond, ShieldCheck } from 'lucide-react';

const Step04 = ({ onNext }) => {
  const { language } = useLanguage();
  const data = journeyData[language]?.[4] || journeyData.en[4];
  
  // Feature icons
  const featureIcons = [Crosshair, Sparkles, Droplet, Hand];

  const stagesImages = [
    "/journey/4/polishing-stages/image.png",
    "/journey/4/polishing-stages/image copy.png",
    "/journey/4/polishing-stages/image copy 2.png",
    "/journey/4/polishing-stages/image copy 3.png"
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
            STEP 04 / 08
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
           <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src="/journey/4/hero.png" alt="Master Polishing" className="w-full max-h-[280px] object-contain rounded-xl object-cover aspect-[2/1] bg-luxury-bg border border-luxury-border" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      </div>

      {/* Middle Row: Features | Polishing Stages */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: 4 Feature Cards (Horizontal) */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.features.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div key={idx} className="bg-luxury-bg border border-luxury-border rounded-xl p-4 flex flex-col items-center text-center hover:border-gold-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center mb-4">
                  <Icon className="text-gold-primary" size={18} strokeWidth={1.5} />
                </div>
                <h4 className="text-[9px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-3 leading-tight h-6 flex items-center justify-center">{feature.label}</h4>
                <p className="text-[10px] text-luxury-text-sec leading-snug">{feature.text}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Polishing Stages */}
        <div className="lg:col-span-5 flex flex-col justify-between">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-4">{data.stagesTitle || "Polishing Stages"}</h3>
           <div className="flex-1 bg-luxury-bg border border-luxury-border rounded-xl p-5 flex items-center justify-between overflow-x-auto">
              {data.stages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center min-w-[60px]">
                    <div className="w-12 h-12 mb-3">
                       <img src={stagesImages[idx]} alt={stage.title} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="text-[10px] text-luxury-text text-center whitespace-nowrap mb-1">{stage.title}</span>
                    <span className="text-[9px] text-luxury-text-sec opacity-80 text-center">{stage.sub}</span>
                  </div>
                  {idx < data.stages.length - 1 && (
                    <div className="text-luxury-text-sec opacity-60 mb-6 px-1 text-xs">→</div>
                  )}
                </React.Fragment>
              ))}
           </div>
        </div>
      </div>

      {/* Bottom Row: Before/After | Quality Checks | Result */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative mt-2 border-t border-luxury-border pt-5">
        
        {/* Left: Before & After */}
        <div className="flex flex-col">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.beforeAfterTitle || "Before & After Polishing"}</h3>
           <div className="flex-1 flex items-center justify-between gap-4">
              <div className="flex flex-col items-center">
                 <img src="/journey/4/before-after/image.png" alt="Before" className="h-20 object-contain mb-4" onError={(e) => { e.target.style.display = 'none'; }} />
                 <span className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest">{data.beforeLabel || "Before Polishing"}</span>
              </div>
              <div className="text-gold-primary">→</div>
              <div className="flex flex-col items-center">
                 <img src="/journey/4/before-after/image copy.png" alt="After" className="h-24 object-contain mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" onError={(e) => { e.target.style.display = 'none'; }} />
                 <span className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest">{data.afterLabel || "After Polishing"}</span>
              </div>
           </div>
        </div>

        {/* Middle: Polishing Quality Checks */}
        <div className="flex flex-col">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.checksTitle || "Polishing Quality Checks"}</h3>
           <div className="flex flex-col gap-3">
              {data.qualityChecks.map((check, idx) => (
                <div key={idx} className="flex items-center gap-3">
                   <Check size={14} className="text-gold-primary" />
                   <span className="text-sm text-luxury-text-sec">{check}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Right: Result */}
        <div className="flex flex-col relative">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.resultTitle || "Result"}</h3>
           <div className="flex items-center gap-5">
              <img src="/journey/4/result.png" alt="Result" className="w-32 h-32 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="flex flex-col gap-3">
                 {data.results.map((res, idx) => (
                   <div key={idx} className="flex items-center gap-2">
                      <Diamond size={12} className="text-gold-primary" />
                      <span className="text-xs text-luxury-text-sec">{res}</span>
                   </div>
                 ))}
              </div>
           </div>

           
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Step04;
