"use client";

import { useState } from "react";
import { FileCode, Copy, Check, Minus, ChevronDown, ChevronUp } from "lucide-react";

export default function HeroTerminal() {
  const [copied, setCopied] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const stackData = {
    engineer: "Emandoyesus Tesfaye",
    role: "Full Stack Developer",
    location: "Dessie, Ethiopia",
    education: "BSc. Software Engineering, Mekelle Univ.",
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Telegram bots"],
    mobile: ["Android", "iOS"],
    databases: ["SQL", "NoSQL", "Firestore"],
  };

  const jsonString = JSON.stringify(stackData, null, 2);
  const jsonLines = jsonString.split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        {/* Collapsible JSON Code Body with Line Numbers */}
        {!isMinimized && (
          <>
            <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[12.5px] leading-relaxed max-h-[260px] overflow-y-auto selection:bg-accent/30 bg-ink/40">
              <pre className="whitespace-pre-wrap">
                {jsonLines.map((line, idx) => {
                  let formattedLine = <span className="text-chalk/90">{line}</span>;

                  if (
                    line.includes('"engineer":') ||
                    line.includes('"role":') ||
                    line.includes('"location":') ||
                    line.includes('"education":')
                  ) {
                    const parts = line.split(":");
                    formattedLine = (
                      <>
                        <span className="text-muted/80">{parts[0]}</span>:
                        <span className="text-emerald-400">{parts[1]}</span>
                      </>
                    );
                  } else if (line.includes('": [')) {
                    const parts = line.split(":");
                    formattedLine = (
                      <>
                        <span className="text-accent">{parts[0]}</span>:
                        <span className="text-chalk">{parts[1]}</span>
                      </>
                    );
                  } else if (line.trim().startsWith('"')) {
                    formattedLine = <span className="text-amber-300/90">{line}</span>;
                  } else if (
                    line.trim() === "{" ||
                    line.trim() === "}" ||
                    line.trim() === "]," ||
                    line.trim() === "]"
                  ) {
                    formattedLine = <span className="text-accent font-semibold">{line}</span>;
                  }

                  return (
                    <div key={idx} className="flex items-start gap-3 hover:bg-white/[0.02] px-1 py-0.5">
                      <span className="select-none text-muted/40 text-[10px] w-4 text-right font-mono">
                        {idx + 1}
                      </span>
                      <div className="flex-1 font-mono">{formattedLine}</div>
                    </div>
                  );
                })}
              </pre>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-surface/90 border-t border-hairline text-[10.5px] font-mono text-muted select-none">
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-positive animate-pulse" />
                <span className="text-chalk/80">JSON • 100% Typed</span>
              </div>
              <span className="text-accent font-medium">UTF-8 • {jsonLines.length} lines</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
