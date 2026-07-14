/**
 * VideoHero — Cinematic landing introduction & hero experience
 *
 * ADJUSTMENTS:
 * 1. Skip Intro Button Position:
 *    - Moved from the bottom fold to the top-right corner (`top-8 right-8 z-[10]`).
 *    - This prevents it from being hidden behind browser bottom bars, mobile search inputs,
 *      or bottom page transitions.
 * 2. Full-width Immersive Layout:
 *    - Uses `w-full h-full object-cover` to span the screen completely.
 * 3. Exact Screen Fitting:
 *    - Set height to `h-[calc(100vh-64px)]` to fit perfectly below the navbar.
 */

import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { btnHoverProps, btnGhostHoverProps } from '../utils/motionVariants';


const VideoHero = ({ t, heroWords }) => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [introActive, setIntroActive] = useState(true);

  // Lock scroll on mount while intro is active
  useEffect(() => {
    if (introActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introActive]);

  // Auto-play the video on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.preload = 'auto';
    
    const playVideo = async () => {
      try {
        video.currentTime = 0;
        await video.play();
      } catch (err) {
        console.warn('Autoplay blocked, waiting for interaction');
      }
    };

    if (videoReady) {
      playVideo();
    }
  }, [videoReady]);

  const handleIntroComplete = () => {
    setIntroActive(false);
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      if (video.paused) {
        video.play().catch(() => {});
      }
    }
  };

  const trustBadges = [
    { label: 'IGI Certified',  sub: 'International Standard' },
    { label: 'GIA Compliant',  sub: 'Global Authority' },
    { label: '45+ Years',      sub: 'Heritage Exporter' },
    { label: '40,000+',        sub: 'Diamonds Exported' },
  ];

  return (
    <div
      className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-black"
    >
      {/* ── VIDEO (Full width cover layout) ── */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onEnded={handleIntroComplete}
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── OVERLAYS ── */}
      {/* Subtle top fade for navbar contrast */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/45 to-transparent pointer-events-none z-[1]" />
      
      {/* ════ SKIP INTRO BUTTON (Moved to top-right corner for visibility) ════ */}
      <AnimatePresence>
        {introActive && videoReady && (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleIntroComplete}
            className="absolute top-8 right-8 z-[10] px-4 py-2 border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 font-serif text-[9px] uppercase tracking-widest bg-black/55 backdrop-blur-sm rounded-sm transition-all duration-300 cursor-pointer"
          >
            Skip Intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* ════ BRAND REVEAL CONTENT ════ */}
      <AnimatePresence>
        {!introActive && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center z-[3] px-4 sm:px-8 text-center pt-[64px]"
          >
            {/* Elegant glassmorphic background card to maintain readability over bright video */}
            <div className="bg-black/25 backdrop-blur-[3px] border border-white/5 p-8 sm:p-12 rounded-sm max-w-5xl mx-auto shadow-2xl">
              
              {/* Tagline */}
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-gold-400 font-serif font-bold block mb-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                Established Heritage Exporter · Surat (Gujarat), India
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-[1.08] text-white mb-6 uppercase [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
                {heroWords.map((word, idx) => (
                  <span key={idx} className="inline-block mr-2 md:mr-3">
                    {word}
                  </span>
                ))}
              </h1>

              {/* Subtitle / Description */}
              <p className="text-gray-200 font-serif text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                {t('home.heroSubtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <motion.div {...btnHoverProps}>
                  <Link
                    to="/contact"
                    className="btn-gold inline-block px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-black font-serif text-xs uppercase tracking-widest font-semibold rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
                  >
                    {t('requestQuote')}
                  </Link>
                </motion.div>
                <motion.div {...btnGhostHoverProps}>
                  <Link
                    to="/contact"
                    className="btn-ghost inline-block px-8 py-3.5 bg-transparent border border-white/40 hover:border-gold-500 text-white hover:text-gold-500 font-serif text-xs uppercase tracking-widest rounded-sm cursor-pointer"
                  >
                    {t('contactUs')}
                  </Link>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-2 border-t border-white/10 pt-6">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-serif font-bold text-gold-400 block [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                      {badge.label}
                    </span>
                    <span className="text-[8px] uppercase tracking-widest font-sans text-white/50 mt-0.5 hidden sm:block">
                      {badge.sub}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!introActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-white/50 font-serif">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[1px] h-8 bg-gradient-to-b from-gold-500/70 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default VideoHero;
