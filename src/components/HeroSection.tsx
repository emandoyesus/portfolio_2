"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import HeroTerminal from "@/components/HeroTerminal";
import PixelBlast from "@/components/PixelBlast";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative flex w-full flex-col items-center gap-10 overflow-hidden px-6 pt-24 pb-12 sm:px-10 sm:pt-28 lg:gap-14"
    >
      {/* Interactive PixelBlast Liquid Ripple Canvas - Starting from the very top */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-65">
        <PixelBlast
          variant="circle"
          pixelSize={5}
          color="#181c66"
          patternScale={2.6}
          patternDensity={1.0}
          pixelSizeJitter={0.4}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.8}
          liquid={false}
          speed={0.55}
          edgeFade={0}
          transparent
        />
        {/* Soft bottom transition mask to blend smoothly into the next section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(8,8,8,0.3) 55%, rgba(8,8,8,0.75) 75%, rgba(8,8,8,0.96) 90%, #080808 100%)",
          }}
        />
      </div>

      {/* Laser streak lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[150px] w-[840px] max-w-full -translate-x-1/2 overflow-hidden opacity-50"
      >
        <span className="absolute h-px w-[120px] top-[14px] left-[10px] bg-gradient-to-r from-transparent via-[#2e3794]/60 to-transparent" />
        <span className="absolute h-px w-[140px] top-[52px] right-[40px] bg-gradient-to-r from-transparent via-[#2e3794]/50 to-transparent" />
      </div>

      <div className="relative z-10 pointer-events-none grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        {/* Left: Main Heading and Intro */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hairline bg-surface/80 text-xs font-mono text-[#828ddc] pointer-events-auto">
            <span className="size-1.5 rounded-full bg-[#3d49b8] animate-pulse" />
            <span>FULL STACK DEVELOPER • DESSIE, ETHIOPIA</span>
          </div>

          <h1 className="text-balance font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-chalk tracking-tight leading-[1.1]">
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
          </h1>

          <p className="max-w-[50ch] font-sans text-base sm:text-lg text-muted leading-relaxed font-normal">
            I&apos;m a <span className="text-chalk font-medium">full-stack developer</span> and a Software Engineering student at <span className="text-chalk font-medium">Mekelle University</span>. I build practical, fast web applications with React, Next.js, TypeScript, Node.js and Express, and develop mobile apps for Android &amp; iOS.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="group/btn relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-chalk border border-hairline bg-surface hover:border-hairline-strong hover:bg-card transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)]"
            >
              <span>Featured Projects</span>
            </a>

            {/* Accent Action Button */}
            <a
              href="#contact"
              className="group/btn relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-ink bg-chalk hover:bg-white hover:shadow-[0_0_24px_rgba(46,55,148,0.5)] transition-all duration-300"
            >
              <span>Contact Now</span>
            </a>

            {/* Hand-drawn decorative arrow pointing to CTA */}
            <svg
              aria-hidden="true"
              viewBox="0 0 148 56"
              fill="none"
              className="pointer-events-none text-[#4d5bd6] hidden w-[90px] -translate-y-2 sm:block opacity-75"
            >
              <path
                d="M140 8 C 104 12, 58 26, 20 46"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M38 48 L18 45 L28 28"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right: Interactive Live Engineering Terminal */}
        <div className="relative w-full z-10 flex items-center justify-center pointer-events-auto">
          <HeroTerminal />
        </div>
      </div>

      {/* Down Chevron link to Projects */}
      <div className="relative z-10 pt-4 pointer-events-auto">
        <a
          href="#projects"
          aria-label="Scroll to featured projects"
          className="grid size-10 place-items-center text-muted transition-colors hover:text-accent"
        >
          <ChevronDown className="size-6 animate-bounce" />
        </a>
      </div>

      {/* Smooth transitional hairline divider into Projects section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1050px] h-px bg-gradient-to-r from-transparent via-hairline-strong/35 to-transparent"
      />
    </section>
  );
}
