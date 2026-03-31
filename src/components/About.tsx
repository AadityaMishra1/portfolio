"use client";

import AnimatedSection from "./AnimatedSection";

const skills = [
  { category: "Languages", items: ["C++20", "Python", "TypeScript", "JavaScript", "Swift", "SQL"] },
  { category: "Systems", items: ["Lock-free data structures", "pybind11", "CMake", "IBKR API", "VTK/VMTK"] },
  { category: "Web & Mobile", items: ["React", "Next.js", "React Native", "Expo", "Tailwind", "Prisma"] },
  { category: "AI / ML", items: ["PyTorch", "NumPy/SciPy", "OpenAI API", "Gemini", "RAG", "FinBERT"] },
  { category: "Infrastructure", items: ["PostgreSQL", "Supabase", "Docker", "Vercel", "Git", "CI/CD"] },
];

export default function About() {
  return (
    <AnimatedSection className="max-w-5xl mx-auto px-6 py-24" id="about">
      <h2 className="text-sm font-mono text-accent mb-8">About</h2>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-4 text-text-secondary leading-relaxed">
          <p>
            I care about what happens under the hood. Whether it&apos;s a lock-free ring buffer
            processing 29 million messages per second or a React component rendering
            a calendar sync — I want it built right.
          </p>
          <p>
            I&apos;ve shipped a C++20 options trading engine with sub-100ns latency, an AI
            syllabus parser used by students across NC State, a mobile news app with
            custom feed ranking, and refactored a 7,000-line surgical simulation to
            run 26x faster.
          </p>
          <p>
            I work across the stack because interesting problems don&apos;t respect
            layer boundaries. Systems programming, ML pipelines, full-stack web,
            mobile, research — whatever the problem demands.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-5">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                {s.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
