import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import craftsmanImage from '../assets/diamond_craftsman.png';
import securePackagingImage from '../assets/secure_export_packaging.png';

const StorytellingScroll = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);

  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to active index (0 to 3)
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 2, 3]);
  const [currentIdx, setCurrentIdx] = React.useState(0);

  useMotionValueEvent(activeIndex, "change", (latest) => {
    // Keep it within bounds
    const rounded = Math.min(Math.max(Math.round(latest), 0), 3);
    if (rounded !== currentIdx) {
      setCurrentIdx(rounded);
    }
  });

  const steps = [
    {
      title: language === 'it' ? "1. Crescita Atomica" : language === 'fr' ? "1. Croissance Atomique" : "1. Atomic Chamber Growth",
      subtitle: language === 'it' ? "CRISTALLIZZAZIONE DI PUREZZA" : language === 'fr' ? "CRISTALLISATION DE PURETÉ" : "CRYSTALLIZING PURITY",
      desc: language === 'it' 
        ? "In condizioni termodinamiche estreme che replicano il mantello terrestre, i semi di carbonio crescono in cristalli Type IIa di eccezionale purezza ottica."
        : language === 'fr'
        ? "Dans des conditions thermodynamiques extrêmes reproduisant le manteau terrestre, des germes de carbone cristallisent en Type IIa de pureté optique."
        : "Under thermodynamic conditions replicating the Earth's deep mantle, high-purity carbon seeds grow into Type IIa rough diamonds over several weeks.",
      image: "/journey/1/hero.png"
    },
    {
      title: language === 'it' ? "2. Mappatura Laser" : language === 'fr' ? "2. Cartographie Laser" : "2. 3D Laser Mapping",
      subtitle: language === 'it' ? "INGEGNERIA DELLA LUCE" : language === 'fr' ? "INGÉNIERIE DE LA LUMIÈRE" : "ENGINEERING BRILLIANCE",
      desc: language === 'it'
        ? "Scansioni 3D avanzate mappano ogni struttura interna per pianificare tagli che esaltino la massima rifrazione e il fuoco naturale."
        : language === 'fr'
        ? "Des scans 3D avancés cartographient chaque structure pour planifier des coupes qui maximisent la réfraction et le feu naturel."
        : "Advanced 3D laser scans map the internal crystal structure, planning the cut to achieve maximum fire, light return, and symmetry.",
      image: "/journey/2/hero.png"
    },
    {
      title: language === 'it' ? "3. Lucidatura Artigianale" : language === 'fr' ? "3. Polissage Artisanal" : "3. Master Hand-Polishing",
      subtitle: language === 'it' ? "TRADIZIONE CENTENARIA" : language === 'fr' ? "TIMING ET LOGISTIQUE" : "HERITAGE CRAFTSMANSHIP",
      desc: language === 'it'
        ? "Mastri artigiani poliscono a mano ciascuna delle 57 faccette con assoluta precisione, liberando lo splendore del diamante."
        : language === 'fr'
        ? "Nos maîtres polisseurs façonnent à la main chacune des 57 facettes avec une précision absolue, libérant l'éclat du diamant."
        : "Master artisans hand-polish each of the 57 facets on rotating scaifes, turning rough cuts into brilliant gems of excellent grading.",
      image: craftsmanImage
    },
    {
      title: language === 'it' ? "4. Spedizione e Certificato" : language === 'fr' ? "4. Expédition et Certificats" : "4. Sealed Export & Certs",
      subtitle: language === 'it' ? "SICUREZZA GARANTITA" : language === 'fr' ? "ASSURANCE TOTALE" : "VERIFIED SOURCING",
      desc: language === 'it'
        ? "Protetti da imballaggi sigillati anti-manomissione con certificati GIA/IGI, i diamanti viaggiano assicurati verso i laboratori europei."
        : language === 'fr'
        ? "Scellés dans des emballages inviolables avec certificats GIA/IGI, nos diamants voyagent sous pleine assurance vers l'Europe."
        : "Secured in tamper-evident B2B packaging with official GIA or IGI certificates, shipping fully insured to luxury European ateliers.",
      image: securePackagingImage
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-black" style={{ height: "300vh" }}>
      {/* Sticky Content Wrapper */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 lg:px-24 gap-12">
        
        {/* LEFT COLUMN: Scrolling Text Chapters */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-lg select-none">
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-luxury-border/30">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="w-full bg-gold-500 origin-top h-full"
            />
          </div>

          <div className="pl-8 space-y-36 py-[20vh]">
            {steps.map((step, idx) => {
              const isActive = idx === currentIdx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0.15, y: 30 }}
                  animate={{ 
                    opacity: isActive ? 1.0 : 0.12,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <span className="text-[10px] tracking-widest text-gold-500 font-serif font-bold uppercase block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Morphing Image Visualizer */}
        <div className="relative h-[60vh] lg:h-[70vh] w-full flex items-center justify-center bg-luxury-bg-sec/10 border border-luxury-border/30 rounded-lg overflow-hidden p-6 shadow-2xl">
          
          {/* Subtle lighting rings */}
          <div className="absolute w-[280px] h-[280px] border border-gold-500/5 rounded-full z-0 flex items-center justify-center animate-pulse">
            <div className="w-[85%] h-[85%] border border-gold-500/5 rounded-full border-dashed" />
          </div>
          <div className="absolute w-[180px] h-[180px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Morphing Images */}
          {steps.map((step, idx) => {
            const isVisible = idx === currentIdx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: isVisible ? 1.0 : 0, 
                  scale: isVisible ? 1.0 : 0.94,
                  pointerEvents: isVisible ? "auto" : "none"
                }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center p-8 z-10"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_15px_30px_rgba(212,175,55,0.15)] filter brightness-95 rounded-sm"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default StorytellingScroll;
