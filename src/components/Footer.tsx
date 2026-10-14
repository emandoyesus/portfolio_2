"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { BsFiletypePdf } from "react-icons/bs";
import {
  CatGithubIcon,
  LinkedinBoxIcon,
  TelegramIcon,
  EmailEnvelopeIcon,
} from "@/components/ui/social-links";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#profile" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/emandoyesus",
    icon: CatGithubIcon,
    handle: "@emandoyesus",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emandoyesus/",
    icon: LinkedinBoxIcon,
    handle: "in/emandoyesus",
  },
  {
    name: "Telegram",
    href: "https://t.me/vintage_01",
    icon: TelegramIcon,
    handle: "@vintage_01",
  },
  {
    name: "Email",
    href: "mailto:emmandoyesus@gmail.com",
    icon: EmailEnvelopeIcon,
    handle: "emmandoyesus@gmail.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative z-10 border-t border-hairline/60 bg-[#020306] pt-16 pb-12 px-6 sm:px-10 overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[#0e1236]/15 via-transparent to-transparent blur-[120px] -z-10"
      />

      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Top Grid: Brand, Navigation, Socials, Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-hairline/60">
          {/* Column 1: Brand & Availability */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center border border-hairline/70 bg-[#070910] text-accent font-serif font-bold text-sm">
                ET
              </span>
              <div>
                <span className="font-sans font-semibold text-chalk text-base tracking-tight block">
                  Emandoyesus Tesfaye
                </span>
                <span className="text-xs text-muted font-mono">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs mt-1">
              Building practical, fast web applications and native mobile apps with modern, reliable engineering.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs font-mono text-muted">
              <div className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-positive animate-pulse shrink-0" />
                <span>Available for new projects</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-accent shrink-0" />
                <span>Mekelle, Ethiopia (UTC+3)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5 text-sm font-sans">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-chalk transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
              Connect
            </p>
            <ul className="flex flex-col gap-3 text-sm font-sans">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted hover:text-chalk transition-colors inline-flex items-center gap-2.5 group"
                    >
                      <Icon className="size-4 text-[#8fa0b5] group-hover:text-accent transition-colors shrink-0" />
                      <span>{item.name}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Quick Actions */}
          <div className="flex flex-col gap-3.5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
              Actions
            </p>

            {/* Redesigned Download Resume Button matching user reference */}
            <motion.a
              href="/cv.pdf"
              download="Emandoyesus_Tesfaye_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#a4b1ac] hover:bg-[#b2c0bb] text-[#152336] font-sans font-medium text-sm tracking-tight transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.5)] w-full select-none cursor-pointer group"
            >
              <BsFiletypePdf className="size-[19px] shrink-0 text-[#152336] transition-transform duration-200 group-hover:scale-105" />
              <span>Download Resume</span>
            </motion.a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-hairline/60 bg-[#06080e] hover:bg-[#0c101c] hover:border-accent/40 hover:text-chalk text-muted font-mono text-xs rounded-lg transition-all w-full select-none cursor-pointer"
            >
              <ArrowUp size={13} />
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <span>&copy; {currentYear} Emandoyesus Tesfaye. All rights reserved.</span>
          <span className="text-accent/80 text-center sm:text-right">
            MEKELLE UNIVERSITY • SOFTWARE ENGINEERING • BUILT WITH NEXT.JS
          </span>
        </div>
      </div>
    </footer>
  );
}
