import React from 'react';
import { motion } from 'framer-motion';

const MetricsPanel = ({ title, metrics }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-sidebar border border-white/5 rounded-[14px] flex flex-col w-full min-w-[290px]"
    >
      <div className="px-5 py-4 border-b border-white/5">
        <h4 className="text-[14px] text-gold-primary tracking-widest uppercase font-semibold">
          {title}
        </h4>
      </div>
      
      <div className="flex flex-col">
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className={`flex justify-between items-center px-5 py-3.5 
              ${idx !== metrics.length - 1 ? 'border-b border-white/5' : ''}`}
          >
            <span className="text-[14px] text-gray-400 font-medium">
              {metric.label}
            </span>
            <span className="text-[14px] text-white font-semibold">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MetricsPanel;
