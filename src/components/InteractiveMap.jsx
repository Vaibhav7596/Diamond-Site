import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Map coordinates (800x400 viewbox)
  const nodes = {
    surat: { x: 550, y: 260, label: "Surat, India", desc: "Global Manufacturing & Export HQ" },
    italy: { x: 340, y: 170, label: "Milan/Rome, Italy", desc: "2-3 Days Transit • Duty Cleared Door-to-Door Delivery" },
    france: { x: 280, y: 135, label: "Paris, France", desc: "3 Days Transit • Fully Insured Armored Courier" }
  };

  const pathItaly = `M ${nodes.surat.x} ${nodes.surat.y} Q 440 200 ${nodes.italy.x} ${nodes.italy.y}`;
  const pathFrance = `M ${nodes.surat.x} ${nodes.surat.y} Q 410 180 ${nodes.france.x} ${nodes.france.y}`;

  return (
    <div className="w-full bg-luxury-card border border-luxury-card-border rounded-sm p-6 md:p-8 relative overflow-hidden shadow-2xl transition-colors duration-500">
      {/* Luxury Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent opacity-40 pointer-events-none" />
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold">Live Export Logistics Network</span>
      </div>

      <div className="relative w-full aspect-[2/1] min-h-[300px]">
        <svg viewBox="0 0 800 400" className="w-full h-full select-none text-luxury-text">
          {/* Abstract stylized background grid/continents */}
          {/* Stylized Europe Outline */}
          <path 
            d="M 180 80 Q 220 80 260 90 T 320 80 T 360 110 T 350 160 T 320 200 T 260 210 T 200 170 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="2 4"
            className="opacity-15 text-luxury-text"
          />
          {/* Stylized India/Asia Outline */}
          <path 
            d="M 440 180 Q 480 150 540 160 T 620 180 T 640 220 T 560 290 T 510 320 T 480 280 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="2 4"
            className="opacity-15 text-luxury-text"
          />
          
          {/* Connection Lines (Italy & France) */}
          {/* Surat -> Italy */}
          <motion.path
            d={pathItaly}
            fill="none"
            stroke={hoveredNode === 'italy' || hoveredNode === 'all' ? '#d4af37' : '#c5a880'}
            strokeWidth={hoveredNode === 'italy' ? '2.5' : '1.2'}
            strokeDasharray={hoveredNode === 'italy' ? "none" : "5 5"}
            className="transition-all duration-300"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Surat -> France */}
          <motion.path
            d={pathFrance}
            fill="none"
            stroke={hoveredNode === 'france' || hoveredNode === 'all' ? '#d4af37' : '#c5a880'}
            strokeWidth={hoveredNode === 'france' ? '2.5' : '1.2'}
            strokeDasharray={hoveredNode === 'france' ? "none" : "5 5"}
            className="transition-all duration-300"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Animated dashes flowing out from Surat */}
          <AnimatePresence>
            {(hoveredNode === 'italy' || hoveredNode === 'all') && (
              <path
                d={pathItaly}
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                className="animate-[dash_2s_linear_infinite]"
                style={{
                  strokeDasharray: '6 12',
                }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {(hoveredNode === 'france' || hoveredNode === 'all') && (
              <path
                d={pathFrance}
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                className="animate-[dash_2s_linear_infinite]"
                style={{
                  strokeDasharray: '6 12',
                }}
              />
            )}
          </AnimatePresence>

          {/* Node Rings */}
          {/* Surat Node */}
          <g className="cursor-pointer" onMouseEnter={() => setHoveredNode('all')} onMouseLeave={() => setHoveredNode(null)}>
            <circle cx={nodes.surat.x} cy={nodes.surat.y} r="16" fill="rgba(197,168,128,0.15)" />
            <circle cx={nodes.surat.x} cy={nodes.surat.y} r="8" fill="rgba(197,168,128,0.3)" className="animate-ping" style={{ transformOrigin: `${nodes.surat.x}px ${nodes.surat.y}px` }} />
            {/* Diamond shape SVG for Surat */}
            <polygon 
              points={`${nodes.surat.x},${nodes.surat.y - 6} ${nodes.surat.x + 6},${nodes.surat.y} ${nodes.surat.x},${nodes.surat.y + 6} ${nodes.surat.x - 6},${nodes.surat.y}`}
              fill="#d4af37" 
            />
          </g>

          {/* Italy Node */}
          <g 
            className="cursor-pointer" 
            onMouseEnter={() => setHoveredNode('italy')} 
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="12" fill="rgba(212,175,55,0.1)" />
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="4" fill={hoveredNode === 'italy' ? '#d4af37' : '#c5a880'} className="transition-colors duration-300" />
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="8" stroke="#c5a880" strokeWidth="0.5" fill="none" />
          </g>

          {/* France Node */}
          <g 
            className="cursor-pointer" 
            onMouseEnter={() => setHoveredNode('france')} 
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx={nodes.france.x} cy={nodes.france.y} r="12" fill="rgba(212,175,55,0.1)" />
            <circle cx={nodes.france.x} cy={nodes.france.y} r="4" fill={hoveredNode === 'france' ? '#d4af37' : '#c5a880'} className="transition-colors duration-300" />
            <circle cx={nodes.france.x} cy={nodes.france.y} r="8" stroke="#c5a880" strokeWidth="0.5" fill="none" />
          </g>
        </svg>

        {/* Labels & Tooltips */}
        <div className="absolute pointer-events-none" style={{ left: `${nodes.surat.x - 40}px`, top: `${nodes.surat.y + 12}px` }}>
          <span className="text-[10px] tracking-widest uppercase text-white bg-black/60 px-1.5 py-0.5 border border-gold-500/20 font-serif">SURAT</span>
        </div>
        
        <div className="absolute pointer-events-none" style={{ left: `${nodes.italy.x - 40}px`, top: `${nodes.italy.y - 25}px` }}>
          <span className={`text-[10px] tracking-widest uppercase font-serif px-1.5 py-0.5 border transition-all duration-300 ${
            hoveredNode === 'italy' ? 'text-black bg-gold-400 border-gold-400 font-bold' : 'text-luxury-text-sec bg-luxury-bg/90 border-luxury-border'
          }`}>ITALY</span>
        </div>

        <div className="absolute pointer-events-none" style={{ left: `${nodes.france.x - 45}px`, top: `${nodes.france.y - 25}px` }}>
          <span className={`text-[10px] tracking-widest uppercase font-serif px-1.5 py-0.5 border transition-all duration-300 ${
            hoveredNode === 'france' ? 'text-black bg-gold-400 border-gold-400 font-bold' : 'text-luxury-text-sec bg-luxury-bg/90 border-luxury-border'
          }`}>FRANCE</span>
        </div>
      </div>

      {/* Floating Description Board */}
      <div className="mt-4 pt-4 border-t border-luxury-border min-h-[50px] flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <AnimatePresence mode="wait">
          {hoveredNode && hoveredNode !== 'all' ? (
            <motion.div
              key={hoveredNode}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-left font-serif"
            >
              <h4 className="text-xs uppercase tracking-widest text-gold-500 font-bold">{nodes[hoveredNode].label}</h4>
              <p className="text-xs text-luxury-text-sec font-sans mt-0.5">{nodes[hoveredNode].desc}</p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-left font-serif"
            >
              <h4 className="text-xs uppercase tracking-widest text-luxury-text-sec font-semibold">Hover nodes or paths</h4>
              <p className="text-xs text-luxury-text-sec/60 font-sans mt-0.5">Explore direct export connections from Surat to jewelry cities in Europe.</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-[10px] tracking-wider text-luxury-text-sec/60 font-sans">
          Air Courier transit managed via Malca-Amit & Brinks
        </div>
      </div>

      {/* Inline styles for SVG path animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}} />
    </div>
  );
};

export default InteractiveMap;
