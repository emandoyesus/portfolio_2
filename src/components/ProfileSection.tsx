"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Send,
  MapPin,
  GraduationCap,
  Award,
  Globe2,
  Mail,
  Code2,
  Terminal,
  ExternalLink,
  Layers,
  Server,
  Smartphone,
  Database,
  Wrench,
  Cpu,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TelegramIcon } from "@/components/ui/social-links";
import TechIcon from "@/components/ui/tech-icons";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"about" | "stack" | "education">("about");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code2,
      count: "8 TECHNOLOGIES",
      description: "Core programming languages utilized for web, mobile, algorithms, and backend systems.",
      skills: [
        { name: "JavaScript", hint: "ES6+, Async, DOM" },
        { name: "TypeScript", hint: "Type Systems & Interfaces" },
        { name: "Python", hint: "Backend, Scripting & AI" },
        { name: "Dart", hint: "Cross-Platform Mobile" },
        { name: "Java", hint: "OOP & Android Fundamentals" },
        { name: "C++", hint: "Algorithms & Low-Level Systems" },
        { name: "HTML5", hint: "Semantic Web & Accessibility" },
        { name: "CSS3", hint: "Modern Layouts & Animations" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: Layers,
      count: "10 TECHNOLOGIES",
      description: "Modern client and state frameworks powering responsive UI and scalable client architectures.",
      skills: [
        { name: "React", hint: "Component Architecture & Hooks" },
        { name: "Next.js", hint: "App Router, SSR & ISR" },
        { name: "Svelte", hint: "Reactivity & Micro-bundles" },
        { name: "Tailwind CSS", hint: "Design Tokens & Responsive UI" },
        { name: "Redux", hint: "Predictable State Containers" },
        { name: "Zustand", hint: "Minimalist Reactive State" },
        { name: "Vite", hint: "Fast Bundling & HMR" },
        { name: "Flutter", hint: "Cross-Platform Mobile UI" },
        { name: "React Native", hint: "Native Mobile Apps" },
        { name: "Expo", hint: "EAS Cloud & Native Tools" },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: Server,
      count: "7 TECHNOLOGIES",
      description: "High-performance services, enterprise TypeScript microservices, and secure API contracts.",
      skills: [
        { name: "Node.js", hint: "Event-Driven Server Runtime" },
        { name: "Express.js", hint: "REST APIs & Middleware" },
        { name: "NestJS", hint: "Enterprise TypeScript Architecture" },
        { name: "FastAPI", hint: "Async Python Endpoints" },
        { name: "Django", hint: "Batteries-Included Services" },
        { name: "RESTful APIs", hint: "Contract-First Architecture" },
        { name: "GraphQL", hint: "Typed Schema Queries" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Cloud",
      icon: Database,
      count: "10 TECHNOLOGIES",
      description: "Distributed databases, cloud providers, and infrastructure-as-code platforms.",
      skills: [
        { name: "PostgreSQL", hint: "Row-Level Security & Indexing" },
        { name: "Supabase", hint: "Cloud Postgres & Auth" },
        { name: "Firebase", hint: "Firestore & BaaS Suite" },
        { name: "Redis", hint: "In-Memory Cache & Queues" },
        { name: "MongoDB", hint: "Document Store & Aggregation" },
        { name: "MySQL", hint: "Relational Storage" },
        { name: "AWS", hint: "S3, EC2, Lambda & IAM" },
        { name: "Google Cloud", hint: "Cloud Run & GCP Services" },
        { name: "Azure", hint: "Enterprise Cloud Compute" },
        { name: "Terraform", hint: "Infrastructure as Code" },
      ],
    },
    {
      id: "devops",
      title: "Tools, DevOps & Testing",
      icon: Wrench,
      count: "10 TECHNOLOGIES",
      description: "Containerization, CI/CD pipelines, version control, and developer toolchain.",
      skills: [
        { name: "Docker", hint: "Multi-Stage Containers" },
        { name: "Kubernetes", hint: "Cluster Orchestration" },
        { name: "Linux", hint: "Production Server OS & Bash" },
        { name: "Git", hint: "Version Control & Branching" },
        { name: "GitHub", hint: "Collaboration & PR Workflows" },
        { name: "GitHub Actions", hint: "Automated CI/CD Pipelines" },
        { name: "Vercel", hint: "Edge Deployment & Previews" },
        { name: "Postman", hint: "API Testing & Automation" },
        { name: "VS Code", hint: "Developer Environment" },
        { name: "Jest", hint: "Unit & Integration Testing" },
      ],
    },
    {
      id: "ai",
      title: "AI & Integrations",
      icon: Cpu,
      count: "5 TECHNOLOGIES",
      description: "LLMs, API orchestrations, autonomous bot systems, and financial payment escrows.",
      skills: [
        { name: "OpenAI", hint: "Function Calling & Embeddings" },
        { name: "Google Gemini", hint: "Multimodal AI & Reasoning" },
        { name: "LangChain", hint: "Agent Workflows & Tool Use" },
        { name: "Payment APIs", hint: "Telebirr & CBE Escrow" },
        { name: "Telegram Bot API", hint: "Bots & WebApp Integrations" },
      ],
    },
  ];

  return (
    <section id="profile" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 bg-surface/40 border-y border-hairline scroll-mt-16">
      <div id="about" className="absolute -top-20" />
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3 font-mono">
            Background &amp; Profile
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-4">
            Emandoyesus Tesfaye.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted">
            Full Stack Developer &amp; Software Engineering student at Mekelle University.
          </p>
        </motion.div>

        {/* 2-Column Split */}
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] items-stretch">
          {/* Left Card: Developer ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-card p-6 sm:p-8 border border-hairline"
          >
            {/* Visual Header / Photo with status indicator */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-hairline/80 mb-6 group bg-surface">
              <Image
                src="/emando-about-cartoon.jpg"
                alt="Emandoyesus Tesfaye — Full Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gradient vignette at bottom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/15 to-transparent"
              />

              {/* "Available for work" pulsing badge */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/85 px-3 py-1.5 backdrop-blur-md border border-hairline z-10 select-none">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-positive opacity-75" />
                  <span className="relative size-2 rounded-full bg-positive" />
                </span>
                <span className="font-sans text-xs font-medium text-chalk tracking-wide">
                  Available for work
                </span>
              </span>

              {/* Location badge on bottom right of photo */}
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-ink/85 px-2.5 py-1 backdrop-blur-md border border-hairline font-mono text-[11px] text-chalk/90 z-10 select-none">
                <MapPin size={12} className="text-accent" />
                <span>Mekelle, Ethiopia</span>
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
                <span className="text-chalk/90">Mekelle, Ethiopia</span>
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
                <Linkedin size={14} className="text-accent shrink-0" />
                <a
                  href="https://www.linkedin.com/in/emandoyesus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk/90 hover:text-accent transition-colors flex items-center gap-1 truncate"
                >
                  <span className="truncate">@emandoyesus</span>
                  <ExternalLink size={10} className="text-muted shrink-0" />
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <TelegramIcon className="size-[14px] text-accent shrink-0" />
                <a
                  href="https://t.me/vintage_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk/90 hover:text-accent transition-colors flex items-center gap-1 truncate"
                >
                  <span className="truncate">@vintage_01</span>
                  <ExternalLink size={10} className="text-muted shrink-0" />
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <motion.a
                href="#contact"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-chalk border border-hairline bg-surface hover:border-accent/60 hover:text-accent transition-all flex-1"
              >
                <Send size={14} />
                <span>Get in touch</span>
              </motion.a>
              <motion.a
                href="mailto:emmandoyesus@gmail.com"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-ink bg-chalk hover:bg-white transition-all flex-1"
              >
                <Mail size={14} />
                <span>Email me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Card: Interactive Tabs (About, Stack, Education & Certs) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col bg-card border border-hairline overflow-hidden"
          >
            {/* Tab navigation headers with sliding layoutId active underline */}
            <div className="flex border-b border-hairline bg-surface/60">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`relative flex-1 py-4 px-4 text-left font-sans text-sm font-medium transition-colors border-r border-hairline flex items-center gap-2 ${
                  activeTab === "about"
                    ? "text-accent bg-card"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-xs opacity-60">01</span>
                <span>About</span>
                {activeTab === "about" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("stack")}
                className={`relative flex-1 py-4 px-4 text-left font-sans text-sm font-medium transition-colors border-r border-hairline flex items-center gap-2 ${
                  activeTab === "stack"
                    ? "text-accent bg-card"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-xs opacity-60">02</span>
                <span>Skills &amp; Stack</span>
                {activeTab === "stack" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`relative flex-1 py-4 px-4 text-left font-sans text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === "education"
                    ? "text-accent bg-card"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-xs opacity-60">03</span>
                <span>Education &amp; Certs</span>
                {activeTab === "education" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            </div>

            {/* Tab Content with AnimatePresence */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1"
                >
              {activeTab === "about" && (
                <div className="space-y-6">
                  {/* CV Brief */}
                  <div className="space-y-4">
                    <p className="font-sans text-base text-chalk/90 leading-relaxed">
                      I&apos;m a full-stack developer and a Software Engineering student at Mekelle University. I build practical, fast web applications with React, Next.js, TypeScript, Node.js and Express, and I also develop mobile apps for Android and iOS.
                    </p>
                    <p className="font-sans text-base text-muted leading-relaxed">
                      My work ranges from a movie-discovery app powered by the TMDB API to a production website with an admin console for a real organization in Mekelle. I care about clean interfaces, reliable code and shipping work people actually use.
                    </p>
                  </div>

                  {/* Facts grid from CV */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-hairline bg-hairline mt-6">
                    <div className="p-4 bg-card flex items-center gap-3">
                      <MapPin size={16} className="text-accent shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Location</span>
                        <span className="text-sm font-medium text-chalk">Mekelle, Ethiopia</span>
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
                <div className="space-y-5" id="stack">
                  {/* Category Filter & Stats Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline/70">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase text-accent font-semibold tracking-wider">
                          50 Technologies
                        </span>
                        <span className="size-1 rounded-full bg-accent/60" />
                        <span className="text-xs text-chalk/90 font-mono">Production &amp; Systems</span>
                      </div>
                      <p className="text-xs text-muted font-sans mt-0.5">
                        Extracted directly from production projects and engineering coursework.
                      </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {[
                        { id: "all", label: "All" },
                        { id: "languages", label: "Languages" },
                        { id: "frameworks", label: "Frameworks" },
                        { id: "backend", label: "Backend" },
                        { id: "databases", label: "Databases" },
                        { id: "devops", label: "DevOps" },
                        { id: "ai", label: "AI" },
                      ].map((filter) => (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() => setSelectedCategory(filter.id)}
                          className={`px-2.5 py-1 text-[11px] font-mono transition-all rounded-sm ${
                            selectedCategory === filter.id
                              ? "bg-accent/20 text-accent border border-accent/50 font-semibold shadow-[0_0_12px_rgba(112,126,255,0.2)]"
                              : "text-muted hover:text-chalk hover:bg-surface border border-hairline/60"
                          }`}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Categorized Cards List */}
                  <div className="space-y-4 max-h-[580px] sm:max-h-[640px] overflow-y-auto pr-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(112,126,255,0.3)_transparent]">
                    {skillCategories
                      .filter((cat) => selectedCategory === "all" || selectedCategory === cat.id)
                      .map((cat) => {
                        const CatIcon = cat.icon;
                        return (
                          <div
                            key={cat.id}
                            className="p-4 sm:p-5 bg-surface/50 border border-hairline hover:border-hairline/90 transition-all rounded-sm"
                          >
                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 border border-hairline bg-card rounded-sm text-accent">
                                  <CatIcon size={16} />
                                </div>
                                <h4 className="font-sans text-base font-bold text-chalk">
                                  {cat.title}
                                </h4>
                              </div>
                              <span className="font-mono text-[10px] tracking-wider uppercase text-accent border border-accent/30 px-2 py-0.5 bg-accent/5 rounded-sm">
                                {cat.count}
                              </span>
                            </div>

                            {/* Card Description */}
                            <p className="text-xs text-muted font-sans leading-relaxed mb-3.5">
                              {cat.description}
                            </p>

                            <div className="h-px w-full bg-hairline/70 mb-3.5" />

                            {/* Skill Badges with Official Brand Icons */}
                            <div className="flex flex-wrap gap-2">
                              {cat.skills.map((skill) => (
                                <div
                                  key={skill.name}
                                  className="group relative inline-flex items-center gap-2 px-2.5 py-1.5 bg-card border border-hairline hover:border-accent/60 hover:bg-surface transition-all rounded-sm cursor-default select-none shadow-sm"
                                  title={`${skill.name} — ${skill.hint}`}
                                >
                                  <TechIcon
                                    name={skill.name}
                                    className="size-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                                  />
                                  <span className="font-mono text-xs text-chalk/90 font-medium group-hover:text-chalk">
                                    {skill.name}
                                  </span>
                                  <span className="hidden xl:inline-block font-sans text-[10.5px] text-muted/70 group-hover:text-accent/90 transition-colors">
                                    • {skill.hint}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
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
            </motion.div>
          </AnimatePresence>

          {/* Bottom tag line */}
          <div className="pt-6 mt-6 border-t border-hairline flex items-center justify-between text-xs text-muted font-mono">
            <span>Mekelle Univ • 2023-2027</span>
            <span className="text-accent">CLEAN CODE • DISCIPLINE • REAL PRODUCTS</span>
          </div>
        </div>
      </motion.div>
    </div>
      </div>
    </section>
  );
}
