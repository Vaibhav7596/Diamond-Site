import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveMap = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Larger viewbox: 1000x500
  const nodes = {
    surat:  { x: 620, y: 280, label: 'Surat (Gujarat), India',        desc: 'Global Manufacturing & Export HQ' },
    italy:  { x: 370, y: 185, label: 'Milan / Rome, Italy', desc: '2–3 Days Transit · Duty-Cleared Door-to-Door' },
    france: { x: 300, y: 150, label: 'Paris, France',       desc: '3 Days Transit · Fully Insured Armored Courier' },
    europe: { x: 340, y: 135, label: 'Antwerp / Zurich',    desc: '3–5 Days · Custom Arrangement Across Europe' },
  };

  // Bezier curves
  const pathItaly  = `M ${nodes.surat.x} ${nodes.surat.y} Q 510 200 ${nodes.italy.x} ${nodes.italy.y}`;
  const pathFrance = `M ${nodes.surat.x} ${nodes.surat.y} Q 470 170 ${nodes.france.x} ${nodes.france.y}`;

  const activeItaly  = hoveredNode === 'italy'  || hoveredNode === 'all';
  const activeFrance = hoveredNode === 'france' || hoveredNode === 'all';

  return (
    <div className="w-full bg-luxury-card border border-luxury-card-border rounded-sm relative overflow-hidden shadow-2xl transition-colors duration-500">
      {/* Pulse header */}
      <div className="absolute top-4 left-6 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold">
          Live Export Logistics Network
        </span>
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_55%,_rgba(212,175,55,0.06)_0%,_transparent_65%)] pointer-events-none" />

      {/* SVG Map */}
      <div className="relative w-full" style={{ paddingTop: '50%' }}>
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full select-none"
          style={{ display: 'block' }}
        >
          {/* ── Ocean fill ──────────────────────────────────── */}
          <rect x="0" y="0" width="1000" height="500" fill="transparent" />

          {/* ── Stylised continent outlines ──────────────────── */}

          {/* Europe */}
          <path
            d="M 220 80 Q 250 60 290 70 T 360 65 T 410 85 T 430 120 T 410 155 T 380 185 T 350 205 T 310 210 T 270 195 T 240 170 T 220 140 Z"
            fill="rgba(212,175,55,0.04)"
            stroke="rgba(212,175,55,0.18)"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />

          {/* Indian subcontinent */}
          <path
            d="M 540 185 Q 575 165 625 170 T 700 185 T 720 225 T 700 275 T 660 310 T 625 330 T 590 295 T 560 255 T 540 220 Z"
            fill="rgba(212,175,55,0.04)"
            stroke="rgba(212,175,55,0.18)"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />

          {/* ── Export route: Surat → Italy ───────────────────── */}
          {/* Shadow/glow layer */}
          <motion.path
            d={pathItaly}
            fill="none"
            stroke="#d4af37"
            strokeWidth="4"
            strokeOpacity="0.12"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            style={{ filter: 'blur(4px)' }}
          />
          {/* Base route */}
          <motion.path
            d={pathItaly}
            fill="none"
            stroke={activeItaly ? '#d4af37' : '#a07840'}
            strokeWidth={activeItaly ? 2.5 : 1.8}
            strokeDasharray="6 5"
            className="transition-all duration-400"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
          {/* Animated flowing gold dashes – always on */}
          <motion.path
            d={pathItaly}
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
            strokeDasharray="8 16"
            strokeDashoffset="0"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            style={{ animation: 'mapDash 2s linear infinite' }}
          />

          {/* ── Export route: Surat → France ─────────────────── */}
          <motion.path
            d={pathFrance}
            fill="none"
            stroke="#d4af37"
            strokeWidth="4"
            strokeOpacity="0.12"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.2 }}
            style={{ filter: 'blur(4px)' }}
          />
          <motion.path
            d={pathFrance}
            fill="none"
            stroke={activeFrance ? '#d4af37' : '#a07840'}
            strokeWidth={activeFrance ? 2.5 : 1.8}
            strokeDasharray="6 5"
            className="transition-all duration-400"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.path
            d={pathFrance}
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
            strokeDasharray="8 16"
            strokeDashoffset="0"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.2 }}
            style={{ animation: 'mapDash 2.4s linear infinite' }}
          />

          {/* ═══════════ NODES ═══════════ */}

          {/* ── Surat (Origin) ─────────────────────────────── */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('all')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Outer glow ring */}
            <circle cx={nodes.surat.x} cy={nodes.surat.y} r="28" fill="rgba(212,175,55,0.07)" />
            {/* Animated ping */}
            <circle
              cx={nodes.surat.x}
              cy={nodes.surat.y}
              r="16"
              fill="rgba(212,175,55,0.15)"
              style={{
                transformOrigin: `${nodes.surat.x}px ${nodes.surat.y}px`,
                animation: 'suratPing 2s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
            {/* Mid ring */}
            <circle cx={nodes.surat.x} cy={nodes.surat.y} r="12" fill="rgba(212,175,55,0.2)" />
            {/* Gold diamond shape */}
            <polygon
              points={`${nodes.surat.x},${nodes.surat.y - 10} ${nodes.surat.x + 10},${nodes.surat.y} ${nodes.surat.x},${nodes.surat.y + 10} ${nodes.surat.x - 10},${nodes.surat.y}`}
              fill="#d4af37"
              style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.8))' }}
            />
            {/* Core dot */}
            <circle cx={nodes.surat.x} cy={nodes.surat.y} r="3" fill="#fff8e1" />
          </g>

          {/* Surat label */}
          <g className="pointer-events-none">
            <rect
              x={nodes.surat.x - 32} y={nodes.surat.y + 14}
              width="64" height="16"
              rx="2" fill="rgba(0,0,0,0.65)"
              stroke="rgba(212,175,55,0.35)" strokeWidth="0.7"
            />
            <text
              x={nodes.surat.x} y={nodes.surat.y + 25}
              textAnchor="middle"
              fontSize="9"
              fill="#d4af37"
              fontFamily="serif"
              letterSpacing="2"
              fontWeight="700"
            >
              SURAT
            </text>
          </g>

          {/* ── Italy Node ─────────────────────────────────── */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('italy')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="20"
              fill={activeItaly ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.06)'}
              className="transition-all duration-300"
              style={activeItaly ? { filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' } : {}}
            />
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="10"
              fill={activeItaly ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.12)'}
              className="transition-all duration-300"
            />
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="5"
              fill={activeItaly ? '#d4af37' : '#a07840'}
              className="transition-all duration-300"
              style={activeItaly ? { filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.9))' } : {}}
            />
            <circle cx={nodes.italy.x} cy={nodes.italy.y} r="14"
              stroke={activeItaly ? '#d4af37' : '#7a5c28'}
              strokeWidth={activeItaly ? '1.2' : '0.6'}
              fill="none"
              strokeDasharray="3 3"
              className="transition-all duration-300"
            />
          </g>

          {/* Italy label */}
          <g className="pointer-events-none">
            <rect
              x={nodes.italy.x - 28} y={nodes.italy.y - 28}
              width="56" height="16"
              rx="2"
              fill={activeItaly ? 'rgba(212,175,55,0.9)' : 'rgba(0,0,0,0.65)'}
              stroke="rgba(212,175,55,0.4)" strokeWidth="0.7"
              className="transition-all duration-300"
            />
            <text
              x={nodes.italy.x} y={nodes.italy.y - 17}
              textAnchor="middle"
              fontSize="9"
              fill={activeItaly ? '#1a1200' : '#d4af37'}
              fontFamily="serif"
              letterSpacing="2"
              fontWeight="700"
              className="transition-all duration-300"
            >
              ITALY
            </text>
          </g>

          {/* ── France Node ────────────────────────────────── */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('france')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx={nodes.france.x} cy={nodes.france.y} r="20"
              fill={activeFrance ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.06)'}
              className="transition-all duration-300"
              style={activeFrance ? { filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' } : {}}
            />
            <circle cx={nodes.france.x} cy={nodes.france.y} r="10"
              fill={activeFrance ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.12)'}
              className="transition-all duration-300"
            />
            <circle cx={nodes.france.x} cy={nodes.france.y} r="5"
              fill={activeFrance ? '#d4af37' : '#a07840'}
              className="transition-all duration-300"
              style={activeFrance ? { filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.9))' } : {}}
            />
            <circle cx={nodes.france.x} cy={nodes.france.y} r="14"
              stroke={activeFrance ? '#d4af37' : '#7a5c28'}
              strokeWidth={activeFrance ? '1.2' : '0.6'}
              fill="none"
              strokeDasharray="3 3"
              className="transition-all duration-300"
            />
          </g>

          {/* France label */}
          <g className="pointer-events-none">
            <rect
              x={nodes.france.x - 34} y={nodes.france.y - 28}
              width="68" height="16"
              rx="2"
              fill={activeFrance ? 'rgba(212,175,55,0.9)' : 'rgba(0,0,0,0.65)'}
              stroke="rgba(212,175,55,0.4)" strokeWidth="0.7"
              className="transition-all duration-300"
            />
            <text
              x={nodes.france.x} y={nodes.france.y - 17}
              textAnchor="middle"
              fontSize="9"
              fill={activeFrance ? '#1a1200' : '#d4af37'}
              fontFamily="serif"
              letterSpacing="2"
              fontWeight="700"
              className="transition-all duration-300"
            >
              FRANCE
            </text>
          </g>

          {/* ── Origin label (bottom right) ─────────────────── */}
          <text
            x="970" y="490"
            textAnchor="end"
            fontSize="8"
            fill="rgba(212,175,55,0.35)"
            fontFamily="serif"
            letterSpacing="1"
          >
            SURAT, GUJARAT, INDIA — GLOBAL EXPORT HUB
          </text>
        </svg>
      </div>

      {/* Info board */}
      <div className="px-6 pb-6 pt-3 border-t border-luxury-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 min-h-[52px]">
          <AnimatePresence mode="wait">
            {hoveredNode && hoveredNode !== 'all' ? (
              <motion.div
                key={hoveredNode}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-gold-500 font-serif font-bold">
                  {nodes[hoveredNode].label}
                </h4>
                <p className="text-xs text-luxury-text-sec font-sans mt-0.5 leading-relaxed">
                  {nodes[hoveredNode].desc}
                </p>
              </motion.div>
            ) : hoveredNode === 'all' ? (
              <motion.div
                key="surat"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-gold-500 font-serif font-bold">
                  {nodes.surat.label}
                </h4>
                <p className="text-xs text-luxury-text-sec font-sans mt-0.5 leading-relaxed">
                  {nodes.surat.desc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-luxury-text-sec font-serif font-semibold">
                  Hover nodes to explore routes
                </h4>
                <p className="text-xs text-luxury-text-sec/55 font-sans mt-0.5 leading-relaxed">
                  Direct export connections from Surat to Europe's jewellery capitals.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-shrink-0 text-[10px] tracking-wider text-luxury-text-sec/55 font-sans whitespace-nowrap">
            Air Courier via Malca-Amit &amp; Brinks
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mapDash {
          to { stroke-dashoffset: -48; }
        }
        @keyframes suratPing {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      ` }} />
    </div>
  );
};

export default InteractiveMap;
