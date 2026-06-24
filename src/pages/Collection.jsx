import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, SlidersHorizontal, ChevronRight, MessageSquare, Award } from 'lucide-react';
import { diamondShapes, getShapeImageUrl } from '../data/shapesData';

const Collection = () => {
  const { language, t } = useLanguage();
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrowth, setSelectedGrowth] = useState('all'); // 'all', 'hpht', 'cvd'
  const [selectedCert, setSelectedCert] = useState('all'); // 'all', 'certified', 'non-certified'
  
  // Active Shape State
  const [selectedShapeId, setSelectedShapeId] = useState('round-brilliant');

  // Filtered shapes calculation
  const filteredShapes = useMemo(() => {
    return diamondShapes.filter(shape => {
      const nameMatch = (shape.name[language] || shape.name['en'])
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const growthMatch = selectedGrowth === 'all' || 
        shape.labs.toLowerCase().includes(selectedGrowth.toLowerCase());
      
      const certMatch = selectedCert === 'all' || 
        (selectedCert === 'certified' && shape.certified) ||
        (selectedCert === 'non-certified' && !shape.certified);

      return nameMatch && growthMatch && certMatch;
    });
  }, [searchTerm, selectedGrowth, selectedCert, language]);

  // Adjust active selection if current selection is filtered out
  useEffect(() => {
    if (filteredShapes.length > 0 && !filteredShapes.some(s => s.id === selectedShapeId)) {
      setSelectedShapeId(filteredShapes[0].id);
    }
  }, [filteredShapes, selectedShapeId]);

  // Selected shape object
  const activeShape = useMemo(() => {
    return diamondShapes.find(s => s.id === selectedShapeId) || diamondShapes[0];
  }, [selectedShapeId]);

  // Product Profile Table Data
  const productProfiles = [
    {
      category: "Non-Certified Round Shape",
      clarity: "IF to Pique",
      size: "0.005 Carats to 3 Carats",
      color: "D-H, I-J, K-L",
      certification: "NA"
    },
    {
      category: "Non-Certified Fancy Shape",
      clarity: "VVS to Pique",
      size: "0.005 Carats to 3 Carats",
      color: "D-H, I-J, K-L",
      certification: "NA"
    },
    {
      category: "Certified Round Shape",
      clarity: "IF to SI2",
      size: "0.18 Carats to 3 Carats",
      color: "D-M",
      certification: "GIA / IGI / HRD / NGTC / IIDGR"
    },
    {
      category: "Certified Fancy Shape",
      clarity: "IF to SI2",
      size: "0.30 Carats to 3 Carats",
      color: "D-M",
      certification: "GIA / IGI / HRD / IIDGR"
    },
    {
      category: "Certified Fancy Color",
      clarity: "IF to I2",
      size: "0.20 Carats to 5 Carats",
      color: "Fancy",
      certification: "GI"
    }
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500 min-h-screen">
      
      {/* 1. Header */}
      <section className="relative py-28 md:py-36 bg-luxury-bg-sec border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3">Core Diamond Catalog</span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-wide mb-4 gold-gradient-text uppercase"
          >
            {t('collectionPage.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-sans text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
          >
            {t('collectionPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* 2. Interactive B2B Catalog Panel */}
      <section className="py-16 md:py-24 bg-luxury-bg border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ═══ MOBILE LAYOUT ═══════════════════════════════════════════ */}
          <div className="lg:hidden">

            {/* Sticky Mobile Catalog Header */}
            <div className="sticky top-[68px] z-30 bg-luxury-bg/95 backdrop-blur-md border-b border-luxury-border/60 py-3 -mx-4 px-4 mb-4">
              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-luxury-text-sec/50 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder={language === 'it' ? "Cerca forme (es. Round, Oval, Heart...)" : language === 'fr' ? "Rechercher des formes..." : "Search shapes (e.g. Round, Oval, Heart...)"}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-luxury-bg-sec border border-luxury-border text-xs uppercase tracking-wider text-luxury-text focus:outline-none focus:border-gold-500 rounded-sm"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-text-sec hover:text-white text-xs font-sans"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Horizontal Scroll Selector */}
              <div className="overflow-x-auto scrollbar-none flex gap-2 pb-1">
                {filteredShapes.map((shape) => {
                  const isActive = shape.id === selectedShapeId;
                  const shapeName = shape.name[language] || shape.name['en'];
                  // Simplify shape name for mobile tabs (e.g. "ROUND BRILLIANT CUT" -> "ROUND")
                  const shortName = shapeName.replace(" CUT", "").replace(" 4 STEP", "").replace(" BRILLIANT", "").split(' ')[0];
                  return (
                    <button
                      key={shape.id}
                      onClick={() => {
                        setSelectedShapeId(shape.id);
                      }}
                      className={`shrink-0 px-3 py-1.5 text-[9px] tracking-widest uppercase font-serif border rounded-sm transition-all duration-300 ${
                        isActive 
                          ? 'border-gold-500 bg-gold-500/10 text-gold-500 font-bold' 
                          : 'border-luxury-border bg-luxury-bg-sec/40 text-luxury-text-sec hover:border-gold-500/40'
                      }`}
                    >
                      {shortName}
                    </button>
                  );
                })}
                {filteredShapes.length === 0 && (
                  <span className="text-[10px] text-luxury-text-sec/60 italic py-1.5">
                    {language === 'it' ? "Nessuna forma trovata" : language === 'fr' ? "Aucune forme trouvée" : "No shapes found"}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile: Compact single-card for active shape */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShape.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-luxury-bg-sec border border-luxury-card-border rounded-sm overflow-hidden mb-6"
              >
                {/* Image strip */}
                <div className="flex items-center justify-center bg-luxury-bg relative overflow-hidden" style={{ height: '140px' }}>
                  <div className="absolute w-28 h-28 bg-gold-500/5 rounded-full blur-xl pointer-events-none" />
                  <motion.img
                    src={getShapeImageUrl(activeShape.imageName)}
                    alt={activeShape.name[language] || activeShape.name['en']}
                    className="max-h-[110px] max-w-[55%] object-contain drop-shadow-[0_8px_20px_rgba(150,123,69,0.15)] relative z-10"
                    initial={{ scale: 0.92 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                  {/* Sparkle */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute top-3 right-3 text-gold-500/40 pointer-events-none z-20"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </motion.div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-serif tracking-wider font-bold gold-gradient-text uppercase leading-tight">
                        {activeShape.name[language] || activeShape.name['en']}
                      </h2>
                      <div className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 border border-gold-500/30 bg-gold-500/5 text-gold-500 text-[8px] uppercase tracking-widest font-serif rounded-[2px]">
                        <Award className="w-2 h-2" />
                        HPHT &amp; CVD
                      </div>
                    </div>
                    <span className="text-[9px] text-luxury-text-sec border border-luxury-border px-1.5 py-0.5 rounded-sm font-mono shrink-0">
                      {activeShape.sizeRange}
                    </span>
                  </div>

                  <p className="text-luxury-text-sec text-[11px] leading-relaxed font-sans line-clamp-3">
                    {activeShape.desc[language] || activeShape.desc['en']}
                  </p>

                  {/* Mini spec row */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] font-sans border-t border-luxury-border/50 pt-2.5">
                    <div className="flex flex-col">
                      <span className="text-luxury-text-sec/50 uppercase text-[8px] tracking-widest">Method</span>
                      <strong className="text-luxury-text font-serif">{activeShape.labs}</strong>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-luxury-text-sec/50 uppercase text-[8px] tracking-widest">Certification</span>
                      <strong className="text-luxury-text font-serif">
                        {activeShape.certified ? 'GIA / IGI Certified' : 'Parcel / Sifted'}
                      </strong>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      to="/contact"
                      state={{ shape: activeShape.name.en }}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 border border-gold-500 hover:bg-gold-500 text-gold-500 hover:text-black font-serif text-[9px] uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer font-bold"
                    >
                      {t('collectionPage.requestQuoteBtn') || 'Request Quote'}
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                    <a
                      href={`https://wa.me/919898507686?text=Hello,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(activeShape.name.en)}%20Diamond%20(${encodeURIComponent(activeShape.sizeRange)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 border border-luxury-border bg-luxury-bg hover:bg-gold-500/5 hover:border-gold-500/40 text-luxury-text-sec hover:text-gold-500 font-serif text-[9px] uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile: Filter Bar */}
            <div className="flex flex-wrap gap-2 items-center text-[10px] mb-8">
              <span className="text-luxury-text-sec uppercase tracking-widest font-bold flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-gold-500" /> Filters:
              </span>
              <select 
                value={selectedGrowth} 
                onChange={(e) => setSelectedGrowth(e.target.value)}
                className="bg-luxury-bg-sec border border-luxury-border px-2 py-1.5 uppercase text-[9px] tracking-wider focus:outline-none focus:border-gold-500 text-luxury-text rounded-sm"
              >
                <option value="all">All Methods</option>
                <option value="hpht">HPHT Only</option>
                <option value="cvd">CVD Only</option>
              </select>
              <select 
                value={selectedCert} 
                onChange={(e) => setSelectedCert(e.target.value)}
                className="bg-luxury-bg-sec border border-luxury-border px-2 py-1.5 uppercase text-[9px] tracking-wider focus:outline-none focus:border-gold-500 text-luxury-text rounded-sm"
              >
                <option value="all">All Certifications</option>
                <option value="certified">Certified Only</option>
                <option value="non-certified">Non-Certified</option>
              </select>
            </div>
          </div>

          {/* Main Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: Sidebar Filters & Shapes list (Desktop) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col space-y-6 border-r border-luxury-border/60 pr-6 h-[650px]">
              
              {/* Search */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 block font-bold">Search Catalog</span>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-luxury-text-sec/50 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Shape search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-luxury-bg-sec border border-luxury-border text-[11px] uppercase tracking-wider text-luxury-text focus:outline-none focus:border-gold-500 rounded-sm"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 block font-bold">Growth Method</span>
                  <div className="grid grid-cols-3 gap-1">
                    {['all', 'hpht', 'cvd'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelectedGrowth(m)}
                        className={`py-1.5 text-[9px] uppercase tracking-wider border rounded-[1px] transition-colors duration-200 cursor-pointer ${
                          selectedGrowth === m
                            ? 'border-gold-500 bg-gold-500/10 text-gold-500 font-semibold'
                            : 'border-luxury-border bg-luxury-bg-sec/30 text-luxury-text-sec hover:border-gold-500/20'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 block font-bold">Certification Status</span>
                  <div className="flex flex-col gap-1">
                    {[
                      { val: 'all', label: 'All Listings' },
                      { val: 'certified', label: 'Certified (GIA/IGI)' },
                      { val: 'non-certified', label: 'Non-Certified Parcel' }
                    ].map((c) => (
                      <button
                        key={c.val}
                        onClick={() => setSelectedCert(c.val)}
                        className={`text-left px-3 py-1.5 text-[9px] uppercase tracking-wider border rounded-[1px] transition-colors duration-200 cursor-pointer ${
                          selectedCert === c.val
                            ? 'border-gold-500 bg-gold-500/10 text-gold-500 font-semibold'
                            : 'border-luxury-border bg-luxury-bg-sec/30 text-luxury-text-sec hover:border-gold-500/20'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scrollable Shapes List */}
              <div className="flex-1 flex flex-col space-y-1.5 overflow-y-auto pr-1 select-none">
                <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 block font-bold">Shapes Available ({filteredShapes.length})</span>
                <div className="space-y-1 pr-1 overflow-y-auto flex-1 scrollbar-thin">
                  {filteredShapes.map((shape) => {
                    const isActive = shape.id === selectedShapeId;
                    const shapeName = shape.name[language] || shape.name['en'];
                    return (
                      <button
                        key={shape.id}
                        onClick={() => setSelectedShapeId(shape.id)}
                        className={`w-full flex items-center justify-between p-2.5 border text-left transition-all duration-300 rounded-[1px] cursor-pointer ${
                          isActive
                            ? 'border-gold-500 bg-gold-500/5 text-gold-500'
                            : 'border-luxury-border bg-luxury-bg-sec/20 text-luxury-text-sec hover:border-gold-500/25 hover:text-luxury-text'
                        }`}
                      >
                        <span className="text-[10px] font-semibold tracking-wider uppercase font-serif truncate">{shapeName}</span>
                        {isActive && (
                          <motion.div layoutId="activeShapeIndicator" className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                  {filteredShapes.length === 0 && (
                    <span className="text-xs text-luxury-text-sec/50 italic block py-4 text-center">No shapes match selection filters.</span>
                  )}
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: Large Interactive Image Frame */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center bg-luxury-bg-sec border border-luxury-border rounded-sm p-6 relative min-h-[380px] lg:min-h-[500px]">
              
              {/* Delicate Diamond Sparkle (floating animation) */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 text-gold-500/50 z-20 pointer-events-none"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>

              {/* Luxury Circular Outline Backdrop */}
              <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-gold-500/5 rounded-full z-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] border border-gold-500/5 rounded-full border-dashed" />
              </div>

              {/* Soft Luxury Glow Radial Backdrop */}
              <div className="absolute w-[200px] h-[200px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none z-0" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShape.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={getShapeImageUrl(activeShape.imageName)} 
                    alt={activeShape.name[language]} 
                    className="max-w-[70%] max-h-[320px] md:max-h-[380px] object-contain drop-shadow-[0_15px_45px_rgba(150,123,69,0.15)] filter brightness-95"
                  />

                  {/* LightSweep reflective overlay */}
                  <motion.div 
                    initial={{ left: '-150%' }}
                    animate={{ left: '150%' }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12 pointer-events-none z-20"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT COLUMN: Shape Details Specification Sheet */}
            <div className="col-span-1 lg:col-span-4 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShape.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Category Title & Badge */}
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Category Specs</span>
                    <h2 className="text-2xl md:text-3xl font-serif tracking-wider font-bold gold-gradient-text uppercase mb-3">
                      {activeShape.name[language] || activeShape.name['en']}
                    </h2>
                    
                    {/* B2B Premium Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-gold-500/35 bg-gold-500/5 text-gold-500 text-[8px] uppercase tracking-widest font-serif rounded-[2px] font-bold">
                      <Award className="w-3 h-3 text-gold-500 shrink-0" />
                      Available in HPHT & CVD Lab Grown
                    </div>
                  </div>

                  {/* Multilingual Description */}
                  <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
                    {activeShape.desc[language] || activeShape.desc['en']}
                  </p>

                  {/* Specification List */}
                  <div className="space-y-3 font-sans text-xs pt-4 border-t border-luxury-border/60">
                    <div className="flex justify-between border-b border-luxury-border/40 pb-2">
                      <span className="text-luxury-text-sec/60 uppercase text-[9px] tracking-widest">Available Sizes</span>
                      <strong className="text-luxury-text font-serif text-[11px] font-bold">{activeShape.sizeRange}</strong>
                    </div>
                    
                    <div className="flex justify-between border-b border-luxury-border/40 pb-2">
                      <span className="text-luxury-text-sec/60 uppercase text-[9px] tracking-widest">Growth Methods</span>
                      <strong className="text-luxury-text font-serif text-[11px] font-bold">{activeShape.labs}</strong>
                    </div>

                    <div className="flex justify-between border-b border-luxury-border/40 pb-2">
                      <span className="text-luxury-text-sec/60 uppercase text-[9px] tracking-widest">B2B Standard Certification</span>
                      <strong className="text-luxury-text font-serif text-[11px] font-bold">
                        {activeShape.certified ? "GIA / IGI / HRD / IIDGR Certified" : "Direct Sifted / Parcel Only"}
                      </strong>
                    </div>
                  </div>

                  {/* Calls to Action */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <Link
                      to="/contact"
                      state={{ shape: activeShape.name.en }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-gold-500 hover:border-gold-600 text-gold-500 hover:text-black hover:bg-gold-500 font-serif text-[10px] uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer shadow-sm text-center font-bold"
                    >
                      {t('collectionPage.requestQuoteBtn') || "Request Quote"}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/919898507686?text=Hello,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(activeShape.name.en)}%20Diamond%20sizes%20range%20${encodeURIComponent(activeShape.sizeRange)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-luxury-border bg-luxury-bg-sec hover:bg-gold-500/5 hover:border-gold-500/40 text-luxury-text-sec hover:text-gold-500 font-serif text-[10px] uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer shadow-sm text-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Enquire Now
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Dedicated B2B Product Profile Section */}
      <section className="py-20 md:py-28 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2">Technical Matrix</span>
            <h2 className="text-3xl font-serif tracking-wide mb-4 text-luxury-text uppercase">B2B Product Profiles</h2>
            <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
              Comprehensive inventory matrix covering certified and non-certified parcels of HPHT & CVD lab-grown diamonds for international exporters.
            </p>
          </div>

          {/* Premium B2B Table */}
          <div className="overflow-x-auto border border-luxury-border rounded-sm shadow-md bg-luxury-bg-sec">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="bg-luxury-bg border-b border-luxury-border text-[9px] uppercase tracking-widest text-gold-500 font-serif font-bold">
                  <th className="py-5 px-6">Category</th>
                  <th className="py-5 px-6">Clarity</th>
                  <th className="py-5 px-6">Size Range</th>
                  <th className="py-5 px-6">Color Grading</th>
                  <th className="py-5 px-6">Certification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-border/60">
                {productProfiles.map((row, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-gold-500/5 transition-colors duration-250 text-luxury-text-sec"
                  >
                    <td className="py-4.5 px-6 font-serif font-semibold text-[11px] text-luxury-text uppercase tracking-wider">{row.category}</td>
                    <td className="py-4.5 px-6 font-mono text-[10px]">{row.clarity}</td>
                    <td className="py-4.5 px-6">{row.size}</td>
                    <td className="py-4.5 px-6 font-serif tracking-wide">{row.color}</td>
                    <td className="py-4.5 px-6 font-semibold">
                      {row.certification === 'NA' ? (
                        <span className="text-luxury-text-sec/45 italic">N/A</span>
                      ) : (
                        <span className="text-gold-500 bg-gold-500/5 px-2.5 py-0.5 border border-gold-500/25 rounded-[1px] text-[10px]">
                          {row.certification}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Catalog Footnote */}
          <div className="mt-8 text-center text-luxury-text-sec/60 text-[10px] italic font-sans">
            * Custom layouts, mixed parcels, and customized bulk orders can be processed upon specialized requests. GIA/IGI verification reports are supplied with all certified orders.
          </div>

        </div>
      </section>

    </div>
  );
};

export default Collection;

