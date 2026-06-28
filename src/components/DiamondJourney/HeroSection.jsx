import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ step, title, subtitle, body, bannerFrom, bannerTo }) => {
  // Using placeholders for now since actual photos are not available in `images/` directory
  const placeholderImage = `https://images.unsplash.com/photo-1599643478524-fb524458f447?q=80&w=800&auto=format&fit=crop`;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[4fr_5.5fr] gap-6 items-center mb-6">
      
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col"
      >
        <span className="text-[15px] text-gold-muted font-medium tracking-[0.12em] uppercase mb-4">
          STEP · {step} / 08
        </span>
        
        <h1 className="text-[48px] md:text-[50px] font-bold text-gray-300 leading-[1.15] mb-2 max-w-[470px]">
          {title}
        </h1>
        
        <h2 className="text-[18px] md:text-[20px] font-medium text-gold-primary uppercase tracking-[0.15em] mb-4">
          {subtitle}
        </h2>
        
        {/* Decorative Divider */}
        <div className="flex items-center w-[70px] mb-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-primary mx-2"></div>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        
        <p className="text-[16px] text-gray-400 leading-[1.85] max-w-[400px]">
          {body}
        </p>

      </motion.div>

      {/* Right Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden"
      >
        <img 
          src={placeholderImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Very subtle shadow / dark overlay on edges for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none" />
      </motion.div>
      
    </section>
  );
};

export default HeroSection;
