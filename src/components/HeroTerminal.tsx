"use client";

import { useState } from "react";
import { FileCode, Copy, Check, Minus, ChevronDown, ChevronRight, ChevronsUpDown } from "lucide-react";

interface SkillCategory {
  key: string;
  items: string[];
}

export default function HeroTerminal() {
  const [copied, setCopied] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Skill categories start collapsed by default
  const [collapsedSkills, setCollapsedSkills] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
    mobile: true,
    databases: true,
  });

  const staticFields = [
    { key: "engineer", value: "Emandoyesus Tesfaye" },
    { key: "role", value: "Full Stack Developer" },
    { key: "location", value: "Dessie, Ethiopia" },
    { key: "education", value: "BSc. Software Engineering, Mekelle Univ." },
  ];

  const skillCategories: SkillCategory[] = [
    { key: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { key: "backend", items: ["Node.js", "Express", "Telegram bots"] },
    { key: "mobile", items: ["Android", "iOS"] },
    { key: "databases", items: ["SQL", "NoSQL", "Firestore"] },
  ];

  // Full formatted JSON string for copying
  const fullJsonData = {
    engineer: "Emandoyesus Tesfaye",
    role: "Full Stack Developer",
    location: "Dessie, Ethiopia",
    education: "BSc. Software Engineering, Mekelle Univ.",
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Telegram bots"],
    mobile: ["Android", "iOS"],
    databases: ["SQL", "NoSQL", "Firestore"],
  };

  const jsonString = JSON.stringify(fullJsonData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleSkill = (key: string) => {
    setCollapsedSkills((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const allCollapsed = Object.values(collapsedSkills).every(Boolean);

  const toggleAllSkills = () => {
    const nextState = !allCollapsed;
    setCollapsedSkills({
      frontend: nextState,
      backend: nextState,
      mobile: nextState,
      databases: nextState,
    });
  };

  // Line counter for line numbers in the gutter
  let lineCounter = 1;

  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:max-w-[510px] xl:max-w-[530px]">
      {/* Background ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#181c66]/50 via-[#2e3794]/40 to-[#181c66]/50 rounded-xl blur-xl opacity-70 transition duration-1000 -z-10" />

      {/* Code Window Box */}
      <div className="relative bg-card/95 border border-hairline backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-surface/90 border-b border-hairline select-none">
          {/* Traffic lights with interactive minimize button */}
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/70" />
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              className="size-2.5 rounded-full bg-amber-500 hover:brightness-125 transition-all cursor-pointer"
              title={isMinimized ? "Expand terminal" : "Minimize terminal"}
            />
            <span className="size-2.5 rounded-full bg-emerald-500/70" />
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              className="ml-2 font-mono text-[11.5px] text-chalk/90 flex items-center gap-1.5 font-medium hover:text-accent transition-colors"
            >
              <FileCode size={12} className="text-accent" />
              <span>stack.json</span>
              {isMinimized && (
                <span className="text-[10px] text-muted font-normal ml-1">
                  (minimized)
                </span>
              )}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            {/* Expand / Collapse all skills button */}
            <button
              type="button"
              onClick={toggleAllSkills}
              className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-muted hover:text-chalk border border-hairline hover:border-hairline-strong transition-all rounded bg-ink/40"
              title={allCollapsed ? "Expand all skills" : "Collapse all skills"}
            >
              <ChevronsUpDown size={11} className={allCollapsed ? "text-accent" : "text-muted"} />
              <span className="text-[10px]">{allCollapsed ? "Expand" : "Collapse"}</span>
            </button>

            {/* Copy button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-muted hover:text-chalk border border-hairline hover:border-hairline-strong transition-all rounded bg-ink/40"
              title="Copy JSON"
            >
              {copied ? (
                <>
                  <Check size={11} className="text-positive" />
                  <span className="text-positive text-[10px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={11} />
                  <span className="text-[10px]">Copy</span>
                </>
              )}
            </button>

            {/* Minimize button */}
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              className="grid size-5 place-items-center text-muted hover:text-accent border border-hairline rounded bg-ink/40 transition-colors"
              title={isMinimized ? "Expand" : "Minimize"}
            >
              {isMinimized ? <ChevronDown size={12} /> : <Minus size={11} />}
            </button>
          </div>
        </div>

        {/* Collapsible JSON Code Body with Line Numbers & Folding */}
        {!isMinimized && (
          <>
            <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[12.5px] leading-relaxed max-h-[340px] overflow-y-auto selection:bg-accent/30 bg-ink/40">
              <div className="space-y-0.5">
                {/* Line 1: Opening Brace */}
                <div className="flex items-center gap-2 hover:bg-white/[0.02] px-1 py-0.5">
                  <div className="w-6 text-right select-none text-[10.5px] text-muted/40 font-mono">
                    {lineCounter++}
                  </div>
                  <div className="flex-1 font-mono text-accent font-semibold">&#123;</div>
                </div>

                {/* Static Fields (Engineer, Role, Location, Education) */}
                {staticFields.map((field) => {
                  const currentLine = lineCounter++;
                  return (
                    <div
                      key={field.key}
                      className="flex items-center gap-2 hover:bg-white/[0.02] px-1 py-0.5"
                    >
                      <div className="w-6 text-right select-none text-[10.5px] text-muted/40 font-mono">
                        {currentLine}
                      </div>
                      <div className="flex-1 font-mono pl-3">
                        <span className="text-muted/80">&quot;{field.key}&quot;</span>:{" "}
                        <span className="text-emerald-400">&quot;{field.value}&quot;</span>,
                      </div>
                    </div>
                  );
                })}

                {/* Skill Categories (Collapsible with IDE Fold Arrow) */}
                {skillCategories.map((cat, catIdx) => {
                  const isCollapsed = collapsedSkills[cat.key];
                  const isLastCategory = catIdx === skillCategories.length - 1;
                  const startLine = lineCounter++;

                  if (isCollapsed) {
                    return (
                      <div
                        key={cat.key}
                        onClick={() => toggleSkill(cat.key)}
                        className="flex items-center gap-2 group/fold hover:bg-white/[0.04] px-1 py-0.5 rounded cursor-pointer transition-colors"
                      >
                        <div className="w-6 flex items-center justify-end select-none text-[10.5px] font-mono gap-1 text-muted/50 group-hover/fold:text-accent">
                          <ChevronRight
                            size={11}
                            className="text-muted/60 group-hover/fold:text-accent transition-transform group-hover/fold:translate-x-0.5"
                          />
                          <span>{startLine}</span>
                        </div>
                        <div className="flex-1 font-mono pl-3 select-none">
                          <span className="text-accent group-hover/fold:underline underline-offset-4">
                            &quot;{cat.key}&quot;
                          </span>
                          : [
                          <span
                            className="inline-flex items-center gap-1 mx-1.5 px-2 py-0.5 rounded bg-surface/90 border border-hairline group-hover/fold:border-accent/70 text-accent text-[11px] font-mono transition-all group-hover/fold:bg-card shadow-sm"
                            title={`Click to expand: ${cat.items.join(", ")}`}
                          >
                            <span className="text-muted/50 font-sans text-[10px]">...</span>
                            <span>{cat.items.length} skills</span>
                          </span>
                          ]{isLastCategory ? "" : ","}
                        </div>
                      </div>
                    );
                  }

                  // Expanded view: opening line, item lines, closing bracket line
                  return (
                    <div key={cat.key} className="space-y-0.5">
                      {/* Category Opening line */}
                      <div
                        onClick={() => toggleSkill(cat.key)}
                        className="flex items-center gap-2 group/fold hover:bg-white/[0.03] px-1 py-0.5 rounded cursor-pointer"
                      >
                        <div className="w-6 flex items-center justify-end select-none text-[10.5px] font-mono gap-1 text-accent">
                          <ChevronDown size={11} className="text-accent" />
                          <span>{startLine}</span>
                        </div>
                        <div className="flex-1 font-mono pl-3">
                          <span className="text-accent">&quot;{cat.key}&quot;</span>: [
                        </div>
                      </div>

                      {/* Items */}
                      {cat.items.map((item, itemIdx) => {
                        const itemLine = lineCounter++;
                        const isLastItem = itemIdx === cat.items.length - 1;
                        return (
                          <div
                            key={item}
                            className="flex items-center gap-2 hover:bg-white/[0.02] px-1 py-0.5"
                          >
                            <div className="w-6 text-right select-none text-[10.5px] text-muted/40 font-mono">
                              {itemLine}
                            </div>
                            <div className="flex-1 font-mono pl-7">
                              <span className="text-[#93c5fd]">&quot;{item}&quot;</span>
                              {isLastItem ? "" : ","}
                            </div>
                          </div>
                        );
                      })}

                      {/* Closing bracket */}
                      <div
                        onClick={() => toggleSkill(cat.key)}
                        className="flex items-center gap-2 hover:bg-white/[0.03] px-1 py-0.5 cursor-pointer group/close"
                      >
                        <div className="w-6 text-right select-none text-[10.5px] text-muted/40 font-mono group-hover/close:text-accent">
                          {lineCounter++}
                        </div>
                        <div className="flex-1 font-mono pl-3">
                          <span className="text-accent font-semibold group-hover/close:text-chalk">
                            ]{isLastCategory ? "" : ","}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Final Closing Brace */}
                <div className="flex items-center gap-2 hover:bg-white/[0.02] px-1 py-0.5">
                  <div className="w-6 text-right select-none text-[10.5px] text-muted/40 font-mono">
                    {lineCounter}
                  </div>
                  <div className="flex-1 font-mono text-accent font-semibold">&#125;</div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-surface/90 border-t border-hairline text-[10.5px] font-mono text-muted select-none">
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-positive animate-pulse" />
                <span className="text-chalk/80">JSON • 100% Typed</span>
              </div>
              <span className="text-accent font-medium">
                UTF-8 • {lineCounter} lines {allCollapsed ? "(skills collapsed)" : "(skills expanded)"}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
