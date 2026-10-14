"use client";

import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFlutter,
  SiExpo,
  SiRedux,
  SiTailwindcss,
  SiSvelte,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiGooglecloud,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiVercel,
  SiPostman,
  SiJest,
  SiGooglegemini,
  SiLangchain,
  SiTelegram,
  SiGraphql,
  SiVite,
  SiCloudinary,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { TbBrandOpenai, TbBrandVscode, TbCreditCardFilled, TbServer2 } from "react-icons/tb";
import { Code2 } from "lucide-react";

// Custom Zustand Bear logo
export function ZustandBearIcon({ className = "size-4", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <circle cx="5.5" cy="5.5" r="3" />
      <circle cx="18.5" cy="5.5" r="3" />
      <circle cx="12" cy="13.5" r="7.5" />
      <circle cx="9.2" cy="12" r="1.2" fill="#080808" />
      <circle cx="14.8" cy="12" r="1.2" fill="#080808" />
      <ellipse cx="12" cy="15.2" rx="2.4" ry="1.6" fill="#080808" />
    </svg>
  );
}

export interface TechMeta {
  label: string;
  color: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  roleHint?: string;
}

export const TECH_REGISTRY: Record<string, TechMeta> = {
  // Languages
  javascript: { label: "JavaScript", color: "#F7DF1E", icon: SiJavascript, roleHint: "ES6+, Async, DOM" },
  typescript: { label: "TypeScript", color: "#3178C6", icon: SiTypescript, roleHint: "Type Systems & Interfaces" },
  python: { label: "Python", color: "#3776AB", icon: SiPython, roleHint: "Backend, Scripting & AI" },
  dart: { label: "Dart", color: "#0175C2", icon: SiDart, roleHint: "Cross-Platform Mobile" },
  java: { label: "Java", color: "#EA2D2E", icon: FaJava, roleHint: "OOP & Android Architecture" },
  "c++": { label: "C++", color: "#00599C", icon: SiCplusplus, roleHint: "Algorithms & Low-level Systems" },
  cpp: { label: "C++", color: "#00599C", icon: SiCplusplus, roleHint: "Algorithms & Low-level Systems" },
  html5: { label: "HTML5", color: "#E34F26", icon: SiHtml5, roleHint: "Semantic Web & Accessibility" },
  html: { label: "HTML5", color: "#E34F26", icon: SiHtml5, roleHint: "Semantic Web & Accessibility" },
  css3: { label: "CSS3", color: "#1572B6", icon: SiCss, roleHint: "Modern Layouts & Animations" },
  css: { label: "CSS3", color: "#1572B6", icon: SiCss, roleHint: "Modern Layouts & Animations" },

  // Frameworks & Libraries
  react: { label: "React", color: "#61DAFB", icon: SiReact, roleHint: "Hooks, Architecture & UI" },
  "react.js": { label: "React", color: "#61DAFB", icon: SiReact, roleHint: "Hooks, Architecture & UI" },
  "next.js": { label: "Next.js", color: "#FFFFFF", icon: SiNextdotjs, roleHint: "App Router, SSR & ISR" },
  nextjs: { label: "Next.js", color: "#FFFFFF", icon: SiNextdotjs, roleHint: "App Router, SSR & ISR" },
  svelte: { label: "Svelte", color: "#FF3E00", icon: SiSvelte, roleHint: "Reactivity & Light Bundles" },
  "tailwind css": { label: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss, roleHint: "Design Tokens & Responsive UI" },
  tailwind: { label: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss, roleHint: "Design Tokens & Responsive UI" },
  redux: { label: "Redux", color: "#764ABC", icon: SiRedux, roleHint: "Predictable State Container" },
  zustand: { label: "Zustand", color: "#E58B44", icon: ZustandBearIcon, roleHint: "Minimalist State Management" },

  // Mobile
  flutter: { label: "Flutter", color: "#02569B", icon: SiFlutter, roleHint: "Cross-Platform iOS & Android" },
  "react native": { label: "React Native", color: "#61DAFB", icon: SiReact, roleHint: "Native Mobile UI" },
  expo: { label: "Expo / RN", color: "#FFFFFF", icon: SiExpo, roleHint: "EAS & Rapid Mobile Deployments" },
  "expo / rn": { label: "Expo / RN", color: "#FFFFFF", icon: SiExpo, roleHint: "EAS & Rapid Mobile Deployments" },

  // Backend & APIs
  "node.js": { label: "Node.js", color: "#5FA04E", icon: SiNodedotjs, roleHint: "Event-Driven Server Runtime" },
  nodejs: { label: "Node.js", color: "#5FA04E", icon: SiNodedotjs, roleHint: "Event-Driven Server Runtime" },
  express: { label: "Express.js", color: "#FFFFFF", icon: SiExpress, roleHint: "REST APIs & Middleware" },
  "express.js": { label: "Express.js", color: "#FFFFFF", icon: SiExpress, roleHint: "REST APIs & Middleware" },
  "nest.js": { label: "NestJS", color: "#E0234E", icon: SiNestjs, roleHint: "Enterprise TypeScript Architecture" },
  nestjs: { label: "NestJS", color: "#E0234E", icon: SiNestjs, roleHint: "Enterprise TypeScript Architecture" },
  fastapi: { label: "FastAPI", color: "#009688", icon: SiFastapi, roleHint: "Async Python Endpoints & OpenAPI" },
  django: { label: "Django", color: "#092E20", icon: SiDjango, roleHint: "Batteries-Included Services & ORM" },
  "restful apis": { label: "RESTful APIs", color: "#707EFF", icon: TbServer2, roleHint: "Contract-First Architecture" },
  "rest apis": { label: "REST APIs", color: "#707EFF", icon: TbServer2, roleHint: "Contract-First Architecture" },
  graphql: { label: "GraphQL", color: "#E10098", icon: SiGraphql, roleHint: "Schema & Typed Queries" },

  // Databases & Cloud
  postgresql: { label: "PostgreSQL", color: "#4169E1", icon: SiPostgresql, roleHint: "Row-Level Security & Indexing" },
  supabase: { label: "Supabase", color: "#3ECF8E", icon: SiSupabase, roleHint: "Cloud Postgres, Auth & Realtime" },
  firebase: { label: "Firebase", color: "#FFCA28", icon: SiFirebase, roleHint: "Auth, Firestore & Hosting" },
  firestore: { label: "Firestore", color: "#FFCA28", icon: SiFirebase, roleHint: "NoSQL Realtime Document DB" },
  mongodb: { label: "MongoDB", color: "#47A248", icon: SiMongodb, roleHint: "Document Store & Aggregation" },
  redis: { label: "Redis", color: "#DC382D", icon: SiRedis, roleHint: "In-Memory Cache & Queues" },
  mysql: { label: "MySQL", color: "#4479A1", icon: SiMysql, roleHint: "Relational Storage & Queries" },
  aws: { label: "AWS", color: "#FF9900", icon: FaAws, roleHint: "S3, EC2, Lambda & IAM" },
  "google cloud": { label: "Google Cloud", color: "#4285F4", icon: SiGooglecloud, roleHint: "Cloud Run & GCP Infrastructure" },
  azure: { label: "Azure", color: "#0089D6", icon: VscAzure, roleHint: "Cloud Compute & Services" },
  terraform: { label: "Terraform", color: "#844FBA", icon: SiTerraform, roleHint: "Infrastructure as Code (IaC)" },

  // DevOps & Tools
  docker: { label: "Docker", color: "#2496ED", icon: SiDocker, roleHint: "Multi-Stage Containers" },
  kubernetes: { label: "Kubernetes", color: "#326CE5", icon: SiKubernetes, roleHint: "Cluster Orchestration" },
  linux: { label: "Linux", color: "#FCC624", icon: SiLinux, roleHint: "Production Server OS & Bash" },
  git: { label: "Git", color: "#F05032", icon: SiGit, roleHint: "Version Control & Branching" },
  github: { label: "GitHub", color: "#FFFFFF", icon: SiGithub, roleHint: "Code Collaboration & PRs" },
  "git & github": { label: "Git & GitHub", color: "#F05032", icon: SiGit, roleHint: "Version Control & Collaboration" },
  "github actions": { label: "GitHub Actions", color: "#2088FF", icon: SiGithubactions, roleHint: "Automated CI/CD Pipelines" },
  vercel: { label: "Vercel", color: "#FFFFFF", icon: SiVercel, roleHint: "Edge Deployment & CI/CD" },
  "vs code": { label: "VS Code", color: "#007ACC", icon: TbBrandVscode, roleHint: "Development Environment" },
  postman: { label: "Postman", color: "#FF6C37", icon: SiPostman, roleHint: "API Testing & Automation" },
  jest: { label: "Jest", color: "#C21325", icon: SiJest, roleHint: "Unit & Integration Testing" },
  vite: { label: "Vite", color: "#646CFF", icon: SiVite, roleHint: "Lightning Fast Bundling" },
  cloudinary: { label: "Cloudinary", color: "#3448C5", icon: SiCloudinary, roleHint: "Media Optimization CDN" },

  // AI & Integrations
  openai: { label: "OpenAI", color: "#10A37F", icon: TbBrandOpenai, roleHint: "Function Calling & Embeddings" },
  "google gemini": { label: "Google Gemini", color: "#8E75FF", icon: SiGooglegemini, roleHint: "Multimodal AI & Reasoning" },
  gemini: { label: "Google Gemini", color: "#8E75FF", icon: SiGooglegemini, roleHint: "Multimodal AI & Reasoning" },
  langchain: { label: "LangChain", color: "#1C3C3C", icon: SiLangchain, roleHint: "Agent Workflows & Tool Use" },
  "payment apis": { label: "Payment APIs", color: "#00C48C", icon: TbCreditCardFilled, roleHint: "Telebirr & CBE Escrow" },
  telegram: { label: "Telegram Bot API", color: "#26A5E4", icon: SiTelegram, roleHint: "Bots & WebApp Integrations" },
  "telegram bots": { label: "Telegram Bot API", color: "#26A5E4", icon: SiTelegram, roleHint: "Bots & WebApp Integrations" },
};

export function normalizeTechKey(name: string): string {
  return name.trim().toLowerCase();
}

export function getTechMeta(name: string): TechMeta {
  const key = normalizeTechKey(name);
  if (TECH_REGISTRY[key]) {
    return TECH_REGISTRY[key];
  }
  // Fallback matching partials
  for (const registryKey of Object.keys(TECH_REGISTRY)) {
    if (key.includes(registryKey) || registryKey.includes(key)) {
      return TECH_REGISTRY[registryKey];
    }
  }
  // Generic fallback
  return {
    label: name,
    color: "#707EFF",
    icon: Code2,
    roleHint: "Engineering Competency",
  };
}

interface TechIconProps {
  name: string;
  className?: string;
  colored?: boolean;
}

export default function TechIcon({ name, className = "size-4", colored = true }: TechIconProps) {
  const meta = getTechMeta(name);
  const IconComponent = meta.icon;

  return (
    <IconComponent
      className={className}
      style={colored ? { color: meta.color } : undefined}
      aria-hidden="true"
    />
  );
}
