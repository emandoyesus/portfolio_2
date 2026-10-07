"use client";

import { useState } from "react";
import { Send, Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#profile" },
  { name: "Stack", href: "#stack" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-[18px] left-1/2 z-50 w-[92%] max-w-[840px] -translate-x-1/2 sm:top-[24px] sm:w-[95%] xl:max-w-[880px] transition-all">
      <nav
        aria-label="Main"
        className="flex h-14 sm:h-16 items-center justify-between gap-3 border border-hairline bg-ink/90 px-3 backdrop-blur-xl sm:px-4 lg:gap-5 lg:pl-5 lg:pr-3 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.8)]"
      >
        {/* Brand */}
        <a
          href="#"
          className="group/logo inline-flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85"
        >
          <span className="relative flex size-8 items-center justify-center overflow-hidden border border-hairline bg-surface text-accent font-serif font-bold text-xs ring-1 ring-hairline transition-all group-hover/logo:border-accent/40">
            ET
          </span>
          <span className="font-sans font-medium tracking-[-0.01em] text-chalk text-[15px]">
            Emandoyesus <span className="hidden sm:inline text-muted font-normal">Tesfaye</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative inline-flex items-center px-3 py-1.5 font-sans text-[14px] font-medium transition-colors duration-200 text-muted hover:text-chalk"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA and controls */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Accent dot indicator */}
          <div
            title="Theme: Ink & Cosmic Navy"
            className="hidden sm:flex size-8 shrink-0 items-center justify-center border border-hairline bg-surface cursor-default"
          >
            <span className="size-2.5 bg-[#3d49b8] rounded-full shadow-[0_0_8px_rgba(46,55,148,0.7)]" />
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="group/btn relative select-none items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 text-chalk border border-hairline bg-surface/90 hover:border-accent/50 hover:text-accent px-4 py-2 text-[14px] inline-flex shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <Send size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            <span>Contact me</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid size-10 place-items-center border border-hairline text-chalk md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mt-2 border border-hairline bg-ink/95 backdrop-blur-2xl p-5 md:hidden shadow-2xl flex flex-col gap-4 animate-enter-rise">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-[16px] text-muted hover:text-chalk py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
