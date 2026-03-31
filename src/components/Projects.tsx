"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface Project {
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  longDescription: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tech: string[];
  link: string;
  liveUrl?: string;
  appStoreUrl?: string;
  images: string[];
  imageStyle: "phone" | "desktop" | "chart" | "none";
}

const projects: Project[] = [
  {
    title: "Contrarian Options Alpha",
    tag: "Systems",
    tagColor: "text-red-400 bg-red-400/10",
    description:
      "C++20 options trading engine. Lock-free SPSC ring buffer, 29M msg/sec throughput, sub-100ns latency. Statistically verified with Harvey-Liu-Zhu framework.",
    longDescription:
      "High-performance quantitative trading engine implementing research-backed strategies — HV-IV gap exploitation (Goyal-Saretto 2009), post-earnings announcement drift, and VIX regime filtering (Baltussen et al. 2018). The C++ core uses a lock-free single-producer single-consumer ring buffer for zero-contention message passing, with pybind11 bindings achieving 16.7x speedup over pure Python. Full pipeline: Polygon.io screening → FinBERT + Claude AI sentiment → C++ SignalScorer (RSI, Bollinger, Volume, Greeks) → Kelly sizing → IBKR execution.",
    highlights: [
      "Lock-free SPSC ring buffer — 29M msg/sec, 85ns p50 latency",
      "231 C++ tests + 281 Python tests, all passing",
      "Statistically verified: Sharpe t-stat 3.86, Monte Carlo p-value 0.0000",
      "pybind11 bridge: 16.7x speedup over pure Python",
    ],
    metrics: [
      { label: "Throughput", value: "29M msg/sec" },
      { label: "Latency (p50)", value: "85ns" },
      { label: "Win Rate", value: "95.7%" },
      { label: "Sharpe", value: "2.75" },
    ],
    tech: [
      "C++20",
      "Python",
      "pybind11",
      "IBKR API",
      "CMake",
      "FinBERT",
      "Polygon.io",
    ],
    link: "https://github.com/AadityaMishra1/Contrarian-Options-Alpha-Engine",
    images: [],
    imageStyle: "none",
  },
  {
    title: "NewsNine",
    tag: "Mobile",
    tagColor: "text-yellow-400 bg-yellow-400/10",
    description:
      "iOS news app on the App Store. TikTok-style full-screen swipe UX with AI bullet-point summaries from 38+ sources. Custom multi-factor feed ranking.",
    longDescription:
      "Full-screen, swipe-based mobile news app with AI-generated bullet-point summaries. Dual news ingestion pipeline — RSS feeds for breadth, news API for trending/breaking. Custom multi-factor scoring ranks stories by recency, source credibility, topic relevance, and engagement. Gesture-driven navigation with React Native Reanimated spring physics. Built with editorial-grade design — full-bleed hero images, staggered bullet-point reveals, and haptic feedback on every interaction.",
    highlights: [
      "Live on the App Store — real users, real reviews",
      "38+ sources (AP, BBC, NYT, Foreign Policy, The Atlantic...)",
      "Custom feed ranking algorithm with multi-factor scoring",
      "Editorial-grade UI — full-bleed images, spring physics, haptics",
    ],
    metrics: [
      { label: "Sources", value: "38+" },
      { label: "Status", value: "App Store" },
    ],
    tech: [
      "React Native",
      "Expo",
      "Supabase",
      "TypeScript",
      "Reanimated",
      "Zustand",
    ],
    link: "https://github.com/AadityaMishra1/NewsNine",
    appStoreUrl: "https://apps.apple.com/us/app/newsnine/id6759874484",
    images: [
      "/projects/newsnine-1.png",
      "/projects/newsnine-2.png",
      "/projects/newsnine-3.png",
    ],
    imageStyle: "phone",
  },
  {
    title: "Almanac",
    tag: "Full-Stack",
    tagColor: "text-green-400 bg-green-400/10",
    description:
      "AI syllabus parser — drop a PDF, every exam, assignment, and deadline lands on your Google Calendar. 99% extraction accuracy. Live in production.",
    longDescription:
      "Upload a syllabus PDF and Almanac uses Gemini AI to extract every assignment, exam, and deadline into structured data. Users review and edit extracted events before syncing directly to Google Calendar via OAuth. Built with Next.js 15 App Router, server actions, Prisma ORM with PostgreSQL on Supabase, and NextAuth for Google OAuth. Includes a chat interface powered by Groq for asking questions about syllabi. Designed to Notion/Linear/Cal.com standards — warm amber palette, skeleton loading, staggered animations.",
    highlights: [
      "Live at almanaccal.com — production traffic",
      "99% extraction accuracy on syllabus PDFs",
      "Google Calendar OAuth sync — events land in seconds",
      "Chat interface to ask questions about your syllabus",
    ],
    metrics: [
      { label: "Accuracy", value: "99%" },
      { label: "Status", value: "Production" },
    ],
    tech: [
      "Next.js 15",
      "Gemini AI",
      "Google Calendar API",
      "PostgreSQL",
      "Prisma",
      "Groq",
    ],
    link: "https://github.com/AadityaMishra1/Almanac",
    liveUrl: "https://almanaccal.com",
    images: ["/projects/almanac.png", "/projects/almanac-dark.png"],
    imageStyle: "desktop",
  },
  {
    title: "Gilfoyle",
    tag: "Desktop",
    tagColor: "text-purple-400 bg-purple-400/10",
    description:
      "Desktop IDE for Claude Code. Full PTY terminal, multi-tab sessions, real-time activity feed, git panel with inline diffs. Installable via Homebrew.",
    longDescription:
      "Cross-platform desktop environment that wraps Claude Code CLI via a real PTY — not an API wrapper. Spawns the actual `claude` process, so every Claude Code feature works exactly as it does in your terminal. Multi-tab sessions with resume, real-time activity feed tracking file edits, git operations, test runs, and agent spawns. Git panel with branch info, inline diffs, and side-by-side code preview. MCP server monitoring, plugin marketplace discovery, and usage analytics. Ships as DMG, EXE, AppImage, and via Homebrew.",
    highlights: [
      "brew install --cask gilfoyle — on Homebrew",
      "Full PTY terminal — not an API wrapper, spawns the real claude process",
      "GitHub Releases with auto-updates — macOS, Windows, Linux",
      "Real-time activity feed + git panel with inline diffs",
    ],
    metrics: [
      { label: "Platforms", value: "macOS / Win / Linux" },
      { label: "Install", value: "Homebrew" },
    ],
    tech: [
      "Electron 33",
      "React 18",
      "TypeScript",
      "xterm.js",
      "node-pty",
      "Zustand",
    ],
    link: "https://github.com/AadityaMishra1/Gilfoyle",
    images: [
      "/projects/gilfoyle-1.png",
      "/projects/gilfoyle-2.png",
      "/projects/gilfoyle-3.png",
    ],
    imageStyle: "desktop",
  },
  {
    title: "CacheForge",
    tag: "ML",
    tagColor: "text-cyan-400 bg-cyan-400/10",
    description:
      "LLM-driven cache policy synthesis. Uses RAG to generate, compile, and benchmark novel C++ replacement policies against ChampSim traces. 600+ experiments.",
    longDescription:
      "Research project using large language models with retrieval-augmented generation (RAG) to autonomously synthesize novel CPU cache replacement policies in C++. The system generates policy code, compiles it against the ChampSim simulator, and benchmarks IPC performance against industry-standard memory traces. An evolutionary loop iterates on top-performing policies, combining and mutating strategies across generations. Produced 309 valid, compilable policies from 600+ experiments, with several beating baseline heuristics.",
    highlights: [
      "Autonomous code generation — LLM writes, compiles, and benchmarks C++",
      "Evolutionary optimization loop across policy generations",
      "309 valid policies from 600+ experiments",
      "Several generated policies beat baseline heuristics (Hawkeye)",
    ],
    metrics: [
      { label: "Experiments", value: "600+" },
      { label: "Valid Policies", value: "309" },
    ],
    tech: ["Python", "OpenAI", "C++", "ChampSim", "RAG"],
    link: "https://github.com/AadityaMishra1/ECE-492-CacheForge-HW1",
    images: ["/projects/cacheforge.png"],
    imageStyle: "chart",
  },
  {
    title: "Virtual Surgery Simulation",
    tag: "Research",
    tagColor: "text-orange-400 bg-orange-400/10",
    description:
      "Refactored a 7,000-line surgical simulation for vascular disease modeling. NumPy/SciPy vectorization achieved 26x rendering speedup (530s → <20s).",
    longDescription:
      "Undergraduate research project refactoring a monolithic Python surgical simulation for peripheral arterial disease (PAD) and coronary artery disease (CAD) vascular models. Replaced loop-heavy computation with NumPy/SciPy vectorized operations, cutting rendering time from ~530 seconds to under 20 seconds. Built steady-state hemodynamic solvers modeling blood flow through diseased arteries. Integrated VTK/VMTK pipelines for 3D vascular geometry rendering — visualizing coronary arteries (LAD, LCx, RCA) and peripheral vasculature.",
    highlights: [
      "26x rendering speedup — 530s → <20s via NumPy/SciPy vectorization",
      "Steady-state hemodynamic solvers for PAD and CAD models",
      "3D vascular geometry rendering with VTK/VMTK",
      "Refactored 7,000-line monolith into modular architecture",
    ],
    metrics: [
      { label: "Speedup", value: "26x" },
      { label: "Render", value: "530s → <20s" },
    ],
    tech: ["Python", "VTK", "VMTK", "NumPy", "SciPy"],
    link: "https://github.com/AadityaMishra1",
    images: ["/projects/surgery-1.png", "/projects/surgery-2.png"],
    imageStyle: "chart",
  },
];

