import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { motion, useInView } from "framer-motion";
import {
  Gem, Scissors, Sparkles, Search, Award, Package,
  ArrowRight, ChevronRight, ShieldCheck
} from "lucide-react";

const DetailGrid = ({ details }) => (
  <div className="grid grid-cols-2 gap-4 mt-6">
    {details.map((d, i) => (
      <div key={i} className="border border-luxury-border p-3 rounded-sm bg-luxury-bg">
        <span className="text-[10px] uppercase tracking-widest text-luxury-text-sec/60 font-sans block mb-1">{d.label}</span>
        <span className="text-luxury-text font-serif text-sm font-semibold">{d.val}</span>
      </div>
    ))}
  </div>
);

const StepPanel = ({ stepKey, idx, icon, visual, isEven, t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const textSide = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-serif font-bold">
          {t(`diamondJourney.${stepKey}.tagline`)}
        </span>
        <div className="flex-1 h-px bg-gold-500/20" />
      </div>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-14 h-14 border border-gold-500/40 rotate-45 flex items-center justify-center bg-luxury-card shrink-0 mt-1">
          <div className="-rotate-45 text-gold-500">{icon}</div>
        </div>
        <div>
          <span className="text-[11px] font-serif text-gold-500/60 font-bold tracking-widest">
            {t(`diamondJourney.${stepKey}.number`)}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-luxury-text leading-tight">
            {t(`diamondJourney.${stepKey}.title`)}
          </h2>
        </div>
      </div>
      <p className="text-luxury-text-sec font-sans text-xs leading-relaxed">
        {t(`diamondJourney.${stepKey}.body`)}
      </p>
    </motion.div>
  );

  const visualSide = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      {visual}
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 border-b border-luxury-border ${isEven ? "bg-luxury-bg-sec" : "bg-luxury-bg"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          {isEven ? <>{visualSide}{textSide}</> : <>{textSide}{visualSide}</>}
        </div>
      </div>
    </section>
  );
};

const GrowthVisual = ({ t }) => (
  <div className="bg-luxury-card border border-luxury-card-border rounded-sm p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gold-500/15 rounded-tr-sm" />
    <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gold-500/15 rounded-bl-sm" />
    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold mb-6">Growth Chamber Schematic</p>
    <div className="flex flex-col items-center gap-0">
      {[
        { label: "Seed Crystal", sub: "Diamond substrate" },
        { label: "Carbon Source", sub: "CH4 (CVD) / Graphite (HPHT)" },
        { label: "Growth Chamber", sub: "5-6 GPa  1400 C+" },
        { label: "Rough Diamond", sub: "Type IIa Crystal" },
      ].map((node, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`w-full border px-5 py-3 rounded-sm text-center ${i === 2 ? "border-gold-500 bg-gold-500/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "border-luxury-border bg-luxury-bg"}`}
          >
            <span className={`font-serif text-xs font-bold block ${i === 2 ? "text-gold-500" : "text-luxury-text"}`}>{node.label}</span>
            <span className="text-[10px] text-luxury-text-sec font-sans">{node.sub}</span>
          </motion.div>
          {i < 3 && <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }} className="w-px h-6 bg-gradient-to-b from-gold-500/60 to-gold-500/20 origin-top" />}
        </React.Fragment>
      ))}
    </div>
    <DetailGrid details={[
      { label: t("diamondJourney.step1.detail1Label"), val: t("diamondJourney.step1.detail1Val") },
      { label: t("diamondJourney.step1.detail2Label"), val: t("diamondJourney.step1.detail2Val") },
      { label: t("diamondJourney.step1.detail3Label"), val: t("diamondJourney.step1.detail3Val") },
      { label: t("diamondJourney.step1.detail4Label"), val: t("diamondJourney.step1.detail4Val") },
    ]} />
  </div>
);

