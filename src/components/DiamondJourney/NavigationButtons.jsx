import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const NavigationButtons = ({ onPrev, onNext, isFirst, isLast }) => {
  return (
    <div className="flex justify-end items-center gap-5 mt-4 pt-5 border-t border-luxury-border">
      
      {!isFirst && (
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-[14px] font-medium text-luxury-text-sec hover:text-luxury-text transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft size={16} />
          PREVIOUS
        </button>
      )}

      <button
        onClick={onNext}
        className="flex items-center gap-2 bg-gold-primary hover:bg-gold-hover text-black text-[14px] font-bold px-6 py-3 rounded-[8px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,155,74,0.4)] cursor-pointer"
      >
        {isLast ? 'FINISH JOURNEY' : 'NEXT STEP'}
        {!isLast && <ArrowRight size={16} />}
      </button>

    </div>
  );
};

export default NavigationButtons;
