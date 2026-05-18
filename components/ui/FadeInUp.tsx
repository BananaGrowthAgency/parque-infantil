"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export default function FadeInUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  once = true,
}: FadeInUpProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: 0.1,
    margin: "0px 0px -10% 0px",
  });
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) setForceVisible(true);
  }, []);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const visible = isInView || forceVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </motion.div>
  );
}
