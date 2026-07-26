import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

/**
 * AmbientBackground — Global Luxury Ambient Environment System
 *
 * Renders a fixed background layer behind all website content featuring:
 * - Theme-aware marble/quartz stone grain textures (Dark Obsidian / Light Carrara)
 * - 3D Parallax floating geometric diamond wireframes (Round, Oval, Emerald, Marquise, Heart, Pear, Princess)
 * - Rich ambient gold & silver radial light beams
 * - Slow floating crystal fragments & gold/silver sparkles
 * - Low opacity design that never compromises content readability
 */
const AmbientBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Parallax scroll controls
  const { scrollY } = useScroll();
  const layer1Y = useTransform(scrollY, [0, 4000], [0, -350]);
  const layer2Y = useTransform(scrollY, [0, 4000], [0, 250]);
  const layer3Y = useTransform(scrollY, [0, 4000], [0, -500]);

  const goldStroke = isDark ? '#d4af37' : '#967b45';
  const silverStroke = isDark ? '#c0c0c0' : '#708090';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-700">
      
      {/* ── 1. BASE BACKGROUND & MARBLE TEXTURE LAYER ───────────────── */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? 'bg-[#08090c]' : 'bg-[#faf8f5]'
        }`}
      />

      {/* Subtle Marble / Quartz Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${isDark ? '#d4af37' : '#888'} 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* ── 2. RICH AMBIENT GOLD & PLATINUM GLOW ORBS ───────────────── */}
      {/* Top Right Warm Gold Atmosphere */}
      <div 
        className={`absolute -top-20 -right-20 w-[650px] h-[650px] rounded-full blur-[130px] transition-all duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(150,123,69,0.08)_50%,transparent_75%)]' 
            : 'bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,rgba(200,180,140,0.06)_50%,transparent_75%)]'
        }`} 
      />

      {/* Center Left Deep Quartz Glow */}
      <div 
        className={`absolute top-1/3 -left-32 w-[750px] h-[750px] rounded-full blur-[150px] transition-all duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(195,155,75,0.18)_0%,rgba(120,90,40,0.05)_60%,transparent_80%)]' 
            : 'bg-[radial-gradient(circle,rgba(180,190,220,0.22)_0%,rgba(210,195,170,0.08)_60%,transparent_80%)]'
        }`} 
      />

      {/* Bottom Right Diamond Sheen Glow */}
      <div 
        className={`absolute top-2/3 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_70%)]' 
            : 'bg-[radial-gradient(circle,rgba(200,205,225,0.25)_0%,transparent_70%)]'
        }`} 
      />

      {/* ── 3. PARALLAX LAYER 1: Geometric Diamond Wireframes ────────── */}
      <motion.div style={{ y: layer1Y }} className="absolute inset-0 w-full h-full">
        
        {/* Round Cut Brilliant Wireframe (Top Left) */}
        <svg 
          viewBox="0 0 200 200" 
          className="absolute top-[6%] left-[3%] w-56 sm:w-72 h-56 sm:h-72 opacity-35 dark:opacity-45 animate-[float_14s_ease-in-out_infinite]"
        >
          <defs>
            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldStroke} stopOpacity="0.9" />
              <stop offset="100%" stopColor={goldStroke} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <polygon points="100,15 155,55 155,145 100,185 45,145 45,55" fill="none" stroke="url(#goldGrad1)" strokeWidth="1.2" />
          <polygon points="100,40 135,68 135,132 100,160 65,132 65,68" fill="none" stroke="url(#goldGrad1)" strokeWidth="0.8" strokeDasharray="3 2" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="url(#goldGrad1)" strokeWidth="0.6" />
          <line x1="100" y1="15" x2="100" y2="185" stroke="url(#goldGrad1)" strokeWidth="0.6" />
          <line x1="45" y1="55" x2="155" y2="145" stroke="url(#goldGrad1)" strokeWidth="0.6" />
          <line x1="155" y1="55" x2="45" y2="145" stroke="url(#goldGrad1)" strokeWidth="0.6" />
        </svg>

        {/* Emerald Cut Architectural Wireframe (Middle Right) */}
        <svg 
          viewBox="0 0 160 230" 
          className="absolute top-[35%] right-[4%] w-48 sm:w-64 h-64 sm:h-80 opacity-30 dark:opacity-40 animate-[float_18s_ease-in-out_infinite_2s]"
        >
          <defs>
            <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldStroke} stopOpacity="0.85" />
              <stop offset="100%" stopColor={silverStroke} stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="130" height="200" rx="18" fill="none" stroke="url(#goldGrad2)" strokeWidth="1.2" />
          <rect x="30" y="30" width="100" height="170" rx="12" fill="none" stroke="url(#goldGrad2)" strokeWidth="0.8" />
          <rect x="45" y="45" width="70" height="140" rx="8" fill="none" stroke="url(#goldGrad2)" strokeWidth="0.5" strokeDasharray="4 2" />
          <line x1="15" y1="15" x2="45" y2="45" stroke="url(#goldGrad2)" strokeWidth="0.7" />
          <line x1="145" y1="15" x2="115" y2="45" stroke="url(#goldGrad2)" strokeWidth="0.7" />
          <line x1="15" y1="215" x2="45" y2="185" stroke="url(#goldGrad2)" strokeWidth="0.7" />
          <line x1="145" y1="215" x2="115" y2="185" stroke="url(#goldGrad2)" strokeWidth="0.7" />
        </svg>

        {/* Marquise Cut Navette Wireframe (Lower Left) */}
        <svg 
          viewBox="0 0 160 250" 
          className="absolute top-[68%] left-[5%] w-44 sm:w-60 h-60 sm:h-80 opacity-30 dark:opacity-40 animate-[float_16s_ease-in-out_infinite_4s]"
        >
          <path d="M80,10 Q155,125 80,240 Q5,125 80,10 Z" fill="none" stroke="url(#goldGrad1)" strokeWidth="1.2" />
          <path d="M80,45 Q132,125 80,205 Q28,125 80,45 Z" fill="none" stroke="url(#goldGrad1)" strokeWidth="0.7" strokeDasharray="3 2" />
          <line x1="80" y1="10" x2="80" y2="240" stroke="url(#goldGrad1)" strokeWidth="0.6" />
          <line x1="5" y1="125" x2="155" y2="125" stroke="url(#goldGrad1)" strokeWidth="0.6" />
        </svg>
      </motion.div>

      {/* ── 4. PARALLAX LAYER 2: Floating Fancy Diamond Outlines ──────── */}
      <motion.div style={{ y: layer2Y }} className="absolute inset-0 w-full h-full">
        
        {/* Heart Cut Outline (Upper Right) */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute top-[16%] right-[10%] w-32 sm:w-44 h-32 sm:h-44 opacity-25 dark:opacity-35 animate-[float_12s_ease-in-out_infinite_1s]"
        >
          <path 
            d="M50,30 C50,15 30,10 15,25 C0,40 20,65 50,90 C80,65 100,40 85,25 C70,10 50,15 50,30 Z" 
            fill="none" 
            stroke={goldStroke} 
            strokeWidth="1" 
          />
          <path 
            d="M50,40 C50,28 35,22 23,33 C12,45 28,64 50,82 C72,64 88,45 77,33 C65,22 50,28 50,40 Z" 
            fill="none" 
            stroke={goldStroke} 
            strokeWidth="0.5" 
            strokeDasharray="2 2"
          />
        </svg>

        {/* Pear Teardrop Outline (Middle Center) */}
        <svg 
          viewBox="0 0 100 140" 
          className="absolute top-[48%] left-[46%] w-28 sm:w-40 h-36 sm:h-52 opacity-25 dark:opacity-35 animate-[float_20s_ease-in-out_infinite_3s]"
        >
          <path 
            d="M50,10 C82,60 88,100 50,130 C12,100 18,60 50,10 Z" 
            fill="none" 
            stroke={goldStroke} 
            strokeWidth="1" 
          />
          <path 
            d="M50,28 C72,68 76,98 50,120 C24,98 28,68 50,28 Z" 
            fill="none" 
            stroke={goldStroke} 
            strokeWidth="0.5" 
            strokeDasharray="3 2"
          />
        </svg>

        {/* Princess Cut Square Outline (Lower Right) */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute top-[78%] right-[15%] w-32 sm:w-44 h-32 sm:h-44 opacity-25 dark:opacity-35 animate-[float_15s_ease-in-out_infinite_5s]"
        >
          <rect x="15" y="15" width="70" height="70" fill="none" stroke={goldStroke} strokeWidth="1" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" fill="none" stroke={goldStroke} strokeWidth="0.5" transform="rotate(45 50 50)" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      {/* ── 5. PARALLAX LAYER 3: Diamond Shimmer Sparks & Nodes ───────── */}
      <motion.div style={{ y: layer3Y }} className="absolute inset-0 w-full h-full">
        {[
          { top: '10%', left: '20%', delay: '0s', size: 'w-4 h-4' },
          { top: '24%', left: '82%', delay: '1.2s', size: 'w-5 h-5' },
          { top: '42%', left: '12%', delay: '2.5s', size: 'w-4.5 h-4.5' },
          { top: '60%', left: '78%', delay: '0.7s', size: 'w-4 h-4' },
          { top: '76%', left: '28%', delay: '3.1s', size: 'w-5.5 h-5.5' },
          { top: '88%', left: '86%', delay: '1.8s', size: 'w-4 h-4' },
        ].map((sparkle, idx) => (
          <div 
            key={idx}
            style={{ top: sparkle.top, left: sparkle.left, animationDelay: sparkle.delay }}
            className="absolute flex items-center justify-center opacity-60 dark:opacity-80 animate-[sparkle_3.5s_ease-in-out_infinite]"
          >
            <div className={`w-full h-[1.5px] ${isDark ? 'bg-gold-300' : 'bg-gold-600'} shadow-[0_0_8px_rgba(212,175,55,0.8)]`} />
            <div className={`h-full w-[1.5px] absolute ${isDark ? 'bg-gold-300' : 'bg-gold-600'} shadow-[0_0_8px_rgba(212,175,55,0.8)]`} />
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default AmbientBackground;
