import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journeyData } from '../../../data/journeyData';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight, ShieldCheck, Globe, MapPin, Shield, CheckCircle, Plane, Gem, Award } from 'lucide-react';

const Step08 = ({ onNext }) => {
  const { language } = useLanguage();
  const data = journeyData[language]?.[8] || journeyData.en[8];
  
  // Feature icons
  const featureIcons = [ShieldCheck, Globe, MapPin, Shield];
  
  // Stat icons
  const statIcons = [Globe, Plane, CheckCircle, Award, Gem];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full h-full"
    >
      {/* Top Section: Info + Features (Left) | Hero Image (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-start pt-4">
          <div className="text-gold-primary tracking-widest text-xs font-serif uppercase mb-6">
            STEP 08 / 08
          </div>
          <h1 className="text-3xl lg:text-4xl font-serif text-luxury-text uppercase tracking-wide mb-2">
            {data.title}
          </h1>
          <h2 className="text-sm lg:text-base font-medium text-gold-primary uppercase tracking-[0.15em] mb-6">
            {data.subtitle}
          </h2>
          <p className="text-luxury-text-sec text-sm leading-relaxed mt-4 mb-10">
            {data.description}
          </p>

          {/* 2x2 Feature Cards */}
          <div className="grid grid-cols-2 gap-4 mb-5">
             {data.features.map((feature, idx) => {
               const Icon = featureIcons[idx];
               return (
                 <div key={idx} className="bg-luxury-bg border border-luxury-border rounded-xl p-5 flex flex-col text-left hover:border-gold-primary/50 transition-colors">
                    <Icon className="text-gold-primary mb-4" size={24} strokeWidth={1.5} />
                    <h4 className="text-[10px] text-luxury-text-sec uppercase tracking-widest mb-2 leading-tight">{feature.title}</h4>
                    <p className="text-xs text-luxury-text-sec opacity-80 leading-snug">{feature.text}</p>
                 </div>
               );
             })}
          </div>

          <div className="flex justify-start mt-4">
             <Link
               to="/contact"
               className="px-6 py-3 border border-gold-primary/50 text-gold-primary text-xs tracking-widest uppercase rounded flex items-center gap-3 hover:bg-gold-primary/10 transition-colors"
             >
               COMMITMENT TO YOU <ArrowRight size={14} />
             </Link>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-7 relative">
           <div className="w-full h-full rounded-xl overflow-hidden relative group border border-luxury-border">
              <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src="/journey/8/hero.png" alt="Global Delivery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-luxury-bg" onError={(e) => { e.target.style.display = 'none'; }} />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-60 pointer-events-none"></div>
           </div>
        </div>
      </div>

      {/* Bottom Section: 5 Stat Blocks */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-luxury-border rounded-xl overflow-hidden bg-luxury-bg mt-5">
        {data.stats.map((stat, idx) => {
          const Icon = statIcons[idx];
          return (
            <div key={idx} className="flex items-center gap-4 p-5 border-b md:border-b-0 border-r last:border-r-0 border-luxury-border group hover:bg-gold-primary/5 transition-colors">
               <Icon className="text-gold-primary/50 group-hover:text-gold-primary transition-colors flex-shrink-0" size={32} strokeWidth={1} />
               <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl text-luxury-text font-medium mb-1">{stat.value}</span>
                  <span className="text-[9px] text-luxury-text-sec opacity-80 uppercase tracking-widest">{stat.label}</span>
               </div>
            </div>
          );
        })}
      </div>
      
      
    </motion.div>
  );
};

export default Step08;
