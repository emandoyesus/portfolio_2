"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FooterStickyRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function FooterStickyReveal({ children, className = "" }: FooterStickyRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(460);

  useEffect(() => {
    const el = footerContentRef.current;
    if (!el) return;

    const updateHeight = () => {
      if (footerContentRef.current) {
        setFooterHeight(footerContentRef.current.offsetHeight);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Smooth scroll-driven parallax reveal
  const y = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{
        height: footerHeight > 0 ? `${footerHeight}px` : "auto",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 left-0 right-0 w-full z-0 pointer-events-auto">
        <motion.div
          ref={footerContentRef}
          style={{ y, opacity, scale }}
          className="w-full origin-bottom"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
