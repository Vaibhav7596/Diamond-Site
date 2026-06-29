import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, body }) => {
  return (
    <motion.div 
      whileHover={{ y: -4, borderColor: 'rgba(200, 155, 74, 0.4)' }}
      className="bg-card border border-white/10 rounded-[14px] p-5 flex flex-col h-full transition-colors duration-200"
    >
      <div className="w-[30px] h-[30px] flex items-center justify-center text-gold-primary mb-4">
        {Icon && <Icon size={28} strokeWidth={1.5} />}
      </div>
      
      <h3 className="text-[18px] font-semibold text-gold-primary uppercase tracking-wide mb-3">
        {title}
      </h3>
      
      <p className="text-[15px] text-luxury-text-sec leading-snug">
        {body}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
