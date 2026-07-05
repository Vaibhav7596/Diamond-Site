import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight, ShieldCheck, Eye, Globe, CheckCircle } from 'lucide-react';

const Step06 = ({ onNext }) => {
  const { language } = useLanguage();
  const data = journeyData[language]?.[6] || journeyData.en[6];
  
  // Why Matters icons
  const whyIcons = [CheckCircle, Eye, ShieldCheck, Globe];

  const labImages = [
    "/journey/6/certifications/image.png",
    "/journey/6/certifications/image copy.png",
    "/journey/6/certifications/image copy 2.png",
    "/journey/6/certifications/image copy 3.png",
    "/journey/6/certifications/image copy 4.png"
  ];

  const includesImages = [
    "/journey/6/certification-includes/image.png",
    "/journey/6/certification-includes/image copy.png",
    "/journey/6/certification-includes/image copy 2.png",
    "/journey/6/certification-includes/image copy 3.png",
    "/journey/6/certification-includes/image copy 4.png",
    "/journey/6/certification-includes/image copy 5.png"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full"
    >
      {/* Top Row: Info | Hero Image | Why It Matters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Info Block */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-4">
          <div className="text-gold-primary tracking-widest text-xs font-serif uppercase mb-6">
            STEP 06 / 08
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
           <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src="/journey/6/hero.png" alt="Certification" className="w-full h-[300px] object-cover rounded-xl bg-luxury-bg border border-luxury-border" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        {/* Right: Why Certification Matters */}
        <div className="lg:col-span-3 flex flex-col bg-luxury-bg border border-luxury-border rounded-xl p-5">
           <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.whyTitle || "Why Certification Matters"}</h3>
           <div className="flex flex-col gap-5">
              {data.whyMatters.map((item, idx) => {
                const Icon = whyIcons[idx];
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

      {/* Middle/Bottom Row: Labs & Includes (Left) | Sample Cert (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column (Spans 7 or 8) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
           
           {/* Labs */}
           <div className="flex flex-col">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.labsTitle || "Certified By Leading Laboratories"}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {data.labs.map((lab, idx) => (
                   <div key={idx} className="flex flex-col items-center justify-start text-center">
                      <div className="h-12 mb-3 flex items-center justify-center">
                         <img src={labImages[idx]} alt={lab.abbr} className="max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <span className="text-[9px] text-luxury-text-sec uppercase tracking-widest leading-snug">{lab.name}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Includes */}
           <div className="flex flex-col mt-4">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.includesTitle || "Certification Includes"}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                 {data.includes.map((inc, idx) => (
                   <div key={idx} className="bg-luxury-bg border border-luxury-border rounded-xl p-4 flex flex-col items-center text-center hover:border-gold-primary/50 transition-colors">
                      <div className="w-10 h-10 mb-4 flex items-center justify-center">
                         <img src={includesImages[idx]} alt={inc.title} className="max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <span className="text-[9px] text-luxury-text uppercase tracking-widest mb-2 leading-tight flex items-center justify-center h-8">{inc.title}</span>
                      <span className="text-[10px] text-luxury-text-sec opacity-80 leading-snug">{inc.text}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Column (Spans 4 or 5) - Sample Certificate Preview */}
        <div className="lg:col-span-5 flex flex-col justify-between">
           <div className="flex flex-col">
              <h3 className="text-[10px] text-luxury-text-sec opacity-80 uppercase tracking-widest mb-6">{data.previewTitle || "Sample Certificate Preview"}</h3>
              
              <div className="bg-[#faf9f6] border border-stone-200 text-stone-900 rounded-xl p-5 relative flex flex-col shadow-md">
                 <div className="flex justify-between items-start mb-6">
                    <img src="/journey/6/certifications/image.png" alt="IGI" className="h-8 object-contain opacity-80" onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="text-right">
                       <div className="text-[8px] font-bold tracking-widest uppercase text-stone-900">Laboratory Grown Diamond Report</div>
                       <div className="text-[8px] text-stone-500 mt-1">Report Number: {data.samplePreview.reportNo}</div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                       <div className="flex justify-between border-b border-stone-200 pb-1">
                          <span className="text-[8px] text-stone-500 uppercase">Shape and Cutting Style</span>
                          <span className="text-[9px] font-semibold text-stone-900">{data.samplePreview.shape}</span>
                       </div>
                       <div className="flex justify-between border-b border-stone-200 pb-1">
                          <span className="text-[8px] text-stone-500 uppercase">Measurements</span>
                          <span className="text-[9px] font-semibold text-stone-900">{data.samplePreview.measurements}</span>
                       </div>
                       <div className="flex justify-between border-b border-stone-200 pb-1">
                          <span className="text-[8px] text-stone-500 uppercase">Carat Weight</span>
                          <span className="text-[9px] font-semibold text-stone-900">{data.samplePreview.carat}</span>
                       </div>
                       <div className="flex justify-between border-b border-stone-200 pb-1">
                          <span className="text-[8px] text-stone-500 uppercase">Color Grade</span>
                          <span className="text-[9px] font-semibold text-stone-900">{data.samplePreview.color}</span>
                       </div>
                       <div className="flex justify-between border-b border-stone-200 pb-1">
                          <span className="text-[8px] text-stone-500 uppercase">Clarity Grade</span>
                          <span className="text-[9px] font-semibold text-stone-900">{data.samplePreview.clarity}</span>
                       </div>
                       <div className="flex justify-between border-b border-stone-200 pb-1">
                          <span className="text-[8px] text-stone-500 uppercase">Cut Grade</span>
                          <span className="text-[9px] font-semibold text-stone-900">{data.samplePreview.cut}</span>
                       </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                       {/* Simplified mock proportion diagram */}
                       <div className="relative w-full aspect-[4/3] border border-stone-200 rounded p-2 flex items-center justify-center bg-white">
                          <img src="/journey/3/propotion-excellence.png" alt="Proportions" className="max-w-full max-h-full object-contain opacity-70" onError={(e) => { e.target.style.display = 'none'; }} />
                       </div>
                    </div>
                 </div>

                 <div className="mt-5 text-[7px] text-stone-500 italic border-t border-stone-200 pt-3">
                    This Laboratory Grown Diamond Report includes advanced security features to ensure authenticity.
                 </div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Step06;