const CuttingVisual = ({ t }) => (
  <div className="bg-luxury-card border border-luxury-card-border rounded-sm p-8 relative overflow-hidden">
    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold mb-6">Precision Planning Grid</p>
    <div className="relative flex items-center justify-center h-44 mb-6">
      <div className="absolute inset-4 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(150,123,69,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(150,123,69,0.4) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <svg viewBox="0 0 120 100" className="w-36 h-32 relative z-10">
        <polygon points="60,5 110,35 60,95 10,35" fill="none" stroke="#967b45" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.7" />
        <line x1="10" y1="35" x2="110" y2="35" stroke="#967b45" strokeWidth="0.8" opacity="0.4" />
        <line x1="60" y1="5" x2="60" y2="95" stroke="#967b45" strokeWidth="0.8" opacity="0.4" />
        <circle cx="60" cy="5" r="2" fill="#967b45" opacity="0.8" />
        <circle cx="110" cy="35" r="2" fill="#967b45" opacity="0.8" />
        <circle cx="60" cy="95" r="2" fill="#967b45" opacity="0.8" />
        <circle cx="10" cy="35" r="2" fill="#967b45" opacity="0.8" />
        <text x="62" y="32" fontSize="6" fill="#967b45" opacity="0.6" fontFamily="serif">Table</text>
        <text x="62" y="60" fontSize="6" fill="#967b45" opacity="0.6" fontFamily="serif">Culet</text>
      </svg>
    </div>
    <DetailGrid details={[
      { label: t("diamondJourney.step2.detail1Label"), val: t("diamondJourney.step2.detail1Val") },
      { label: t("diamondJourney.step2.detail2Label"), val: t("diamondJourney.step2.detail2Val") },
      { label: t("diamondJourney.step2.detail3Label"), val: t("diamondJourney.step2.detail3Val") },
      { label: t("diamondJourney.step2.detail4Label"), val: t("diamondJourney.step2.detail4Val") },
    ]} />
  </div>
);

const PolishingVisual = ({ t }) => (
  <div className="bg-luxury-card border border-luxury-card-border rounded-sm p-8 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none" />
    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold mb-6">Brilliance Spectrum</p>
    <div className="relative flex items-center justify-center h-40 mb-6">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <motion.div key={i} className="absolute w-1 h-6 rounded-full"
          style={{ background: `linear-gradient(to top, transparent, rgba(212,175,55,${0.3 + i * 0.09}))`, transformOrigin: "bottom center", transform: `rotate(${deg}deg) translateY(-38px)` }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, delay: i * 0.25, repeat: Infinity }}
        />
      ))}
      <div className="w-10 h-10 rotate-45 border-2 border-gold-500 bg-gold-500/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]" />
    </div>
    <div className="flex gap-2 flex-wrap mb-4">
      {["Brilliance", "Fire", "Scintillation"].map((p, i) => (
        <span key={i} className="text-[10px] border border-gold-500/30 text-gold-500/80 px-3 py-1 rounded-sm font-serif uppercase tracking-wider">{p}</span>
      ))}
    </div>
    <DetailGrid details={[
      { label: t("diamondJourney.step3.detail1Label"), val: t("diamondJourney.step3.detail1Val") },
      { label: t("diamondJourney.step3.detail2Label"), val: t("diamondJourney.step3.detail2Val") },
      { label: t("diamondJourney.step3.detail3Label"), val: t("diamondJourney.step3.detail3Val") },
      { label: t("diamondJourney.step3.detail4Label"), val: t("diamondJourney.step3.detail4Val") },
    ]} />
  </div>
);

