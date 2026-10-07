"use client";

import { useState } from "react";
import { Copy, Check, Send, Phone, MapPin } from "lucide-react";
import PixelBlast from "@/components/PixelBlast";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "emmandoyesus@gmail.com";
  const phone = "+251953811130";
  const phoneDisplay = "+251 953 811 130";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 border-t border-hairline bg-surface/30">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-card border border-hairline p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Interactive PixelBlast Liquid Ripple Canvas */}
          <div className="absolute inset-0 z-0 pointer-events-auto opacity-65">
            <PixelBlast
              variant="diamond"
              pixelSize={7}
              color="#181c66"
              patternScale={2.5}
              patternDensity={1.1}
              pixelSizeJitter={0.35}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.6}
              liquid={false}
              speed={0.5}
              edgeFade={0.3}
              transparent
            />
          </div>

          {/* Subtle navy ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#181c66]/30 rounded-full blur-[100px] pointer-events-none" />

          {/* Card Content (Elevated above background canvas) */}
          <div className="relative z-10 pointer-events-none">
            {/* Heading */}
            <p className="text-xs uppercase tracking-[0.25em] text-solar font-mono mb-4 pointer-events-auto flex items-center justify-center gap-2">
              <span className="size-1.5 rounded-full bg-solar animate-pulse shadow-[0_0_6px_#fbbf24]" />
              <span>Get in touch</span>
            </p>
            <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-6 max-w-2xl mx-auto pointer-events-auto">
              Let&apos;s build your next system together.
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10 pointer-events-auto">
              Open for full-stack web and mobile development opportunities, client projects, and software engineering collaborations.
            </p>

            {/* Dual Action CTA Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 pointer-events-auto">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-chalk text-ink font-semibold text-sm hover:bg-white transition-all shadow-[0_0_24px_rgba(46,55,148,0.4)] hover:scale-105"
              >
                <Send size={15} />
                <span>Send an Email</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-hairline bg-surface text-chalk font-mono text-sm hover:border-accent/60 hover:text-accent transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check size={15} className="text-positive" />
                    <span className="text-positive">Email copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>{email}</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-hairline bg-surface text-chalk font-mono text-sm hover:border-accent/60 hover:text-accent transition-all"
              >
                <Phone size={15} className="text-accent" />
                <span>{phoneDisplay}</span>
              </a>
            </div>

            {/* Location and status info */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-hairline text-xs font-mono text-muted pointer-events-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-hairline bg-surface/60">
                <MapPin size={13} className="text-accent" />
                <span>Dessie, Ethiopia</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-hairline bg-surface/60">
                <span className="size-2 rounded-full bg-positive animate-pulse" />
                <span>Available for Web &amp; Mobile Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