/* ── Image carousel for modal ── */
function ImageCarousel({
  images,
  style,
  title,
}: {
  images: string[];
  style: Project["imageStyle"];
  title: string;
}) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;

  const isPhone = style === "phone";
  const canPrev = idx > 0;
  const canNext = idx < images.length - 1;

  return (
    <div className="relative group/carousel">
      <div
        className={`relative w-full overflow-hidden bg-bg ${
          isPhone
            ? "flex items-center justify-center py-6 gap-4 px-4"
            : "h-64 sm:h-80"
        }`}
      >
        {isPhone ? (
          images.map((img, i) => (
            <div
              key={img}
              className={`relative h-72 w-36 shrink-0 rounded-2xl overflow-hidden border border-border/50 shadow-2xl transition-all duration-300 cursor-pointer ${
                i === idx ? "scale-105 z-10" : "scale-95 opacity-60"
              }`}
              onClick={() => setIdx(i)}
            >
              <Image
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover object-top"
              />
            </div>
          ))
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[idx]}
                alt={`${title} screenshot ${idx + 1}`}
                fill
                className={
                  style === "chart" ? "object-contain p-4" : "object-contain"
                }
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Arrows — only for multi-image non-phone */}
      {images.length > 1 && !isPhone && (
        <>
          <button
            onClick={() => canPrev && setIdx(idx - 1)}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity ${
              canPrev
                ? "opacity-0 group-hover/carousel:opacity-100 hover:bg-black/70"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous image"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => canNext && setIdx(idx + 1)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity ${
              canNext
                ? "opacity-0 group-hover/carousel:opacity-100 hover:bg-black/70"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next image"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 py-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === idx
                  ? "bg-accent scale-110"
                  : "bg-border hover:bg-text-secondary"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Modal ── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-border bg-surface"
      >
        <ImageCarousel
          images={project.images}
          style={project.imageStyle}
          title={project.title}
        />

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${project.tagColor}`}
            >
              {project.tag}
            </span>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text transition-colors p-1"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>

          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {project.longDescription}
          </p>

          {/* Highlights */}
          <ul className="mb-5 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="text-sm flex gap-2">
                <span className="text-accent shrink-0 mt-0.5">&#9657;</span>
                <span className="text-text-secondary">{h}</span>
              </li>
            ))}
          </ul>

          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-bg p-3 text-center">
                  <p className="text-lg font-bold text-accent">{m.value}</p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:text-text hover:border-text-secondary transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Source Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent-dim transition-colors"
              >
                Live Site
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Card thumbnail ── */
function CardImage({ project }: { project: Project }) {
  if (project.images.length === 0) return null;

  if (project.imageStyle === "phone") {
    return (
      <div className="flex items-end justify-center gap-2 px-4 pt-4 pb-2 bg-bg/50">
        {project.images.slice(0, 3).map((img, i) => (
          <div
            key={img}
            className={`relative rounded-lg overflow-hidden border border-border/30 shadow-lg ${
              i === 0 ? "h-40 w-20 z-10" : "h-36 w-18 opacity-70"
            }`}
          >
            <Image
              src={img}
              alt={`${project.title} ${i + 1}`}
              fill
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${
        project.imageStyle === "chart" ? "h-36 bg-bg/50" : "h-44"
      }`}
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        fill
        className={`${
          project.imageStyle === "chart"
            ? "object-contain p-2"
            : "object-cover object-left-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        }`}
      />
      {project.imageStyle === "desktop" && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
      )}
      {project.images.length > 1 && (
        <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/60 text-white/70 px-1.5 py-0.5 rounded">
          +{project.images.length - 1}
        </div>
      )}
    </div>
  );
}

/* ── Card ── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      className="group relative rounded-xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover cursor-pointer"
    >
      <CardImage project={project} />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${project.tagColor}`}
          >
            {project.tag}
          </span>
          <div className="flex gap-2.5">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-secondary hover:text-text transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Live"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="App Store"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3">
          {project.description}
        </p>

        {project.metrics && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
            {project.metrics.map((m) => (
              <span key={m.label} className="text-xs font-mono text-text">
                <span className="text-text-secondary">{m.label}: </span>
                {m.value}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent/80"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent/80">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <AnimatedSection className="max-w-5xl mx-auto px-6 py-24" id="projects">
        <h2 className="text-sm font-mono text-accent mb-2">Selected Work</h2>
        <p className="text-text-secondary text-sm mb-12">
          Click any project for the full breakdown.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}