const QualityVisual = ({ t }) => {
  const grades = [
    { c: t("diamondJourney.step4.cColor"), range: t("diamondJourney.step4.colorRange"), bar: 85 },
    { c: t("diamondJourney.step4.cClarity"), range: t("diamondJourney.step4.clarityRange"), bar: 90 },
    { c: t("diamondJourney.step4.cCut"), range: t("diamondJourney.step4.cutRange"), bar: 95 },
    { c: t("diamondJourney.step4.cCarat"), range: t("diamondJourney.step4.caratRange"), bar: 100 },
  ];
  return (
    <div className="bg-luxury-card border border-luxury-card-border rounded-sm p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gold-500/15 rounded-tr-sm" />
      <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold mb-6">4C Grading Parameters</p>
      <div className="space-y-5">
        {grades.map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-serif text-luxury-text font-semibold">{g.c}</span>
              <span className="text-[11px] font-sans text-gold-500 font-bold">{g.range}</span>
            </div>
            <div className="h-1 bg-luxury-border rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${g.bar}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }} className="h-full bg-gradient-to-r from-gold-500/60 to-gold-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 border-t border-luxury-border pt-4 text-[10px] text-gold-500 font-serif">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>10x Loupe Magnification · Internal Audit</span>
      </div>
    </div>
  );
};

const CertVisual = ({ t }) => {
  const labs = [
    { abbr: "IGI", name: t("diamondJourney.step5.igi"), desc: t("diamondJourney.step5.igiDesc") },
    { abbr: "GIA", name: t("diamondJourney.step5.gia"), desc: t("diamondJourney.step5.giaDesc") },
    { abbr: "HRD", name: t("diamondJourney.step5.hrd"), desc: t("diamondJourney.step5.hrdDesc") },
  ];
  return (
    <div className="space-y-4">
      {labs.map((lab, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
          className="bg-luxury-card border border-luxury-card-border p-5 rounded-sm hover:border-gold-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gold-500/50 rotate-45 flex items-center justify-center bg-luxury-bg shrink-0">
              <span className="text-gold-500 text-[9px] -rotate-45 font-bold font-serif">{lab.abbr}</span>
            </div>
            <div>
              <h4 className="text-luxury-text font-serif text-sm font-bold mb-0.5 group-hover:text-gold-500 transition-colors">{lab.abbr}</h4>
              <p className="text-[10px] text-gold-500/70 font-sans uppercase tracking-wider mb-1">{lab.name}</p>
              <p className="text-luxury-text-sec text-[11px] font-sans leading-relaxed">{lab.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="bg-luxury-card border border-gold-500/20 p-4 rounded-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold">Sample Report</span>
          <span className="text-[10px] text-luxury-text-sec font-mono">REF# LG-2024-00418</span>
        </div>
        <div className="space-y-1.5 text-[10px] font-sans">
          {[["Shape","Round Brilliant"],["Carat Weight","1.52 CT"],["Color Grade","E (Near Colorless)"],["Clarity Grade","VS1"],["Cut Grade","Excellent"],["Growth Method","HPHT"]].map(([k,v],i) => (
            <div key={i} className="flex justify-between border-b border-luxury-border pb-1">
              <span className="text-luxury-text-sec">{k}</span>
              <span className="text-luxury-text font-semibold">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExportVisual = ({ t }) => {
  const routeNodes = [
    { label: t("diamondJourney.step6.route1"), flag: "🇮🇳" },
    { label: t("diamondJourney.step6.route2"), flag: "📋" },
    { label: t("diamondJourney.step6.route3"), flag: "✈️" },
    { label: t("diamondJourney.step6.route4"), flag: "🇪🇺" },
  ];
  return (
    <div className="bg-luxury-card border border-luxury-card-border rounded-sm p-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gold-500/15 rounded-bl-sm" />
      <p className="text-[10px] uppercase tracking-widest text-gold-500 font-serif font-bold mb-8">Export Route</p>
      <div className="relative pl-8">
        <div className="absolute left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-gold-500 via-gold-500/50 to-gold-500/10" />
        <div className="space-y-8">
          {routeNodes.map((node, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="flex items-center gap-4 relative">
              <div className={`absolute -left-8 w-5 h-5 rounded-full border flex items-center justify-center ${i === 0 ? "border-gold-500 bg-gold-500/10" : i === 3 ? "border-gold-500/60 bg-luxury-bg" : "border-luxury-border bg-luxury-bg"}`}>
                {i === 0 && <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />}
                {i === 3 && <div className="w-2 h-2 rounded-full bg-gold-500/50" />}
              </div>
              <span className="text-lg">{node.flag}</span>
              <span className={`font-serif text-sm font-bold ${i === 0 || i === 3 ? "text-gold-500" : "text-luxury-text"}`}>{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <DetailGrid details={[
        { label: t("diamondJourney.step6.detail1Label"), val: t("diamondJourney.step6.detail1Val") },
        { label: t("diamondJourney.step6.detail2Label"), val: t("diamondJourney.step6.detail2Val") },
        { label: t("diamondJourney.step6.detail3Label"), val: t("diamondJourney.step6.detail3Val") },
        { label: t("diamondJourney.step6.detail4Label"), val: t("diamondJourney.step6.detail4Val") },
      ]} />
    </div>
  );
};

const DiamondJourney = () => {
  const { t } = useLanguage();

  const steps = [
    { key: "step1", icon: <Gem className="w-5 h-5" />, visual: <GrowthVisual t={t} /> },
    { key: "step2", icon: <Scissors className="w-5 h-5" />, visual: <CuttingVisual t={t} /> },
    { key: "step3", icon: <Sparkles className="w-5 h-5" />, visual: <PolishingVisual t={t} /> },
    { key: "step4", icon: <Search className="w-5 h-5" />, visual: <QualityVisual t={t} /> },
    { key: "step5", icon: <Award className="w-5 h-5" />, visual: <CertVisual t={t} /> },
    { key: "step6", icon: <Package className="w-5 h-5" />, visual: <ExportVisual t={t} /> },
  ];

  return (
    <div className="bg-luxury-bg text-luxury-text transition-colors duration-500">

      {/* HERO */}
      <section className="relative py-28 md:py-40 bg-luxury-bg-sec border-b border-luxury-border overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[18vw] font-serif font-bold text-luxury-border/20 leading-none tracking-widest uppercase">Journey</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-serif font-bold block mb-4">
            {t("diamondJourney.heroTagline")}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif tracking-wide mb-6 leading-tight text-luxury-text uppercase">
            {t("diamondJourney.heroTitle")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
            className="text-luxury-text-sec font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            {t("diamondJourney.heroSubtitle")}
          </motion.p>

          {/* Step strip */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { num: "01", label: t("diamondJourney.step1.title"), icon: <Gem className="w-3 h-3" /> },
              { num: "02", label: t("diamondJourney.step2.title"), icon: <Scissors className="w-3 h-3" /> },
              { num: "03", label: t("diamondJourney.step3.title"), icon: <Sparkles className="w-3 h-3" /> },
              { num: "04", label: t("diamondJourney.step4.title"), icon: <Search className="w-3 h-3" /> },
              { num: "05", label: t("diamondJourney.step5.title"), icon: <Award className="w-3 h-3" /> },
              { num: "06", label: t("diamondJourney.step6.title"), icon: <Package className="w-3 h-3" /> },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-1.5 text-[10px] font-serif text-luxury-text-sec/70 uppercase tracking-wider">
                  <span className="text-gold-500">{s.icon}</span>
                  <span className="text-gold-500/60">{s.num}</span>
                  <span>{s.label}</span>
                </div>
                {i < 5 && <ChevronRight className="w-3 h-3 text-gold-500/30 hidden sm:block" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6 STEPS */}
      {steps.map((step, idx) => (
        <StepPanel key={step.key} stepKey={step.key} idx={idx} icon={step.icon} visual={step.visual} isEven={idx % 2 !== 0} t={t} />
      ))}

      {/* CTA */}
      <section className="relative py-28 md:py-36 bg-black overflow-hidden border-t border-luxury-border text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-serif font-bold block mb-4">{t("diamondJourney.ctaTagline")}</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-6 text-white uppercase leading-tight">{t("diamondJourney.ctaTitle")}</h2>
            <p className="text-gray-400 font-sans text-xs md:text-sm max-w-xl mx-auto mb-10 leading-relaxed">{t("diamondJourney.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-black font-serif text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] rounded-sm cursor-pointer inline-flex items-center justify-center gap-2">
                {t("diamondJourney.ctaButton")}<ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/collection" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gold-500 text-gold-400 hover:text-white hover:border-white font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer">
                {t("diamondJourney.ctaSecondary")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default DiamondJourney;
