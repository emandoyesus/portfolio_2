"use client";

import { useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Send,
  MapPin,
  GraduationCap,
  Award,
  Globe2,
  Phone,
  Mail,
  Code2,
  Terminal,
  ExternalLink,
} from "lucide-react";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"about" | "stack" | "education">("about");

  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Router", "Vite"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Telegram bots", "RESTful APIs"],
    },
    {
      category: "Mobile",
      skills: ["Android Development", "iOS Development", "React Native"],
    },
    {
      category: "Databases",
      skills: ["SQL", "NoSQL", "Firebase Firestore"],
    },
    {
      category: "Services & Tools",
      skills: ["Firebase Auth", "Cloudinary", "EmailJS", "TMDB API", "Vercel", "Git & GitHub"],
    },
  ];

  return (
    <section id="profile" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 bg-surface/40 border-y border-hairline">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3 font-mono">
            Background &amp; Profile
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-4">
            Emandoyesus Tesfaye.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted">
            Full Stack Developer &amp; Software Engineering student at Mekelle University.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] items-stretch">
          {/* Left Card: Developer ID Card */}
          <div className="flex flex-col bg-card p-6 sm:p-8 border border-hairline">
            {/* Visual Header / Avatar Banner with status indicator */}
            <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-stone-900 to-black border border-hairline/80 flex items-center justify-center mb-6">
              {/* Graphic Monogram */}
              <div className="text-center select-none">
                <span className="font-display text-7xl font-bold text-chalk/20 tracking-tighter">
                  ET
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
                  Software Engineering
                </p>
                <p className="font-mono text-[11px] text-muted/70 mt-0.5">
                  Mekelle University
                </p>
              </div>

              {/* "Available for work" pulsing badge */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/80 px-3 py-1.5 backdrop-blur-md border border-hairline">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-positive opacity-75" />
                  <span className="relative size-2 rounded-full bg-positive" />
                </span>
                <span className="font-sans text-xs font-medium text-chalk tracking-wide">
                  Available for work
                </span>
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="font-sans text-2xl font-bold text-chalk">
                Emandoyesus Tesfaye
              </h3>
              <p className="font-sans text-sm text-accent font-mono">
                Full Stack Developer • Mobile App Developer
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mt-1">
                Building practical, fast web applications and native mobile apps with modern, reliable engineering.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="space-y-2.5 mb-8 border-y border-hairline py-4 font-mono text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-accent shrink-0" />
                <span className="text-chalk/90">Dessie, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent shrink-0" />
                <a
                  href="mailto:emmandoyesus@gmail.com"
                  className="text-chalk/90 hover:text-accent transition-colors"
                >
                  emmandoyesus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent shrink-0" />
                <a
                  href="tel:+251953811130"
                  className="text-chalk/90 hover:text-accent transition-colors"
                >
                  +251 953 811 130
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-chalk border border-hairline bg-surface hover:border-accent/60 hover:text-accent transition-all flex-1"
              >
                <Send size={14} />
                <span>Get in touch</span>
              </a>
              <a
                href="mailto:emmandoyesus@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-ink bg-chalk hover:bg-white transition-all flex-1"
              >
                <Mail size={14} />
                <span>Email me</span>
              </a>
            </div>
          </div>

          {/* Right Card: Interactive Tabs (About, Stack, Education & Certs) */}
          <div className="flex flex-col bg-card border border-hairline overflow-hidden">
            {/* Tab navigation headers */}
            <div className="flex border-b border-hairline bg-surface/60">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`flex-1 py-4 px-4 text-left font-sans text-sm font-medium transition-colors border-r border-hairline flex items-center gap-2 ${
                  activeTab === "about"
                    ? "text-accent bg-card border-b-2 border-b-accent"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-xs opacity-60">01</span>
                <span>About</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("stack")}
                className={`flex-1 py-4 px-4 text-left font-sans text-sm font-medium transition-colors border-r border-hairline flex items-center gap-2 ${
                  activeTab === "stack"
                    ? "text-accent bg-card border-b-2 border-b-accent"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-xs opacity-60">02</span>
                <span>Skills &amp; Stack</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`flex-1 py-4 px-4 text-left font-sans text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === "education"
                    ? "text-accent bg-card border-b-2 border-b-accent"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-xs opacity-60">03</span>
                <span>Education &amp; Certs</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              {activeTab === "about" && (
                <div className="space-y-6">
                  {/* CV Brief */}
                  <div className="space-y-4">
                    <p className="font-sans text-base text-chalk/90 leading-relaxed">
                      I&apos;m a full-stack developer and a Software Engineering student at Mekelle University. I build practical, fast web applications with React, Next.js, TypeScript, Node.js and Express, and I also develop mobile apps for Android and iOS.
                    </p>
                    <p className="font-sans text-base text-muted leading-relaxed">
                      My work ranges from a movie-discovery app powered by the TMDB API to a production website with an admin console for a real organization in Dessie. I care about clean interfaces, reliable code and shipping work people actually use.
                    </p>
                  </div>

                  {/* Facts grid from CV */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-hairline bg-hairline mt-6">
                    <div className="p-4 bg-card flex items-center gap-3">
                      <MapPin size={16} className="text-accent shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Location</span>
                        <span className="text-sm font-medium text-chalk">Dessie, Ethiopia</span>
                      </div>
                    </div>
                    <div className="p-4 bg-card flex items-center gap-3">
                      <GraduationCap size={16} className="text-accent shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Education</span>
                        <span className="text-sm font-medium text-chalk">Mekelle University (2023–2027)</span>
                      </div>
                    </div>
                    <div className="p-4 bg-card flex items-center gap-3">
                      <Code2 size={16} className="text-accent shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Primary Focus</span>
                        <span className="text-sm font-medium text-chalk">Web &amp; Mobile Engineering</span>
                      </div>
                    </div>
                    <div className="p-4 bg-card flex items-center gap-3">
                      <Globe2 size={16} className="text-accent shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Languages</span>
                        <span className="text-sm font-medium text-chalk">English (Fluent) • Amharic (Native)</span>
                      </div>
                    </div>
                  </div>

                  {/* Competency badges from CV */}
                  <div className="pt-2">
                    <p className="text-xs uppercase font-mono text-muted mb-2.5">
                      Core Competencies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Fullstack Websites",
                        "Frontend Development",
                        "Admin Dashboards",
                        "Mobile Apps (Android & iOS)",
                        "Telegram Bots",
                        "API Integration",
                        "Web Deployment",
                      ].map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 border border-hairline bg-surface text-chalk/90 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="space-y-6" id="stack">
                  <p className="font-sans text-sm text-muted">
                    Full technical competencies extracted directly from production projects and engineering coursework:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillGroups.map((grp) => (
                      <div key={grp.category} className="p-4 bg-surface/60 border border-hairline">
                        <span className="block text-xs font-mono uppercase text-accent mb-2">
                          {grp.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {grp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2 py-1 bg-card border border-hairline text-chalk font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6">
                  {/* Degree Card */}
                  <div className="p-5 border border-hairline bg-surface/40">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <GraduationCap className="size-5 text-accent" />
                        <h4 className="text-base font-semibold text-chalk">
                          Mekelle University
                        </h4>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 border border-accent/40 text-accent">
                        2023 — 2027
                      </span>
                    </div>
                    <p className="text-sm font-medium text-chalk/90 mb-1">
                      BSc. Software Engineering
                    </p>
                    <p className="text-xs font-mono text-muted">
                      Mekelle, Ethiopia • Rigorous curriculum in algorithms, data structures, software architecture, and systems engineering.
                    </p>
                  </div>

                  {/* Nanodegree Certificates */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                      <Award size={14} />
                      <span>Certified Nanodegrees</span>
                    </h5>
                    <div className="space-y-3">
                      <div className="p-4 border border-hairline bg-surface/30 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-chalk">
                            Android Developer Fundamentals
                          </p>
                          <p className="text-xs text-muted font-sans mt-0.5">
                            Udacity Nanodegree • Native Android application architecture, UI layouts, local storage, and background processing.
                          </p>
                        </div>
                        <span className="text-xs font-mono text-accent shrink-0">Feb 2026</span>
                      </div>

                      <div className="p-4 border border-hairline bg-surface/30 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-chalk">
                            Programming Fundamentals
                          </p>
                          <p className="text-xs text-muted font-sans mt-0.5">
                            Udacity Nanodegree • Core programming paradigms, problem-solving, modular code structures, and debugging.
                          </p>
                        </div>
                        <span className="text-xs font-mono text-accent shrink-0">Dec 2025</span>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="p-4 border border-hairline bg-surface/20 flex items-center justify-between">
                    <span className="text-xs uppercase font-mono text-muted">Spoken Languages</span>
                    <div className="flex items-center gap-4 text-xs font-mono text-chalk">
                      <span>English: <strong className="text-accent font-semibold">Fluent</strong></span>
                      <span>•</span>
                      <span>Amharic: <strong className="text-accent font-semibold">Native</strong></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom tag line */}
              <div className="pt-6 mt-6 border-t border-hairline flex items-center justify-between text-xs text-muted font-mono">
                <span>Mekelle Univ • 2023-2027</span>
                <span className="text-accent">CLEAN CODE • DISCIPLINE • REAL PRODUCTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
