"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number | null>(null);

  // Measure exact footer content height responsively
  useEffect(() => {
    if (!contentRef.current) return;
    const updateHeight = () => {
      if (contentRef.current) {
        setFooterHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(contentRef.current);
    window.addEventListener("resize", updateHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const isInView = useInView(containerRef, { margin: "0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Pronounced cinematic parallax sticky reveal transforms
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [0.2, 0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      id="footer-reveal-container"
      className="relative w-full min-h-[620px] md:min-h-[420px]"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        ...(footerHeight ? { height: `${footerHeight}px` } : {}),
      }}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 w-full z-0 overflow-hidden ${
          isInView ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          height: footerHeight ? `${footerHeight}px` : "auto",
        }}
      >
        <motion.footer
          ref={contentRef}
          style={{ y, opacity, scale }}
          className="relative w-full border-t border-hairline bg-black/98 pt-16 pb-12 px-6 sm:px-10 overflow-hidden shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.95)]"
        >
          {/* Top Curtain Shadow: soft physical depth illusion as page slides off */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/60 to-transparent z-10"
          />

          {/* Minimal atmospheric aura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[100px] bg-[#1a2342]/10 blur-[90px] -z-10"
          />

          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            {/* Top Grid: Symmetrically spaced columns with balanced headers & rhythm */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-hairline items-start">
              {/* Column 1: Profile & Identity */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  Profile
                </p>

                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center border border-hairline bg-[#080808] text-accent font-serif font-bold text-sm">
                    ET
                  </span>
                  <div>
                    <span className="font-sans font-semibold text-chalk text-sm tracking-tight block">
                      Emandoyesus Tesfaye
                    </span>
                    <span className="text-[11px] text-muted font-mono">
                      Full Stack Developer
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-muted leading-relaxed mt-3 max-w-[260px]">
                  Building practical, fast web applications and native mobile apps with modern, reliable engineering.
                </p>

                <div className="flex flex-col gap-2 pt-3 text-[11px] font-mono text-muted">
                  <div className="inline-flex items-center gap-2">
                    <span className="size-2 rounded-full bg-positive animate-pulse shrink-0" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <MapPin size={12} className="text-accent shrink-0" />
                    <span>Mekelle, Ethiopia (UTC+3)</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Navigation */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  Navigation
                </p>

                <ul className="flex flex-col gap-2.5 text-xs font-mono">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-chalk transition-colors inline-flex items-center gap-2 group py-0.5"
                      >
                        <span className="text-hairline-strong text-[10px] group-hover:text-accent transition-colors font-mono">
                          &gt;
                        </span>
                        <span>{link.name}</span>
                        <ArrowUpRight
                          size={11}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Connect & Socials */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  Connect
                </p>

                <ul className="flex flex-col gap-2.5 text-xs font-mono">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted hover:text-chalk transition-colors inline-flex items-center gap-2.5 group py-0.5"
                        >
                          <Icon className="size-3.5 text-[#8fa0b5] group-hover:text-accent transition-colors shrink-0" />
                          <span>{item.name}</span>
                          <ArrowUpRight
                            size={11}
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Column 4: Actions */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  Actions
                </p>

                <div className="flex flex-col gap-2.5">
                  <motion.a
                    href="/cv.pdf"
                    download="Emandoyesus_Tesfaye_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-hairline bg-[#080808] hover:border-accent/60 hover:text-accent text-chalk font-mono text-xs transition-all w-full select-none"
                  >
                    <BsFiletypePdf className="size-3.5 text-accent" />
                    <span>Download Resume (PDF)</span>
                  </motion.a>

                  <button
                    type="button"
                    onClick={scrollToTop}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-hairline bg-[#080808] hover:border-hairline-strong hover:text-chalk text-muted font-mono text-xs transition-all w-full select-none cursor-pointer"
                  >
                    <ArrowUp size={13} />
                    <span>Back to Top</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Credits & Legal */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
              <span>&copy; {currentYear} Emandoyesus Tesfaye.</span>
              <span className="text-center sm:text-right">All rights reserved.</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
