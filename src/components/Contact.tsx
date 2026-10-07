"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "your.email@example.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-bg text-dark-text">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-dark-text/40 mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6">
            Let&apos;s connect<span className="text-accent">.</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto leading-relaxed mb-12">
            I&apos;m always open to discussing new projects, software
            engineering opportunities, or collaboration on impactful work.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-dark-text/20 text-sm font-medium tracking-wide hover:border-dark-text/40 hover:bg-dark-text/5 transition-all group"
            >
              <Mail size={16} />
              Get in Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-dark-text text-dark-bg text-sm font-medium tracking-wide hover:bg-dark-text/90 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  {email}
                </>
              )}
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-xs tracking-[0.2em] uppercase text-accent">
            Available for full-time roles & freelance projects
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
