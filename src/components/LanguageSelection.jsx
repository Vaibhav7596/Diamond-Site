import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSelection = () => {
  const { setLanguage } = useLanguage();

  const options = [
    { code: 'en', name: 'English', flagCode: 'gb' },
    { code: 'it', name: 'Italiano', flagCode: 'it' },
    { code: 'fr', name: 'Français', flagCode: 'fr' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black text-white px-4">
      {/* Background Diamond Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gold-800/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-gold-700/20 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10 max-w-xl"
      >
        {/* Luxury Logo Symbol */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-16 h-16 border-2 border-gold-500 rotate-45 flex items-center justify-center">
            <span className="text-gold-500 font-serif text-2xl -rotate-45 font-semibold">RS</span>
            <div className="absolute -inset-1 border border-gold-300/40 rotate-45"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-3 gold-gradient-text">
          R SUTARIYA EXPORTS
        </h1>
        <p className="text-gold-300 font-serif tracking-widest text-xs uppercase mb-12">
          Surat • Antwerp • Milan • Paris
        </p>
        
        <p className="text-gray-400 font-serif text-lg md:text-xl italic mb-10 tracking-wide">
          Select your language to enter
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
          {options.map((opt, idx) => (
            <motion.button
              key={opt.code}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              onClick={() => setLanguage(opt.code)}
              className="w-full sm:w-36 py-4 px-6 bg-luxury-dark/80 border border-gold-800/60 text-white font-serif hover:border-gold-400 hover:shadow-[0_0_15px_rgba(197,168,128,0.2)] rounded-sm transition-all duration-300 flex flex-col items-center justify-center gap-2 group cursor-pointer"
            >
              <img 
                src={`https://flagcdn.com/${opt.flagCode}.svg`} 
                alt={opt.name} 
                className="w-9 h-6 object-cover rounded-sm group-hover:scale-110 transition-transform duration-300 shadow-md border border-gold-800/40"
              />
              <span className="text-sm tracking-wider uppercase group-hover:text-gold-300 transition-colors duration-300">{opt.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-center text-xs tracking-widest text-gray-600 uppercase font-serif z-10">
        HPHT Lab-Grown Diamond Exporters
      </div>
    </div>
  );
};

export default LanguageSelection;
