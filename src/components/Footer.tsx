"use client";

import { ArrowUpRight, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-hairline bg-ink py-12 sm:py-16 px-6 sm:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-hairline">
          {/* Logo & title */}
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center border border-hairline bg-surface text-accent font-serif font-bold text-sm">
              ET
            </span>
            <div>
              <span className="font-sans font-semibold text-chalk text-base tracking-tight">
                Emandoyesus Tesfaye
              </span>
              <p className="text-xs text-muted font-mono">
                Full Stack Developer • Dessie, Ethiopia
              </p>
            </div>
          </div>

          {/* Socials & direct contacts */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="mailto:emmandoyesus@gmail.com"
              className="text-muted hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} className="text-accent" />
              <span>emmandoyesus@gmail.com</span>
            </a>
            <a
              href="tel:+251953811130"
              className="text-muted hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Phone size={14} className="text-accent" />
              <span>+251 953 811 130</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Github size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <span>&copy; {currentYear} Emandoyesus Tesfaye. All rights reserved.</span>
          <span className="text-accent/80">MEKELLE UNIVERSITY • SOFTWARE ENGINEERING</span>
        </div>
      </div>
    </footer>
  );
}
