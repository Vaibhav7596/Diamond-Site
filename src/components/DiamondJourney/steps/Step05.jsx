import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight, Microscope, Target, Activity, Disc, Check, Quote } from 'lucide-react';

const Step05 = ({ onNext }) => {
  const { language } = useLanguage();
  const data = journeyData[language]?.[5] || journeyData.en[5];
  
  // Equipment icons
  const equipmentIcons = [Microscope, Target, Activity, Disc];

  const fourCImages = [
    "/journey/5/4c-quality/image.png",
    "/journey/5/4c-quality/image copy.png",
    "/journey/5/4c-quality/image copy 2.png",
    "/journey/5/4c-quality/image copy 3.png"
  ];

  const qualityCheckImages = [
    "/journey/5/quality-check/image.png",
    "/journey/5/quality-check/image copy.png",
    "/journey/5/quality-check/image copy 2.png",
    "/journey/5/quality-check/image copy 3.png",
    "/journey/5/quality-check/image copy 4.png",
    "/journey/5/quality-check/image copy 5.png"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full"
    >
      {/* Top Row: Info | Hero Image | Equipment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Info Block */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-4">
          <div className="text-gold-primary tracking-widest text-xs font-serif uppercase mb-6">
            STEP 05 / 08
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
           <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src="/journey/5/hero.png" alt="Quality Inspection" className="w-full h-[300px] object-cover rounded-xl bg-luxury-bg border border-luxury-border" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        {/* Right: Inspection Equipment */}
        <div className="lg:col-span-3 flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.equipmentTitle || "Inspection Equipment"}</h3>
           <div className="flex flex-col gap-5">
              {data.equipment.map((item, idx) => {
                const Icon = equipmentIcons[idx];
                return (
                  <div key={idx} className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                       <Icon className="text-gold-primary" size={18} strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col pt-1">
                        <span className="text-xs text-luxury-text font-medium mb-1">{item.title}</span>
                        <span className="text-[10px] text-luxury-text-sec">{item.text}</span>
                     </div>
                  </div>
                );
              })}
           </div>
        </div>
      </div>

      {/* Middle Row: 4C Quality Evaluation */}
      <div className="flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5 lg:p-6">
         <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-5 text-center lg:text-left">{data.evalTitle || "4C Quality Evaluation"}</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.evaluations.map((evalItem, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                 <img src={fourCImages[idx]} alt={evalItem.title} className="h-16 mb-6 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                 <h4 className="text-gold-primary text-sm tracking-widest font-medium mb-3">{evalItem.title}</h4>
                 <p className="text-[10px] text-luxury-text-sec leading-relaxed mb-4 min-h-[40px]">{evalItem.text}</p>
                 <span className="text-xs text-[#6DD381] font-bold tracking-wider uppercase">{evalItem.grade}</span>
              </div>
            ))}
         </div>
      </div>

      {/* Bottom Row: Internal Checks Workflow | Promise & Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">
        
        {/* Left: Internal & External Quality Checks */}
        <div className="lg:col-span-8 flex flex-col justify-between">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.checksTitle || "Internal & External Quality Checks"}</h3>
           <div className="flex-1 bg-luxury-bg border border-luxury-border rounded-xl p-5 flex items-center justify-between overflow-x-auto">
              {data.internalChecks.map((check, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center min-w-[70px]">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                       <img src={qualityCheckImages[idx]} alt={check.title} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="text-[9px] text-luxury-text text-center font-medium uppercase tracking-wider mb-2 leading-tight h-8 flex items-center">{check.title}</span>
                    <span className="text-[9px] text-luxury-text-sec opacity-80 text-center leading-tight">{check.text}</span>
                  </div>
                  {idx < data.internalChecks.length - 1 && (
                    <div className="text-gold-primary/50 mb-10 px-2 text-sm">→</div>
                  )}
                </React.Fragment>
              ))}
           </div>
        </div>

        {/* Right: Promise & Gemologist Quote */}
        <div className="lg:col-span-4 flex flex-col gap-5">
           <div className="bg-luxury-bg border border-luxury-border rounded-xl p-5">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-5">{data.promiseTitle || "Our Quality Promise"}</h3>
              <div className="flex flex-col gap-3">
                 {data.promise.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-3">
                      <Check size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-luxury-text-sec">{item}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-luxury-card border border-luxury-border rounded-xl p-5 flex flex-col flex-1 relative">
              <Quote className="text-gold-primary/20 absolute right-4 top-4" size={48} />
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-4">Gemological Expertise</h3>
              <p className="text-xs text-luxury-text-sec leading-relaxed italic mb-4 relative z-10">"{data.quote}"</p>
              <div className="mt-auto flex justify-between items-end relative z-10">
                 <span className="text-[10px] text-gold-primary uppercase tracking-widest">— Chief Gemologist</span>
              </div>
           </div>

           
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Step05;
