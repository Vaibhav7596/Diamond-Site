// ============================================================
// Shared Framer Motion Variants for R Sutariya Exports
// Premium, luxury-grade animation system
// ============================================================

// ── Page-level ──────────────────────────────────────────────
export const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -18, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

// ── Stagger container — wraps a list of children ────────────
export const staggerContainer = (staggerAmt = 0.08, delayStart = 0.05) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerAmt,
      delayChildren: delayStart,
    },
  },
});

// ── Individual item variants ─────────────────────────────────
export const fadeUpItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeInItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Section heading reveal ────────────────────────────────────
export const headingReveal = {
  hidden: { opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Viewport config helper ───────────────────────────────────
export const viewportOnce = { once: true, margin: '-80px' };

// ── Card hover props (spread onto motion.div) ─────────────────
export const cardHoverProps = {
  whileHover: { y: -5, boxShadow: '0 20px 50px rgba(150,123,69,0.1), 0 6px 15px rgba(0,0,0,0.18)' },
  whileTap:   { scale: 0.98 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

// ── Button hover props ────────────────────────────────────────
export const btnHoverProps = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap:   { scale: 0.96 },
  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
};

export const btnGhostHoverProps = {
  whileHover: { y: -2 },
  whileTap:   { scale: 0.97 },
  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
};

// ── Icon micro-spin (for diamond icons on hover) ──────────────
export const iconSpinHover = {
  whileHover: { rotate: 45, scale: 1.15 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
};
