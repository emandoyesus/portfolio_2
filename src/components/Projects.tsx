"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, payment processing, and an admin dashboard. Built for scalability and performance.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, team workflows, and automated notifications. Clean architecture with role-based access control.",
    tech: ["React", "NestJS", "MongoDB", "Docker", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "Mobile Fitness Tracker",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and health metrics. Features offline support and seamless cloud synchronization.",
    tech: ["React Native", "TypeScript", "Express", "MongoDB"],
    github: "#",
    live: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-foreground/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-16">
            Projects I&apos;ve built<span className="text-accent">.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group border border-foreground/10 p-8 md:p-10 hover:border-foreground/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Number */}
                  <span className="text-6xl md:text-7xl font-serif font-bold text-foreground/[0.06] group-hover:text-accent/20 transition-colors duration-500 leading-none">
                    {project.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs tracking-wider uppercase px-3 py-1.5 border border-foreground/8 text-muted/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group/link"
                      >
                        <Github size={16} />
                        <span className="relative">
                          Source Code
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                        </span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group/link"
                        >
                          <ExternalLink size={16} />
                          <span className="relative">
                            Live Demo
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
