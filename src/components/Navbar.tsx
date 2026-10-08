"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#profile" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl shadow-[0_16px_36px_-12px_rgba(0,0,0,0.85)]"
          : "bg-gradient-to-b from-ink/90 via-ink/50 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-6 sm:px-10">
        {/* Left: Minimal Editorial Logo */}
        <a
          href="#"
          aria-label="Emando Home"
          className="group inline-flex items-center gap-1.5 select-none"
        >
          <span className="font-display text-xl font-normal tracking-tight text-chalk transition-colors group-hover:text-white">
            Emando
          </span>
          <span className="size-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Center / Desktop Links */}
        <nav aria-label="Desktop Navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 font-mono text-[13px] tracking-wider uppercase text-muted transition-colors duration-200 hover:text-chalk"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right: Availability badge, CV Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Download CV Navbar Link */}
          <a
            href="/cv.pdf"
            download="Emandoyesus_Tesfaye_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Emandoyesus Tesfaye's CV"
            className="hidden sm:inline-flex items-center gap-1.5 border border-hairline bg-surface/70 hover:border-hairline-strong hover:bg-card px-3 py-1 font-mono text-[11px] text-chalk transition-all duration-200 hover:text-accent"
          >
            <Download size={12} className="text-accent" />
            <span>CV</span>
          </a>

          {/* Subtle Work Availability Status */}
          <div className="hidden sm:inline-flex items-center gap-2 border border-hairline bg-surface/70 px-3 py-1 font-mono text-[11px] text-muted select-none">
            <span className="size-1.5 rounded-full bg-positive animate-pulse" />
            <span className="text-chalk/90 font-mono">Available for projects</span>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="grid size-9 place-items-center border border-hairline bg-surface text-chalk transition-colors hover:border-hairline-strong hover:text-accent md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="bg-ink/98 px-6 py-5 backdrop-blur-2xl md:hidden animate-enter-rise shadow-2xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-hairline/30 py-3 font-mono text-sm tracking-wider uppercase text-muted transition-colors hover:text-accent last:border-none"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="text-muted/60" />
              </a>
            ))}
            <a
              href="/cv.pdf"
              download="Emandoyesus_Tesfaye_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border-t border-hairline/30 pt-3 font-mono text-sm tracking-wider uppercase text-accent transition-colors"
            >
              <span className="flex items-center gap-2">
                <Download size={14} />
                Download CV
              </span>
              <ArrowUpRight size={14} className="text-accent/60" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
