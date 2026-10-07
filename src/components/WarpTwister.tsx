"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface WarpTwisterProps {
  radius?: number;
  narrow?: number;
  length?: number;
  hazeSpeed?: number;
  dustSpeed?: number;
  hazeStrength?: number;
  hazeFrequency?: number;
  dustDensity?: number;
  dustSize?: number;
  dustOpacity?: number;
  edgeFade?: number;
  spiralTight?: number;
  rotSpeed?: number;
  baseColor?: [number, number, number];
  baseColorLight?: [number, number, number];
  cameraDistance?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VERTEX_SHADER_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SRC = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_radius;
uniform float u_narrow;
uniform float u_length;
uniform float u_hazeSpeed;
uniform float u_dustSpeed;
uniform float u_hazeStrength;
uniform float u_hazeFrequency;
uniform float u_dustDensity;
uniform float u_dustSize;
uniform float u_dustOpacity;
uniform float u_edgeFade;
uniform float u_spiralTight;
uniform float u_rotSpeed;
uniform vec3 u_baseColor;
uniform float u_cameraDistance;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + vec2(100.0);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
  
  // Interactive pointer parallax tilt
  vec2 mouseInfluence = (u_mouse - 0.5) * 0.35;
  uv += mouseInfluence * (0.85 - clamp(length(uv), 0.0, 0.7));

  float r = length(uv);
  r = max(r, 0.001);
  float angle = atan(uv.y, uv.x);

  // Cylindrical perspective tube depth
  float z = (u_radius * u_narrow * 2.0) / (r * (u_cameraDistance / 8.5));
  
  // Spiral twist rotation along tube depth
  float twist = angle + z * (u_spiralTight * 0.35) + u_time * u_rotSpeed;
  
  // Coordinates mapping
  float u = twist / 3.14159265359;
  float v = z - u_time * (u_hazeSpeed * 0.8);

  // Volumetric haze & wavy vortex distortion
  float freq = u_hazeFrequency * 0.04;
  vec2 hazeCoords = vec2(u * freq, v * 0.4);
  float hazePattern = fbm(hazeCoords);
  float hazeBand = sin(u * 6.0 + sin(v * 2.0) * 2.0) * 0.5 + 0.5;
  float haze = (hazePattern * 0.65 + hazeBand * 0.35) * u_hazeStrength * 2.2;

  // Twisting warp dust particles
  vec2 dustCoords = vec2(
    twist * (u_dustDensity * 0.03), 
    (z - u_time * u_dustSpeed * 1.2) * (u_dustDensity * 0.03)
  );
  vec2 dustCell = floor(dustCoords);
  vec2 dustFract = fract(dustCoords) - 0.5;
  float rnd = hash(dustCell);
  vec2 jitter = (vec2(rnd, fract(rnd * 17.13)) - 0.5) * 0.6;
  float particleDist = length(dustFract - jitter);
  float particleRadius = (u_dustSize / 100.0) * 0.12;
  float particle = smoothstep(particleRadius, 0.0, particleDist) * step(0.68, rnd);
  float dust = particle * u_dustOpacity * 3.5;

  // Horizon edge fade and tunnel vanishing horizon
  float centerVanishing = smoothstep(0.04, 0.32, r);
  float outerFade = smoothstep(u_edgeFade * 0.7, 0.1, r);
  float depthFade = clamp(1.0 - z / (u_length * 3.0), 0.0, 1.0);
  float totalAlpha = clamp((haze + dust) * centerVanishing * outerFade * depthFade, 0.0, 1.0);

  // Color grading with luxury accents
  vec3 coreColor = u_baseColor;
  vec3 highlightColor = mix(coreColor, vec3(1.0, 0.98, 0.85), 0.55);
  vec3 particleColor = vec3(1.0, 0.95, 0.8);

  vec3 finalColor = coreColor * (haze * 1.5 + 0.2) + highlightColor * pow(haze, 2.0) * 1.8 + particleColor * dust * 2.5;

  gl_FragColor = vec4(finalColor * totalAlpha, totalAlpha);
}
`;

export default function WarpTwister({
  radius = 1.5,
  narrow = 1.8,
  length = 10,
  hazeSpeed = 0.5,
  dustSpeed = 1,
  hazeStrength = 0.25,
  hazeFrequency = 100,
  dustDensity = 300,
  dustSize = 100,
  dustOpacity = 0.1,
  edgeFade = 2,
  spiralTight = 0.5,
  rotSpeed = 0,
  baseColor = [0.094, 0.11, 0.4], // Cosmic navy #181c66
  cameraDistance = 8.5,
  className = "",
  style = {},
}: WarpTwisterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Pointer position with easing
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: true,
        antialias: true,
        premultipliedAlpha: true,
        powerPreference: "high-performance",
      }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported for WarpTwister");
      return;
    }

    // Helper functions to compile shader
    function createShader(
      glCtx: WebGLRenderingContext,
      type: number,
      source: string
    ): WebGLShader | null {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("Shader compile error:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      FRAGMENT_SHADER_SRC
    );
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen quad
    const quadVertices = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
    ]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
    const uRadiusLoc = gl.getUniformLocation(program, "u_radius");
    const uNarrowLoc = gl.getUniformLocation(program, "u_narrow");
    const uLengthLoc = gl.getUniformLocation(program, "u_length");
    const uHazeSpeedLoc = gl.getUniformLocation(program, "u_hazeSpeed");
    const uDustSpeedLoc = gl.getUniformLocation(program, "u_dustSpeed");
    const uHazeStrengthLoc = gl.getUniformLocation(program, "u_hazeStrength");
    const uHazeFreqLoc = gl.getUniformLocation(program, "u_hazeFrequency");
    const uDustDensityLoc = gl.getUniformLocation(program, "u_dustDensity");
    const uDustSizeLoc = gl.getUniformLocation(program, "u_dustSize");
    const uDustOpacityLoc = gl.getUniformLocation(program, "u_dustOpacity");
    const uEdgeFadeLoc = gl.getUniformLocation(program, "u_edgeFade");
    const uSpiralTightLoc = gl.getUniformLocation(program, "u_spiralTight");
    const uRotSpeedLoc = gl.getUniformLocation(program, "u_rotSpeed");
    const uBaseColorLoc = gl.getUniformLocation(program, "u_baseColor");
    const uCameraDistanceLoc = gl.getUniformLocation(program, "u_cameraDistance");

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width * dpr));
      const height = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const resizeObserver = new ResizeObserver(() => resize());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    resize();

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };

    const onMouseLeave = () => {
      mouseRef.current.targetX = 0.5;
      mouseRef.current.targetY = 0.5;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse easing
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      const currentTime = (performance.now() - startTime) * 0.001;

      gl.useProgram(program);

      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, currentTime);
      gl.uniform2f(uMouseLoc, m.x, m.y);
      gl.uniform1f(uRadiusLoc, radius);
      gl.uniform1f(uNarrowLoc, narrow);
      gl.uniform1f(uLengthLoc, length);
      gl.uniform1f(uHazeSpeedLoc, hazeSpeed);
      gl.uniform1f(uDustSpeedLoc, dustSpeed);
      gl.uniform1f(uHazeStrengthLoc, hazeStrength);
      gl.uniform1f(uHazeFreqLoc, hazeFrequency);
      gl.uniform1f(uDustDensityLoc, dustDensity);
      gl.uniform1f(uDustSizeLoc, dustSize);
      gl.uniform1f(uDustOpacityLoc, dustOpacity);
      gl.uniform1f(uEdgeFadeLoc, edgeFade);
      gl.uniform1f(uSpiralTightLoc, spiralTight);
      gl.uniform1f(uRotSpeedLoc, rotSpeed);
      gl.uniform3f(uBaseColorLoc, baseColor[0], baseColor[1], baseColor[2]);
      gl.uniform1f(uCameraDistanceLoc, cameraDistance);

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      if (vertexBuffer) gl.deleteBuffer(vertexBuffer);
      if (program) gl.deleteProgram(program);
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
    };
  }, [
    isVisible,
    radius,
    narrow,
    length,
    hazeSpeed,
    dustSpeed,
    hazeStrength,
    hazeFrequency,
    dustDensity,
    dustSize,
    dustOpacity,
    edgeFade,
    spiralTight,
    rotSpeed,
    baseColor,
    cameraDistance,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full pointer-events-none select-none", className)}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}
