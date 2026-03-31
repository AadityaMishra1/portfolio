"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Undergraduate Research Assistant",
    company: "NC State University",
    period: "Jan 2026 — Present",
    logo: (
      <div className="w-10 h-10 rounded-lg bg-red-600/15 flex items-center justify-center shrink-0">
        <span className="text-red-500 font-bold text-sm">NC</span>
      </div>
    ),
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
    logo: (
      <div className="w-10 h-10 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#22c55e" strokeWidth="1.5" fill="none" />
          <polygon points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5" stroke="#22c55e" strokeWidth="1" fill="#22c55e" fillOpacity="0.2" />
        </svg>
      </div>
    ),
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
              {exp.logo}
              <p className="text-xs font-mono text-text-secondary whitespace-nowrap">
                {exp.period}
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-base font-medium">
                {exp.role}{" "}
                <span className="text-accent">@ {exp.company}</span>
              </h3>

              <ul className="mt-3 space-y-2">
                {exp.points.map((p, i) => (
                  <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
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
