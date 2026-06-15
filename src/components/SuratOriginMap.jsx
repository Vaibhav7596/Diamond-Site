import React from 'react';
import { MapPin, ShieldCheck, Warehouse, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const SuratOriginMap = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-luxury-card border border-luxury-card-border p-6 md:p-8 rounded-sm shadow-xl relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent opacity-30 pointer-events-none" />

      {/* Left Column: Origin Coordinates & Text */}
      <div className="md:col-span-7 space-y-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-1">Export Hub of India</span>
          <h3 className="text-2xl font-serif tracking-wider text-luxury-text">Surat, Gujarat, India</h3>
          <p className="text-luxury-text-sec text-xs leading-relaxed font-sans mt-3">
            Surat is the global epicenter of diamond cutting and manufacturing. R SUTARIYA EXPORTS operates from this highly specialized diamond zone, combining multi-generational cutting heritage with state-of-the-art HPHT growing facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
          <div className="flex gap-3 items-start p-3 bg-luxury-bg border border-luxury-border rounded-sm">
            <Warehouse className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-luxury-text font-serif font-bold">HPHT Grow Facility</h4>
              <p className="text-luxury-text-sec text-[10px] mt-0.5 leading-relaxed">Thermodynamic press units yielding Type IIa diamonds.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-3 bg-luxury-bg border border-luxury-border rounded-sm">
            <Plane className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-luxury-text font-serif font-bold">Secure Global Air Pipeline</h4>
              <p className="text-luxury-text-sec text-[10px] mt-0.5 leading-relaxed">Direct armored transit from Surat custom offices to Mumbai Air Cargo.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-luxury-border pt-4 text-[10px] text-gold-600 font-serif">
          <ShieldCheck className="w-4 h-4 text-gold-500" />
          <span>Surat Customs & Precious Cargo Customs Cleared Origin</span>
        </div>
      </div>

      {/* Right Column: Localized SVG Map of India focusing on Surat */}
      <div className="md:col-span-5 h-64 w-full bg-luxury-bg border border-luxury-border rounded-sm relative flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 300 300" className="w-full h-full select-none text-luxury-text">
          {/* Schematic outline representing India Subcontinent */}
          <motion.path 
            d="M 120 40 Q 150 20 180 40 T 220 70 T 260 110 T 250 170 T 200 230 L 150 280 L 130 240 Q 80 180 70 140 T 90 80 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.75" 
            strokeDasharray="2 3"
            className="opacity-20"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {/* West Coast / Gujarat highlight contour line */}
          <path 
            d="M 85 130 Q 100 135 110 140 T 100 160 T 80 150" 
            fill="none" 
            stroke="#c5a880" 
            strokeWidth="1.5" 
            className="opacity-40"
          />

          {/* Surat coordinates (X: 95, Y: 145) */}
          <g>
            {/* Pulsating locator ring */}
            <circle cx="95" cy="145" r="16" fill="rgba(212,175,55,0.1)" />
            <motion.circle 
              cx="95" 
              cy="145" 
              r="8" 
              fill="rgba(212,175,55,0.3)" 
              className="origin-[95px_145px]"
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
            {/* Tiny Core Dot */}
            <circle cx="95" cy="145" r="4" fill="#d4af37" />
          </g>

          {/* Location pins details */}
          <text x="110" y="149" className="font-serif text-[8px] uppercase tracking-widest fill-gold-500 font-bold">Surat (Origin)</text>
          <text x="110" y="159" className="font-sans text-[6px]" fill="var(--color-text-secondary)">Gujarat State</text>

          {/* Map Grid Accents */}
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" className="opacity-10" />
          <line x1="150" y1="20" x2="150" y2="280" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" className="opacity-10" />
        </svg>

        {/* Float indicator label */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[8px] text-gray-500 font-sans tracking-wide uppercase">
          <MapPin className="w-2.5 h-2.5 text-gold-500" />
          <span>Coordinates: 21.1702° N, 72.8311° E</span>
        </div>
      </div>
    </div>
  );
};

export default SuratOriginMap;
