"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    color: "rgba(107, 143, 113, 0.25)",
    size: 600,
    initialX: "10%",
    initialY: "20%",
    animateX: ["10%", "40%", "20%", "10%"],
    animateY: ["20%", "50%", "80%", "20%"],
    duration: 90,
  },
  {
    color: "rgba(107, 143, 113, 0.15)",
    size: 500,
    initialX: "70%",
    initialY: "60%",
    animateX: ["70%", "50%", "80%", "70%"],
    animateY: ["60%", "20%", "40%", "60%"],
    duration: 110,
  },
  {
    color: "rgba(26, 26, 26, 0.08)",
    size: 450,
    initialX: "50%",
    initialY: "10%",
    animateX: ["50%", "30%", "60%", "50%"],
    animateY: ["10%", "70%", "30%", "10%"],
    duration: 100,
  },
];

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
            left: orb.initialX,
            top: orb.initialY,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            left: orb.animateX,
            top: orb.animateY,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
