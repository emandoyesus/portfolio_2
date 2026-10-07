"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-muted mb-8"
          >
            Full-Stack Web & Mobile Developer
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold leading-[1.05] tracking-tight mb-8"
          >
            Building Robust{" "}
            <br className="hidden md:block" />
            Software with{" "}
            <br className="hidden md:block" />
            <span className="italic text-accent">Purposeful</span> Design.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10"
          >
            I craft modern web and mobile experiences with scalable
            architectures. Focused on clean code, performance, and delivering
            software that endures.
          </motion.p>

          {/* Tech list */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs tracking-[0.15em] uppercase text-muted/70 mb-10"
          >
            React • Next.js • Node.js • NestJS • TypeScript • React Native •
            PostgreSQL • MongoDB
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/85 transition-colors group"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-sm font-medium tracking-wide hover:border-foreground/50 transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-sm font-medium tracking-wide hover:border-foreground/50 transition-colors"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-muted">
              Open to collaborating on impactful projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
