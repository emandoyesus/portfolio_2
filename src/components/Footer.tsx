"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Download, MapPin } from "lucide-react";
import {
  CatGithubIcon,
  LinkedinBoxIcon,
  TelegramIcon,
  EmailEnvelopeIcon,
} from "@/components/ui/social-links";
import { BsFiletypePdf } from "react-icons/bs";

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
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 border-t border-hairline bg-[#06080e]/80 backdrop-blur-[2px] pt-16 pb-12 px-6 sm:px-10 overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#181c66]/20 via-[#0e1338]/10 to-transparent blur-[120px] -z-10"
      />

      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Top Grid: Brand, Navigation, Socials, Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-hairline">
          {/* Column 1: Brand & Availability */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center border border-hairline bg-surface text-accent font-serif font-bold text-sm">
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
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
              Actions
            </p>

            <motion.a
              href="/cv.pdf"
              download="Emandoyesus_Tesfaye_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-hairline bg-surface hover:border-accent/60 hover:text-accent text-chalk font-mono text-xs transition-all w-full select-none"
            >
              <BsFiletypePdf className="size-3.5 text-accent" />
              <span>Download Resume (PDF)</span>
            </motion.a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-hairline bg-card hover:border-hairline-strong hover:text-chalk text-muted font-mono text-xs transition-all w-full select-none cursor-pointer"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <span>&copy; {currentYear} Emandoyesus Tesfaye. All rights reserved.</span>
        </div>
      </div>
    </motion.footer>
  );
}
