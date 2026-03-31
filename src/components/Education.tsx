"use client";

import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <AnimatedSection className="max-w-5xl mx-auto px-6 py-24" id="education">
      <h2 className="text-sm font-mono text-accent mb-12">Education</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <p className="text-xs font-mono text-text-secondary">2023 — 2027</p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-base font-medium">
            B.S. Computer Engineering{" "}
            <span className="text-accent">@ NC State University</span>
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Minor in Economics &middot; GPA 3.51
          </p>
          <p className="text-sm text-text-secondary mt-3 leading-relaxed">
            Relevant coursework: Data Structures & Algorithms, Computer Architecture,
            Operating Systems, Machine Learning, Digital Logic, Embedded Systems,
            Computer Networks, Database Management Systems.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
