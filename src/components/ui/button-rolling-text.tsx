"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface RollingTextButtonProps {
  href: string;
  text: string;
  className?: string;
  showIcon?: boolean;
}

const outgoingVariants = {
  rest: { y: "0%" },
  active: { y: "-100%" },
};

const incomingVariants = {
  rest: { y: "100%" },
  active: { y: "0%" },
};

const transition = {
  duration: 0.28,
  ease: [0.338, 0.015, 0.395, 0.959] as const,
};

export function RollingTextButton({
  href,
  text,
  className = "",
  showIcon = true,
}: RollingTextButtonProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const animating = useRef(false);
  const pendingRequest = useRef<boolean | null>(null);
  const hovered = useRef(false);
  const focused = useRef(false);

  const updateActive = (next: boolean) => {
    activeRef.current = next;
    setActive(next);
  };

  const requestActive = (next: boolean) => {
    if (reduceMotion) return;
    if (next === activeRef.current) {
      pendingRequest.current = null;
      return;
    }
    if (animating.current) {
      pendingRequest.current = next;
      return;
    }
    animating.current = true;
    updateActive(next);
  };

  const completeAnimation = () => {
    if (!animating.current) return;
    animating.current = false;
    if (pendingRequest.current !== null) {
      const next = pendingRequest.current;
      pendingRequest.current = null;
      requestActive(next);
    }
  };

  const handlePointerEnter = () => {
    hovered.current = true;
    requestActive(true);
  };

  const handlePointerLeave = () => {
    hovered.current = false;
    if (!focused.current) {
      requestActive(false);
    }
  };

  const handleFocus = () => {
    focused.current = true;
    requestActive(true);
  };

  const handleBlur = () => {
    focused.current = false;
    if (!hovered.current) {
      requestActive(false);
    }
  };

  return (
    <a
      href={href}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`group/roll relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-3.5 text-[15px] font-semibold text-chalk border border-hairline bg-surface hover:border-hairline-strong hover:bg-card transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] select-none ${className}`}
    >
      <span className="relative overflow-hidden inline-block leading-tight">
        <motion.span
          variants={outgoingVariants}
          animate={active ? "active" : "rest"}
          transition={transition}
          onAnimationComplete={completeAnimation}
          className="inline-block"
        >
          {text}
        </motion.span>
        <motion.span
          aria-hidden="true"
          variants={incomingVariants}
          animate={active ? "active" : "rest"}
          transition={transition}
          className="absolute left-0 top-0 inline-block"
        >
          {text}
        </motion.span>
      </span>

      {showIcon && (
        <span className="relative overflow-hidden inline-flex size-4 items-center justify-center">
          <motion.span
            variants={outgoingVariants}
            animate={active ? "active" : "rest"}
            transition={transition}
            className="inline-block"
          >
            <ArrowUpRight className="size-4 text-muted group-hover/roll:text-chalk transition-colors" />
          </motion.span>
          <motion.span
            aria-hidden="true"
            variants={incomingVariants}
            animate={active ? "active" : "rest"}
            transition={transition}
            className="absolute left-0 top-0 inline-block"
          >
            <ArrowUpRight className="size-4 text-chalk" />
          </motion.span>
        </span>
      )}
    </a>
  );
}

export default RollingTextButton;
