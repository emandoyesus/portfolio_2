"use client";

import {
  Globe,
  Smartphone,
  Server,
  ShieldCheck,
  Bot,
  CloudUpload,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Fullstack Websites & Web Apps",
    icon: Globe,
    description:
      "Engineering fast, responsive, and SEO-optimized production web applications using React, Next.js, Vite, TypeScript, and modern Tailwind CSS.",
    tags: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    num: "02",
    title: "Mobile Apps (Android & iOS)",
    icon: Smartphone,
    description:
      "Developing native and cross-platform mobile applications with clean architecture, fluid animations, and reliable offline capabilities (Udacity certified).",
    tags: ["Android", "iOS", "React Native", "Udacity Certified"],
  },
  {
    num: "03",
    title: "Admin Dashboards & CMS",
    icon: ShieldCheck,
    description:
      "Building protected admin consoles with role-based auth, dynamic content management, Cloudinary asset storage, and real-time Firestore synchronization.",
    tags: ["Firebase Auth", "Firestore", "Cloudinary", "CMS Consoles"],
  },
  {
    num: "04",
    title: "Backend & API Integration",
    icon: Server,
    description:
      "Architecting clean, modular RESTful APIs and connecting third-party services like TMDB, EmailJS, and payment/notification gateways using Node.js & Express.",
    tags: ["Node.js", "Express", "RESTful APIs", "TMDB API", "EmailJS"],
  },
  {
    num: "05",
    title: "Telegram Bots & Automation",
    icon: Bot,
    description:
      "Building automated Telegram bots for notifications, user engagement, custom workflow automation, and real-time alerts.",
    tags: ["Telegram Bot API", "Node.js", "Automation", "Workflows"],
  },
  {
    num: "06",
    title: "Web Deployment & Production",
    icon: CloudUpload,
    description:
      "Handling domain setup, prerendered routes, CDN edge caching, and automated CI/CD deployments on modern platforms like Vercel and Render.",
    tags: ["Vercel", "Render", "CI/CD", "SEO Prerendering"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3 font-mono">
            Core Competencies
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-4">
            Services &amp; Offerings.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted">
            Direct capabilities and specialized engineering solutions for real-world products.
          </p>
        </motion.div>

        {/* 3x2 Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, index) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group relative bg-card p-7 border border-hairline transition-colors duration-300 hover:border-accent/40 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-accent tracking-wider font-semibold">
                    {svc.num}
                  </span>
                  <div className="grid size-9 place-items-center bg-surface border border-hairline text-muted group-hover:text-accent group-hover:border-accent/50 group-hover:scale-105 transition-all">
                    <svc.icon size={16} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl font-semibold text-chalk mb-2.5 group-hover:text-accent transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-hairline">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 border border-hairline text-muted font-mono bg-surface/50 transition-colors group-hover:text-chalk/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
