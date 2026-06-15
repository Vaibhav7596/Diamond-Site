import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const NumberCounter = ({ from = 0, to, duration = 2.0, suffix = '', prefix = '', delay = 0 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const target = parseInt(to, 10);
    const start = parseInt(from, 10);
    if (isNaN(target)) return;

    let animationFrameId;
    let startTimestamp = null;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * (target - start) + start);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const delayTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, from, to, duration, delay]);

  return (
    <span
      ref={ref}
      className="font-serif font-bold tabular-nums text-3xl md:text-5xl gold-gradient-text tracking-wider"
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default NumberCounter;
