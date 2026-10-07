"use client";

import AnimatedSection from "./AnimatedSection";

const values = [
  {
    title: "Clean, Maintainable Code",
    description:
      "Writing software that's built to last and easy to reason about.",
  },
  {
    title: "Scalable Architectures",
    description:
      "Designing systems that grow gracefully under increasing demand.",
  },
  {
    title: "Crafted with Rigor",
    description: "Every line of code is intentional, tested, and purposeful.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-16 max-w-3xl">
            A software engineer who values
            <span className="italic text-accent">
              {" "}
              substance over spectacle.
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-muted leading-relaxed">
              <p className="text-lg">
                I&apos;m a Full-Stack Web & Mobile Developer with a deep
                appreciation for well-architected software. I build across the
                entire stack — from responsive frontends with React and Next.js,
                to robust backends with Node.js, NestJS, and Python.
              </p>
              <p>
                My approach is rooted in simplicity and intentionality. I believe
                the best software is the kind that quietly does its job —
                reliable, performant, and maintainable. No unnecessary
                complexity, no over-engineering.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies,
                contributing to open-source, or thinking about how to make
                systems more elegant.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8 md:pt-2">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-5 h-5 rounded-full border-2 border-accent/40 group-hover:border-accent flex items-center justify-center transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
