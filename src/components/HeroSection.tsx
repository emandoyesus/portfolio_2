"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import RollingTextButton from "@/components/ui/button-rolling-text";
import AddToBasketButton from "@/components/ui/button-add-to-basket";
import SocialLinks from "@/components/ui/social-links";
import { BsFiletypePdf } from "react-icons/bs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const portraitVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative flex w-full flex-col items-center gap-10 overflow-hidden px-6 pt-24 pb-12 sm:px-10 sm:pt-28 lg:gap-14"
    >
      {/* Atmospheric subtle deep midnight wash on the right behind hero figure */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[650px] rounded-full bg-gradient-to-bl from-[#121c42]/20 via-[#0a1028]/15 to-transparent blur-3xl opacity-60 z-0"
      />

      {/* Laser streak lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[150px] w-[840px] max-w-full -translate-x-1/2 overflow-hidden opacity-50 z-0"
      >
        <span className="absolute h-px w-[120px] top-[14px] left-[10px] bg-gradient-to-r from-transparent via-[#2e3794]/60 to-transparent" />
        <span className="absolute h-px w-[140px] top-[52px] right-[40px] bg-gradient-to-r from-transparent via-[#2e3794]/50 to-transparent" />
      </div>

      <div className="relative z-10 pointer-events-none grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        {/* Left: Main Heading, Intro & Social Connect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 border border-hairline bg-surface/80 text-xs font-mono text-[#828ddc] pointer-events-auto"
          >
            <span className="size-1.5 rounded-full bg-[#3d49b8] animate-pulse" />
            <span>FULL STACK DEVELOPER • MEKELLE, ETHIOPIA</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-chalk tracking-tight leading-[1.1]"
          >
            Emandoyesus{" "}
            <span className="block sm:inline text-muted">Tesfaye</span>
            <span className="inline-block align-middle ml-2">
              <a
                href="#projects"
                aria-label="View Projects"
                className="inline-grid size-10 sm:size-12 place-items-center border border-hairline bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105 pointer-events-auto"
              >
                <ArrowUpRight className="size-5" />
              </a>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-[50ch] font-sans text-base sm:text-lg text-muted leading-relaxed font-normal"
          >
            I&apos;m a <span className="text-chalk font-medium">full-stack developer</span> and a Software Engineering student at <span className="text-chalk font-medium">Mekelle University</span>. I build practical, fast web applications with React, Next.js, TypeScript, Node.js and Express, and develop mobile apps for Android &amp; iOS.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto"
          >
            {/* Featured Projects Button with Rolling Text Motion */}
            <RollingTextButton href="#projects" text="Featured Projects" />

            {/* Contact Now Button with Interactive Send Animation */}
            <AddToBasketButton href="#contact" label="Contact Now" />

            {/* Download Resume Button styled strictly in the site design */}
            <motion.a
              href="/cv.pdf"
              download="Emandoyesus_Tesfaye_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-chalk border border-hairline bg-surface hover:border-accent/60 hover:bg-card hover:text-accent transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] select-none cursor-pointer"
            >
              <BsFiletypePdf className="size-4 text-accent transition-transform duration-200 group-hover:scale-110" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links: GitHub, LinkedIn, Telegram, Email */}
          <motion.div
            variants={itemVariants}
            className="pt-3 pointer-events-auto"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: Hero Portrait Illustration with Motion Entrance & Subtle Hover Tilt */}
        <motion.div
          variants={portraitVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="relative w-full z-10 flex items-center justify-center lg:justify-end pointer-events-auto"
        >
          <div className="relative w-full max-w-[480px] lg:max-w-[540px] flex items-center justify-center">
            <Image
              src="/emando-hero-figure.png"
              alt="Emandoyesus Tesfaye — Full Stack Developer"
              width={1024}
              height={1024}
              priority
              className="relative z-10 w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Down Chevron link to Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 pt-4 pointer-events-auto"
      >
        <a
          href="#projects"
          aria-label="Scroll to featured projects"
          className="grid size-10 place-items-center text-muted transition-colors hover:text-accent"
        >
          <ChevronDown className="size-6 animate-bounce" />
        </a>
      </motion.div>

      {/* Smooth transitional hairline divider into Projects section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1050px] h-px bg-gradient-to-r from-transparent via-hairline-strong/35 to-transparent"
      />
    </section>
  );
}
