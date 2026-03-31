"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Undergraduate Research Assistant",
    company: "NC State University",
    period: "Jan 2026 — Present",
    logoSrc: "/logos/ncstate.png",
    points: [
      "Refactored a 7,000-line monolithic surgical simulation using NumPy/SciPy vectorization, cutting rendering time from ~530s to under 20s (26x speedup).",
      "Built steady-state solvers for PAD and CAD vascular models with VTK/VMTK visualization pipelines.",
    ],
    tech: ["Python", "NumPy", "SciPy", "VTK", "VMTK"],
  },
  {
    role: "Systems Engineering Intern",
    company: "Nutanix",
    period: "May — Aug 2025",
    logoSrc: "/logos/nutanix.png",
    points: [
      "Diagnosed and fixed 122 failing queries in an internal AI assistant, restoring coverage across the engineering knowledge base.",
      "Shipped the NC2 Solution Kit for customer-facing infrastructure deployments.",
    ],
    tech: ["Python", "Internal Tooling", "Cloud Infrastructure"],
  },
];

export default function Experience() {
  return (
    <AnimatedSection className="max-w-5xl mx-auto px-6 py-24" id="experience">
      <h2 className="text-sm font-mono text-accent mb-12">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.role} className="group grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1 flex md:flex-col gap-3 items-center md:items-start">
              <div className="w-40 h-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-white/5 p-3">
                <Image
                  src={exp.logoSrc}
                  alt={exp.company}
                  width={160}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-mono text-text-secondary whitespace-nowrap">
                {exp.period}
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-base font-medium">
                {exp.role} <span className="text-accent">@ {exp.company}</span>
              </h3>

              <ul className="mt-3 space-y-2">
                {exp.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed flex gap-2"
                  >
                    <span className="text-accent mt-1.5 shrink-0">&#9657;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
