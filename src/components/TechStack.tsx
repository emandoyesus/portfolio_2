"use client";

import AnimatedSection from "./AnimatedSection";

const techRow1 = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "NestJS",
  "Python",
  "TailwindCSS",
];

const techRow2 = [
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "React Native",
  "Render",
  "Docker",
  "Git",
  "REST APIs",
  "GraphQL",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  // Double the items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="px-6 py-3 border border-foreground/10 text-sm tracking-wide text-muted hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 whitespace-nowrap cursor-default select-none"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 border-t border-foreground/5"
    >
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            My Core Skillset & Toolbox
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
            Technologies I work with<span className="text-accent">.</span>
          </h2>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.2}>
        <div className="space-y-4">
          <MarqueeRow items={techRow1} />
          <MarqueeRow items={techRow2} reverse />
        </div>
      </AnimatedSection>
    </section>
  );
}
