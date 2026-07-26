import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ChevronRight, MessageSquare, Award, X, Check } from 'lucide-react';
import { diamondShapes, getShapeImageUrl } from '../data/shapesData';

const Collection = () => {
  const { language, t } = useLanguage();
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrowth, setSelectedGrowth] = useState('all'); // 'all', 'hpht', 'cvd'
  const [selectedCert, setSelectedCert] = useState('all'); // 'all', 'certified', 'non-certified'
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all', 'round', 'fancy'
  
  // Active Shape State
  const [selectedShapeId, setSelectedShapeId] = useState('round-brilliant');

  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const shapeParam = searchParams.get('shape');
    if (shapeParam) {
      const matched = diamondShapes.find(s => s.id.toLowerCase() === shapeParam.toLowerCase());
      if (matched) {
        setSelectedShapeId(matched.id);
        setTimeout(() => {
          const explorerEl = document.getElementById('explorer');
          if (explorerEl) {
            explorerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedShapeId && containerRef.current) {
      const timer = setTimeout(() => {
        const activeEl = containerRef.current.querySelector(`[data-shape-id="${selectedShapeId}"]`);
        if (activeEl) {
          const container = containerRef.current;
          const containerTop = container.getBoundingClientRect().top;
          const elemTop = activeEl.getBoundingClientRect().top;
          const relativeTop = elemTop - containerTop;
          
          container.scrollTo({
            top: container.scrollTop + relativeTop - (container.clientHeight / 2) + (activeEl.clientHeight / 2),
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedShapeId]);


  // B2B Inquiry Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    carats: '',
    quantity: ''
  });
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

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

      const isRound = shape.id.includes('round');
      const categoryMatch = selectedCategory === 'all' ||
        (selectedCategory === 'round' && isRound) ||
        (selectedCategory === 'fancy' && !isRound);

      return nameMatch && growthMatch && certMatch && categoryMatch;
    });
  }, [searchTerm, selectedGrowth, selectedCert, selectedCategory, language]);

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

  // Handle B2B Modal Submission
  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalLoading(true);
    setTimeout(() => {
      setModalLoading(false);
      setModalSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setModalSuccess(false);
        setModalForm({
          name: '',
          company: '',
          email: '',
          whatsapp: '',
          carats: '',
          quantity: ''
        });
      }, 2500);
    }, 1200);
  };

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
    <div className="bg-transparent text-luxury-text transition-colors duration-500 min-h-screen">
      
      {/* 1. Header */}
      <section className="relative py-20 md:py-28 bg-luxury-bg-sec/75 backdrop-blur-md border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-3 font-semibold">Core Diamond Catalog</span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif tracking-wide mb-4 gold-gradient-text uppercase"
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
      <section id="explorer" className="py-12 md:py-20 bg-luxury-bg/70 backdrop-blur-md border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ═══ MOBILE LAYOUT ═══════════════════════════════════════════ */}
          <div className="lg:hidden">

            {/* Sticky Mobile Catalog Header */}
            <div className="sticky top-[64px] z-30 bg-luxury-bg/95 backdrop-blur-md border-b border-luxury-border/60 py-3 -mx-4 px-4 mb-4">
              
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
                  const shortName = shapeName.replace(" CUT", "").replace(" 4 STEP", "").replace(" BRILLIANT", "").split(' ')[0];
                  return (
                    <button
                      key={shape.id}
                      onClick={() => setSelectedShapeId(shape.id)}
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

            {/* Mobile: Compact side-by-side card for active shape */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShape.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-luxury-bg-sec border border-luxury-card-border rounded-sm p-4 mb-4 space-y-4 shadow-lg"
              >
                {/* Compact Grid split */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  
                  {/* Left Column: Image (5 cols) */}
                  <div className="col-span-5 bg-luxury-bg border border-luxury-border p-2 flex items-center justify-center relative overflow-hidden rounded-sm h-[130px] w-full">
                    <div className="absolute w-20 h-20 bg-gold-500/5 rounded-full blur-xl pointer-events-none" />
                    <img
                      src={getShapeImageUrl(activeShape.imageName)}
                      alt={activeShape.name[language] || activeShape.name['en']}
                      className="max-h-[110px] max-w-[85%] object-contain drop-shadow-[0_8px_16px_rgba(150,123,69,0.15)] relative z-10"
                    />
                  </div>

                  {/* Right Column: Specs & CTAs (7 cols) */}
                  <div className="col-span-7 flex flex-col justify-between min-h-[130px]">
                    <div className="space-y-1">
                      <h2 className="text-sm font-serif tracking-wider font-bold gold-gradient-text uppercase leading-tight">
                        {activeShape.name[language] || activeShape.name['en']}
                      </h2>
                      <div className="text-[9px] text-gold-500 font-serif">
                        {activeShape.sizeRange}
                      </div>
                      <div className="text-[8px] text-luxury-text-sec font-mono uppercase">
                        {activeShape.labs} · {activeShape.certified ? 'Certified' : 'Parcel'}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full inline-flex items-center justify-center gap-1 py-1.5 bg-gold-500 text-black font-serif text-[9px] uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer font-bold"
                      >
                        Enquire Now
                      </button>
                      <a
                        href={`https://wa.me/919898507686?text=Hello,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(activeShape.name.en)}%20Diamond.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1 py-1.5 border border-luxury-border bg-luxury-bg text-luxury-text-sec text-[9px] uppercase tracking-widest rounded-sm cursor-pointer font-serif"
                      >
                        <MessageSquare className="w-2.5 h-2.5 text-gold-500" /> WhatsApp
                      </a>
                    </div>
                  </div>

                </div>

                {/* Subtext description */}
                <p className="text-luxury-text-sec text-[10px] leading-relaxed font-sans border-t border-luxury-border/50 pt-2 text-justify">
                  {activeShape.desc[language] || activeShape.desc['en']}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Mobile: Pills Quick Filters */}
            <div className="bg-luxury-card border border-luxury-card-border p-4 rounded-sm space-y-3 mb-6">
              <div className="text-[9px] text-gold-500 font-serif uppercase tracking-widest font-bold">Quick Catalog Filters</div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Shapes' },
                  { id: 'round', label: 'Round Cuts' },
                  { id: 'fancy', label: 'Fancy Cuts' }
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-2.5 py-1 text-[8px] uppercase tracking-wider rounded-full border transition-all duration-200 ${
                      selectedCategory === c.id 
                        ? 'border-gold-500 bg-gold-500 text-black font-bold' 
                        : 'border-luxury-border text-luxury-text-sec hover:border-gold-500/40'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Method Filters */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Methods' },
                  { id: 'hpht', label: 'HPHT Only' },
                  { id: 'cvd', label: 'CVD Only' }
                ].map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedGrowth(m.id)}
                    className={`px-2.5 py-1 text-[8px] uppercase tracking-wider rounded-full border transition-all duration-200 ${
                      selectedGrowth === m.id 
                        ? 'border-gold-500 bg-gold-500 text-black font-bold' 
                        : 'border-luxury-border text-luxury-text-sec hover:border-gold-500/40'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Cert Filters */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Certs' },
                  { id: 'certified', label: 'Certified (GIA/IGI)' },
                  { id: 'non-certified', label: 'Parcel / Sifted' }
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCert(c.id)}
                    className={`px-2.5 py-1 text-[8px] uppercase tracking-wider rounded-full border transition-all duration-200 ${
                      selectedCert === c.id 
                        ? 'border-gold-500 bg-gold-500 text-black font-bold' 
                        : 'border-luxury-border text-luxury-text-sec hover:border-gold-500/40'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: Sidebar Filters & Shapes list (Desktop) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col space-y-6 border-r border-luxury-border/60 pr-6 h-[720px]">
              
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

              {/* Pill Filters */}
              <div className="space-y-4">
                {/* Category */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 block font-bold">Shape Category</span>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { id: 'all', label: 'All' },
                      { id: 'round', label: 'Round' },
                      { id: 'fancy', label: 'Fancy' }
                    ].map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategory(c.id)}
                        className={`py-1.5 text-[9px] uppercase tracking-wider border rounded-[1px] transition-colors duration-200 cursor-pointer ${
                          selectedCategory === c.id
                            ? 'border-gold-500 bg-gold-500/10 text-gold-500 font-semibold'
                            : 'border-luxury-border bg-luxury-bg-sec/30 text-luxury-text-sec hover:border-gold-500/20'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Growth */}
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

                {/* Certification */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 block font-bold">Certification Status</span>
                  <div className="flex flex-col gap-1">
                    {[
                      { val: 'all', label: 'All Listings' },
                      { val: 'certified', label: 'Certified (GIA/IGI/HRD)' },
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
                <div ref={containerRef} className="space-y-2 pr-1 overflow-y-auto flex-1 scrollbar-thin">
                  <AnimatePresence>
                    {filteredShapes.map((shape) => {
                      const isActive = shape.id === selectedShapeId;
                      const shapeName = shape.name[language] || shape.name['en'];
                      return (
                        <motion.button
                          layout
                          key={shape.id}
                          data-shape-id={shape.id}
                          onClick={() => setSelectedShapeId(shape.id)}
                          className={`w-full flex items-center gap-3 p-3 border text-left transition-all duration-300 rounded-sm cursor-pointer relative overflow-hidden group ${
                            isActive
                              ? 'border-gold-500 bg-gold-500/5 text-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                              : 'border-luxury-border bg-luxury-bg-sec/20 text-luxury-text-sec hover:border-gold-500/30 hover:bg-luxury-bg-sec/40 hover:text-luxury-text hover:shadow-[0_0_8px_rgba(212,175,55,0.05)]'
                          }`}
                        >
                          {/* Mini Thumbnail */}
                          <div className="w-10 h-10 bg-black/40 border border-luxury-border/80 flex items-center justify-center p-1 rounded-sm overflow-hidden shrink-0 group-hover:border-gold-500/30 transition-colors">
                            <img 
                              src={getShapeImageUrl(shape.imageName)} 
                              alt={shapeName} 
                              className="w-full h-full object-contain filter brightness-95 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>

                          {/* Metadata */}
                          <div className="flex-grow min-w-0">
                            <span className="text-[10px] font-bold tracking-wider uppercase font-serif block truncate">
                              {shapeName.replace(" CUT", "").replace(" BRILLIANT", "")}
                            </span>
                            <div className="text-[8px] text-luxury-text-sec/80 flex gap-2 items-center mt-1">
                              <span>{shape.sizeRange.split(' – ')[0]} - {shape.sizeRange.split(' – ')[1]}</span>
                              <span className="w-1 h-1 bg-luxury-text-sec/40 rounded-full" />
                              <span>{shape.labs}</span>
                            </div>
                          </div>



                          {/* Active Indicator Bar */}
                          {isActive && (
                            <motion.div 
                              layoutId="activeShapeIndicator" 
                              className="absolute top-0 bottom-0 left-0 w-[2px] bg-gold-500" 
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </AnimatePresence>
                  {filteredShapes.length === 0 && (
                    <span className="text-xs text-luxury-text-sec/50 italic block py-4 text-center">No shapes match selection filters.</span>
                  )}
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: Large Interactive Image Frame */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center bg-luxury-bg-sec border border-luxury-border rounded-sm p-6 relative min-h-[380px] lg:min-h-[500px]">
              
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 text-gold-500/50 z-20 pointer-events-none"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>

              <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-gold-500/5 rounded-full z-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] border border-gold-500/5 rounded-full border-dashed" />
              </div>

              <div className="absolute w-[200px] h-[200px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none z-0" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShape.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-sm"
                >
                  <img 
                    src={getShapeImageUrl(activeShape.id.includes('radiant') ? 'Radiant cut.jpeg' : activeShape.imageName)} 
                    alt={activeShape.name[language] || activeShape.name['en']} 
                    className="max-w-[70%] max-h-[320px] md:max-h-[380px] object-contain drop-shadow-[0_15px_45px_rgba(150,123,69,0.15)] filter brightness-95"
                  />

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
                    
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-gold-500/35 bg-gold-500/5 text-gold-500 text-[8px] uppercase tracking-widest font-serif rounded-[2px] font-bold">
                      <Award className="w-3 h-3 text-gold-500 shrink-0" />
                      Available in HPHT &amp; CVD Lab Grown
                    </div>
                  </div>

                  {/* Description */}
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
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-gold-500 hover:border-gold-600 text-gold-500 hover:text-black hover:bg-gold-500 font-serif text-[10px] uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer shadow-sm text-center font-bold"
                    >
                      {t('collectionPage.requestQuoteBtn') || "Request Quote"}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

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
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold block mb-2 font-semibold">Technical Matrix</span>
            <h2 className="text-3xl font-serif tracking-wide mb-4 text-luxury-text uppercase">B2B Product Profiles</h2>
            <p className="text-luxury-text-sec text-xs leading-relaxed font-sans">
              Comprehensive inventory matrix covering certified and non-certified parcels of HPHT &amp; CVD lab-grown diamonds for international exporters.
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

          <div className="mt-8 text-center text-luxury-text-sec/60 text-[10px] italic font-sans">
            * Custom layouts, mixed parcels, and customized bulk orders can be processed upon specialized requests. GIA/IGI verification reports are supplied with all certified orders.
          </div>

        </div>
      </section>

      {/* ═══ B2B INQUIRY MODAL ════════════════════════════════════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-luxury-bg-sec border border-luxury-card-border max-w-lg w-full rounded-sm p-6 relative shadow-2xl font-serif"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 text-luxury-text-sec hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success State */}
              {modalSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-gold-500/10 border border-gold-500 rounded-full flex items-center justify-center mx-auto text-gold-500">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl text-luxury-text font-bold uppercase tracking-wider">
                    {t('collectionPage.inquiryModal.successTitle') || 'Thank You'}
                  </h3>
                  <p className="text-luxury-text-sec text-xs font-sans max-w-sm mx-auto leading-relaxed">
                    {(t('collectionPage.inquiryModal.successText') || 'Your inquiry for {shape} has been received. Our team will contact you shortly.').replace('{shape}', activeShape.name[language] || activeShape.name['en'])}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold block mb-1">Direct Sourcing Form</span>
                    <h3 className="text-lg text-luxury-text uppercase font-semibold">
                      {t('collectionPage.inquiryModal.title') || 'Request Quote / Enquire'}
                    </h3>
                    <p className="text-luxury-text-sec text-[10px] font-sans">
                      {(t('collectionPage.inquiryModal.subtitle') || 'Submit your B2B requirements for {shape} diamond. We respond within 24 hours.').replace('{shape}', activeShape.name[language] || activeShape.name['en'])}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Readonly prefilled shape */}
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.shape') || 'Selected Shape'}
                      </label>
                      <input 
                        type="text" 
                        value={activeShape.name[language] || activeShape.name['en']} 
                        disabled 
                        className="w-full bg-luxury-bg border border-luxury-border text-xs uppercase tracking-wider text-gold-500 px-3 py-2.5 rounded-sm font-semibold cursor-not-allowed"
                      />
                    </div>

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.name') || 'Full Name'} *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={modalForm.name}
                        onChange={(e) => setModalForm({...modalForm, name: e.target.value})}
                        className="w-full bg-luxury-bg border border-luxury-border text-xs text-luxury-text px-3 py-2.5 rounded-sm focus:outline-none focus:border-gold-500 font-sans"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.company') || 'Company Name'} *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={modalForm.company}
                        onChange={(e) => setModalForm({...modalForm, company: e.target.value})}
                        className="w-full bg-luxury-bg border border-luxury-border text-xs text-luxury-text px-3 py-2.5 rounded-sm focus:outline-none focus:border-gold-500 font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.email') || 'Business Email'} *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={modalForm.email}
                        onChange={(e) => setModalForm({...modalForm, email: e.target.value})}
                        className="w-full bg-luxury-bg border border-luxury-border text-xs text-luxury-text px-3 py-2.5 rounded-sm focus:outline-none focus:border-gold-500 font-sans"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.whatsapp') || 'WhatsApp Number'} *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={modalForm.whatsapp}
                        onChange={(e) => setModalForm({...modalForm, whatsapp: e.target.value})}
                        className="w-full bg-luxury-bg border border-luxury-border text-xs text-luxury-text px-3 py-2.5 rounded-sm focus:outline-none focus:border-gold-500 font-sans"
                      />
                    </div>

                    {/* Carat requirement */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.carats') || 'Carats Required'}
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. 1.5ct, 2ct"
                        value={modalForm.carats}
                        onChange={(e) => setModalForm({...modalForm, carats: e.target.value})}
                        className="w-full bg-luxury-bg border border-luxury-border text-xs text-luxury-text px-3 py-2.5 rounded-sm focus:outline-none focus:border-gold-500 font-sans"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-sec/80 block font-bold font-sans">
                        {t('collectionPage.inquiryModal.quantity') || 'Quantity'}
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. 10 stones, parcel"
                        value={modalForm.quantity}
                        onChange={(e) => setModalForm({...modalForm, quantity: e.target.value})}
                        className="w-full bg-luxury-bg border border-luxury-border text-xs text-luxury-text px-3 py-2.5 rounded-sm focus:outline-none focus:border-gold-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={modalLoading}
                      className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-black text-xs uppercase tracking-widest font-bold font-sans transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50"
                    >
                      {modalLoading ? 'Sending...' : (t('collectionPage.inquiryModal.submit') || 'Submit Inquiry')}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Collection;
