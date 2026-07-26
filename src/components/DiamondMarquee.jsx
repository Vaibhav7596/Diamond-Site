import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { diamondShapes, getShapeImageUrl } from '../data/shapesData';
import { useLanguage } from '../context/LanguageContext';

const DiamondMarqueeCard = ({ shape, language }) => {
  const imageUrl = getShapeImageUrl(shape.imageName);
  const shapeName = shape.name[language] || shape.name['en'] || shape.name;

  return (
    <Link
      to={`/collection?shape=${shape.id}`}
      className="group/card relative flex-shrink-0 w-52 sm:w-60 bg-luxury-card/80 border border-luxury-card-border hover:border-gold-500/40 rounded-2xl p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(150,123,69,0.15),0_4px_12px_rgba(0,0,0,0.4)] select-none"
    >
      {/* Light sheen effect on hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] -translate-x-[150%] group-hover/card:translate-x-[150%] transition-transform duration-1000 ease-out" />
      </div>

      {/* Image Container with Gold Radial Glow */}
      <div className="relative h-36 sm:h-40 w-full bg-black/50 border border-luxury-border/30 rounded-xl flex items-center justify-center p-3.5 mb-3.5 overflow-hidden group-hover/card:border-gold-500/30 transition-colors shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)]">
        {/* Radial Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] group-hover/card:bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.28)_0%,transparent_70%)] transition-colors duration-500" />
        
        {/* Diamond Image */}
        <img
          src={imageUrl}
          alt={shapeName}
          loading="lazy"
          className="relative z-10 max-h-full max-w-full object-contain filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.75)] group-hover/card:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Certified Badge Pill */}
        {shape.certified && (
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-black/85 border border-gold-500/40 px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-md">
            <ShieldCheck className="w-2.5 h-2.5 text-gold-500" />
            <span className="text-[8px] uppercase tracking-wider text-gold-500 font-serif font-bold">Certified</span>
          </div>
        )}
      </div>

      {/* Content Label */}
      <div className="space-y-1 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <h4 className="text-luxury-text font-serif font-bold text-xs sm:text-sm tracking-wider uppercase group-hover/card:text-gold-500 transition-colors">
            {shapeName}
          </h4>
        </div>
        <p className="text-[10px] text-luxury-text-sec font-sans tracking-wide">
          {shape.sizeRange || "HPHT & CVD"}
        </p>

        {/* Hover Explore Indicator */}
        <div className="pt-2 flex items-center justify-center gap-1 text-[9px] uppercase tracking-widest text-gold-500 font-serif font-semibold opacity-70 group-hover/card:opacity-100 transition-opacity">
          <span>Explore</span>
          <ArrowRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

const DiamondMarquee = () => {
  const { language, t } = useLanguage();

  // Split shapes into 2 rows for dual opposite infinite scrolling
  const halfLength = Math.ceil(diamondShapes.length / 2);
  const row1Shapes = diamondShapes.slice(0, halfLength);
  const row2Shapes = diamondShapes.slice(halfLength);

  // Triple duplication ensures 100% seamless infinite scroll loop on any screen width
  const row1Triple = [...row1Shapes, ...row1Shapes, ...row1Shapes];
  const row2Triple = [...row2Shapes, ...row2Shapes, ...row2Shapes];

  return (
    <section className="py-20 md:py-28 bg-luxury-bg border-b border-luxury-border relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full mb-4"
        >
          <Sparkles className="w-3 h-3 text-gold-500" />
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold">
            16+ Precision Cuts · HPHT & CVD
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl font-serif tracking-wide text-luxury-text uppercase gold-gradient-text mb-4"
        >
          {t('home.marquee.title') || "OUR MASTERPIECE DIAMOND SHAPES"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="text-luxury-text-sec font-serif max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed"
        >
          {t('home.marquee.subtitle') || "From classic brilliant rounds to bespoke fancy cuts, engineered with extreme optical accuracy from raw carbon seed to final polish."}
        </motion.p>
      </div>

      {/* Marquee Wrapper with Side Fade Gradient Masks */}
      <div className="relative w-full overflow-hidden group">
        {/* Left Side Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-luxury-bg via-luxury-bg/80 to-transparent z-20" />
        
        {/* Right Side Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-luxury-bg via-luxury-bg/80 to-transparent z-20" />

        {/* Row 1: Moving Left */}
        <div className="flex gap-5 w-max animate-marquee group-hover:[animation-play-state:paused] mb-5">
          {row1Triple.map((shape, idx) => (
            <DiamondMarqueeCard key={`r1-${shape.id}-${idx}`} shape={shape} language={language} />
          ))}
        </div>

        {/* Row 2: Moving Right (Reverse) */}
        <div className="flex gap-5 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {row2Triple.map((shape, idx) => (
            <DiamondMarqueeCard key={`r2-${shape.id}-${idx}`} shape={shape} language={language} />
          ))}
        </div>
      </div>

      {/* Footer CTA & Information Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 text-center relative z-10">
        <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-3 px-6 bg-luxury-bg-sec/80 border border-luxury-border rounded-full text-xs font-serif text-luxury-text-sec">
          <span className="flex items-center gap-2">
            <Gem className="w-3.5 h-3.5 text-gold-500" />
            <span>0.01 CT to 15.00+ CT Available</span>
          </span>
          <span className="hidden sm:inline text-gold-500/40">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
            <span>IGI, GIA & HRD Certifications</span>
          </span>
          <span className="hidden sm:inline text-gold-500/40">•</span>
          <Link
            to="/collection"
            className="text-gold-500 hover:text-gold-400 font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span>Explore Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiamondMarquee;
