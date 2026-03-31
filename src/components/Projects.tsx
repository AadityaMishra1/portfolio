"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface Project {
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  metrics?: string[];
  tech: string[];
  link?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Contrarian Options Alpha",
    tag: "Systems",
    tagColor: "text-red-400",
    description:
      "High-performance C++20 options trading engine with a lock-free SPSC ring buffer. Implements research-backed strategies — HV-IV gap, PEAD, regime filtering — with paper and live trading via IBKR.",
    metrics: ["29M msg/sec", "85ns latency", "95.7% win rate", "2.75 Sharpe"],
    tech: ["C++20", "Python", "pybind11", "IBKR API", "CMake"],
    link: "https://github.com/AadityaMishra1/Contrarian-Options-Alpha-Engine",
    image: "/projects/quant.png",
  },
  {
    title: "Almanac",
    tag: "Full-Stack",
    tagColor: "text-green-400",
    description:
      "AI syllabus parser that extracts every assignment, exam, and deadline from a PDF and syncs them to Google Calendar. 99% extraction accuracy. Used by students at NC State.",
    metrics: ["99% accuracy", "Live in production"],
    tech: ["Next.js 15", "Gemini AI", "Google Calendar API", "PostgreSQL", "Prisma"],
    link: "https://github.com/AadityaMishra1/Almanac",
    liveUrl: "https://almanaccal.com",
    image: "/projects/almanac.png",
  },
  {
    title: "NewsNine",
    tag: "Mobile",
    tagColor: "text-yellow-400",
    description:
      "TikTok-style iOS news app with full-screen swipe navigation. Custom multi-factor feed ranking across 38+ sources with AI-generated bullet-point summaries.",
    metrics: ["38+ sources", "Pending App Store review"],
    tech: ["React Native", "Expo", "Supabase", "TypeScript", "Reanimated"],
    link: "https://github.com/AadityaMishra1/NewsNine",
  },
  {
    title: "Gilfoyle",
    tag: "Desktop",
    tagColor: "text-purple-400",
    description:
      "Full-featured desktop environment for Claude Code. Multi-tab terminal sessions, real-time activity feed tracking file edits and git ops, MCP server monitoring, and plugin marketplace.",
    tech: ["Electron", "React 18", "TypeScript", "xterm.js", "Zustand"],
    link: "https://github.com/AadityaMishra1/Gilfoyle",
    image: "/projects/gilfoyle.png",
  },
  {
    title: "CacheForge",
    tag: "ML",
    tagColor: "text-cyan-400",
    description:
      "LLM-driven C++ cache policy synthesis. Uses RAG to generate, compile, and benchmark novel cache replacement policies against ChampSim traces.",
    metrics: ["600+ experiments", "309 valid policies generated"],
    tech: ["Python", "OpenAI", "C++", "ChampSim", "RAG"],
  },
  {
    title: "Virtual Surgery Simulation",
    tag: "Research",
    tagColor: "text-orange-400",
    description:
      "Refactored a monolithic 7,000-line surgical simulation for PAD and CAD vascular models. NumPy/SciPy vectorization achieved a 26x rendering speedup.",
    metrics: ["26x speedup", "530s → <20s render time"],
    tech: ["Python", "VTK", "VMTK", "NumPy", "SciPy"],
    image: "/projects/surgery.png",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLarge = index < 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative rounded-xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {project.image && isLarge && (
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
        </div>
      )}

      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-mono uppercase tracking-wider ${project.tagColor}`}>
            {project.tag}
          </span>
          <div className="flex gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Live site"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {project.metrics && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
            {project.metrics.map((m) => (
              <span key={m} className="text-xs font-mono text-text">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <AnimatedSection className="max-w-5xl mx-auto px-6 py-24" id="projects">
      <h2 className="text-sm font-mono text-accent mb-12">Projects</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
}
