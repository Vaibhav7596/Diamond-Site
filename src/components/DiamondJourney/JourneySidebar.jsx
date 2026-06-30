import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Settings2, Diamond, ShieldCheck, 
  Search, Award, Package, Globe 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { journeyData } from '../../data/journeyData';

// Fallback for Sparkles since it might conflict or we can just use another Diamond/Star icon
function SparklesIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19"/>
    </svg>
  );
}

const ICONS = [
  Atom, Settings2, Diamond, SparklesIcon, 
  Search, Award, Package, Globe
];

const JourneySidebar = ({ currentStep, onStepSelect }) => {
  const { language } = useLanguage();
  const data = journeyData[language] || journeyData.en;

  const stepsList = [1, 2, 3, 4, 5, 6, 7, 8].map(id => ({
    id,
    label: data[id].title,
    sub: data[id].subtitle
  }));

  return (
    <div className="py-4 px-6 flex flex-col h-full">
      <div className="relative">
        {stepsList.map((step, index) => {
          const Icon = ICONS[index];
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const isUpcoming = currentStep < step.id;
          const isLast = index === stepsList.length - 1;

          return (
            <div 
              key={step.id} 
              className={`relative flex items-start group cursor-pointer mb-5`}
              onClick={() => onStepSelect(step.id)}
            >
              {/* Timeline Connector */}
              {!isLast && (
                <div className="absolute left-5 top-10 w-px h-[calc(100%+20px)] bg-luxury-border overflow-hidden">
                  <motion.div 
                    initial={{ height: "0%" }}
                    animate={{ height: isCompleted ? "100%" : isActive ? "50%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full bg-gold-primary origin-top"
                  />
                </div>
              )}

              {/* Icon Container */}
              <div className="relative z-10 flex-shrink-0 mr-4">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isActive ? 'bg-gold-primary text-black shadow-[0_0_15px_rgba(200,155,74,0.4)]' : 
                    isCompleted ? 'bg-luxury-bg border border-gold-primary text-gold-primary' : 
                    'bg-luxury-bg border border-luxury-border text-luxury-text-sec opacity-80'}
                `}>
                  <Icon size={18} className={isActive ? 'fill-current' : ''} />
                </div>
              </div>

              {/* Text Content */}
              <div className={`
                flex-1 p-3 rounded-xl transition-all duration-300 relative border
                ${isActive ? 'bg-gradient-to-r from-gold-primary/20 to-transparent border-gold-primary/30' : 'bg-transparent border-transparent'}
              `}>
                <div className="flex flex-col">
                  <span className={`
                    text-xs font-serif font-bold uppercase tracking-wider mb-1
                    ${isActive || isCompleted ? 'text-gold-primary' : 'text-luxury-text-sec opacity-80'}
                  `}>
                    Step {String(step.id).padStart(2, '0')}
                  </span>
                  <span className={`
                    text-sm font-semibold 
                    ${isActive ? 'text-luxury-text' : isCompleted ? 'text-luxury-text-sec' : 'text-luxury-text-sec opacity-80'}
                  `}>
                    {step.label}
                  </span>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-xs text-luxury-text-sec overflow-hidden block"
                      >
                        {step.sub}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active Indicator Arrow */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-luxury-bg rotate-45 border-l border-b border-gold-primary/30" 
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneySidebar;
