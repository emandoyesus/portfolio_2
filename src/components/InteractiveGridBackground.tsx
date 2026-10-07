"use client";

import { useEffect, useRef } from "react";

interface SubtlePulse {
  x: number;
  y: number;
  length: number;
  speed: number;
  dir: "h" | "v";
  color: string;
}

export default function InteractiveGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Elegant, spacious grid spacing
    const gridSize = 64;

    // Smooth mouse position with gentle easing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    // Maximum 2 very subtle, slow pulses at any time
    const pulses: SubtlePulse[] = [];
    const maxPulses = 2;

    // Calm ambient drifting light pools
    const orbs = [
      {
        baseX: 0.25,
        baseY: 0.35,
        radius: 380,
        color: "rgba(107, 143, 113, 0.07)",
        phase: 0,
        speed: 0.0003,
      },
      {
        baseX: 0.75,
        baseY: 0.6,
        radius: 420,
        color: "rgba(107, 143, 113, 0.05)",
        phase: Math.PI / 2,
        speed: 0.00025,
      },
    ];

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    handleResize();

    // Spawn an occasional, gentle line pulse
    const spawnPulse = () => {
      if (pulses.length >= maxPulses) return;

      const isHorizontal = Math.random() > 0.5;
      const numCols = Math.ceil(width / gridSize);
      const numRows = Math.ceil(height / gridSize);

      if (isHorizontal) {
        const row = Math.floor(Math.random() * numRows);
        const y = row * gridSize;
        const forward = Math.random() > 0.5;
        pulses.push({
          x: forward ? -80 : width + 80,
          y,
          length: 100,
          speed: (forward ? 1 : -1) * 0.9,
          dir: "h",
          color: "rgba(107, 143, 113, 0.35)",
        });
      } else {
        const col = Math.floor(Math.random() * numCols);
        const x = col * gridSize;
        const forward = Math.random() > 0.5;
        pulses.push({
          x,
          y: forward ? -80 : height + 80,
          length: 100,
          speed: (forward ? 1 : -1) * 0.9,
          dir: "v",
          color: "rgba(107, 143, 113, 0.35)",
        });
      }
    };

    let tick = 0;

    const render = () => {
      tick++;

      // Gentle mouse trailing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Cream background base
      ctx.fillStyle = "#f5f0e1";
      ctx.fillRect(0, 0, width, height);

      // 1. Soft, slow ambient orbs
      orbs.forEach((orb) => {
        orb.phase += orb.speed;
        const ox = width * orb.baseX + Math.sin(orb.phase) * 60;
        const oy = height * orb.baseY + Math.cos(orb.phase * 1.2) * 50;

        const grad = ctx.createRadialGradient(ox, oy, 10, ox, oy, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "rgba(245, 240, 225, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Base Grid Lines (clean, quiet, minimalist)
      ctx.lineWidth = 1;
      const numCols = Math.ceil(width / gridSize);
      const numRows = Math.ceil(height / gridSize);

      // Vertical lines
      for (let col = 0; col <= numCols; col++) {
        const x = col * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.strokeStyle = "rgba(26, 26, 26, 0.045)";
        ctx.stroke();
      }

      // Horizontal lines
      for (let row = 0; row <= numRows; row++) {
        const y = row * gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = "rgba(26, 26, 26, 0.045)";
        ctx.stroke();
      }

      // 3. Subtle Interactive Mouse Aura
      if (mouse.x > -500) {
        const spotRadius = 160;
        const mouseGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          spotRadius
        );
        mouseGrad.addColorStop(0, "rgba(107, 143, 113, 0.12)");
        mouseGrad.addColorStop(1, "rgba(245, 240, 225, 0)");

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Softly illuminate nearest grid lines
        const startCol = Math.max(0, Math.floor((mouse.x - spotRadius) / gridSize));
        const endCol = Math.min(numCols, Math.ceil((mouse.x + spotRadius) / gridSize));
        const startRow = Math.max(0, Math.floor((mouse.y - spotRadius) / gridSize));
        const endRow = Math.min(numRows, Math.ceil((mouse.y + spotRadius) / gridSize));

        for (let col = startCol; col <= endCol; col++) {
          const x = col * gridSize;
          const dist = Math.abs(x - mouse.x);
          if (dist < spotRadius) {
            const alpha = (1 - dist / spotRadius) * 0.12;
            ctx.beginPath();
            ctx.moveTo(x, Math.max(0, mouse.y - spotRadius));
            ctx.lineTo(x, Math.min(height, mouse.y + spotRadius));
            ctx.strokeStyle = `rgba(107, 143, 113, ${alpha})`;
            ctx.stroke();
          }
        }

        for (let row = startRow; row <= endRow; row++) {
          const y = row * gridSize;
          const dist = Math.abs(y - mouse.y);
          if (dist < spotRadius) {
            const alpha = (1 - dist / spotRadius) * 0.12;
            ctx.beginPath();
            ctx.moveTo(Math.max(0, mouse.x - spotRadius), y);
            ctx.lineTo(Math.min(width, mouse.x + spotRadius), y);
            ctx.strokeStyle = `rgba(107, 143, 113, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // 4. Subtle Crosshairs (+) at intersections (architectural & stoic)
      const crossSize = 2.5;
      for (let col = 0; col <= numCols; col++) {
        for (let row = 0; row <= numRows; row++) {
          const cx = col * gridSize;
          const cy = row * gridSize;

          let alpha = 0.08;
          const distToMouse = Math.hypot(cx - mouse.x, cy - mouse.y);
          if (distToMouse < 160) {
            alpha += (1 - distToMouse / 160) * 0.2;
          }

          ctx.strokeStyle = `rgba(26, 26, 26, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(cx - crossSize, cy);
          ctx.lineTo(cx + crossSize, cy);
          ctx.moveTo(cx, cy - crossSize);
          ctx.lineTo(cx, cy + crossSize);
          ctx.stroke();
        }
      }

      // 5. Very Occasional, Slow, Gentle Line Pulse (every ~6-8 seconds)
      if (tick % 240 === 0 && Math.random() > 0.4) {
        spawnPulse();
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        if (p.dir === "h") {
          p.x += p.speed;
          const pulseGrad = ctx.createLinearGradient(
            p.x - (p.speed > 0 ? p.length : -p.length),
            p.y,
            p.x,
            p.y
          );
          pulseGrad.addColorStop(0, "rgba(107, 143, 113, 0)");
          pulseGrad.addColorStop(0.7, p.color);
          pulseGrad.addColorStop(1, "rgba(107, 143, 113, 0.5)");

          ctx.beginPath();
          ctx.moveTo(p.x - (p.speed > 0 ? p.length : -p.length), p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = pulseGrad;
          ctx.lineWidth = 1.4;
          ctx.stroke();

          if (p.x < -120 || p.x > width + 120) {
            pulses.splice(i, 1);
          }
        } else {
          p.y += p.speed;
          const pulseGrad = ctx.createLinearGradient(
            p.x,
            p.y - (p.speed > 0 ? p.length : -p.length),
            p.x,
            p.y
          );
          pulseGrad.addColorStop(0, "rgba(107, 143, 113, 0)");
          pulseGrad.addColorStop(0.7, p.color);
          pulseGrad.addColorStop(1, "rgba(107, 143, 113, 0.5)");

          ctx.beginPath();
          ctx.moveTo(p.x, p.y - (p.speed > 0 ? p.length : -p.length));
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = pulseGrad;
          ctx.lineWidth = 1.4;
          ctx.stroke();

          if (p.y < -120 || p.y > height + 120) {
            pulses.splice(i, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
