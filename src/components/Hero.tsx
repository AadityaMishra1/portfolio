"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-accent font-mono text-sm mb-6"
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
      >
        Aaditya Mishra.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-secondary mt-2 tracking-tight"
      >
        I build things that go fast.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 text-text-secondary max-w-xl text-lg leading-relaxed"
      >
        Computer Engineering at <span className="text-text">NC State</span>.
        Previously at <span className="text-text">Nutanix</span>. I ship systems
        — from low-latency C++ trading engines to production AI tools and apps
        on the App Store.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 flex gap-5"
      >
        <a
          href="#projects"
          className="px-6 py-3 border border-accent text-accent text-sm font-medium rounded hover:bg-accent/10 transition-colors"
        >
          View my work
        </a>
        <a
          href="mailto:amishr26@ncsu.edu"
          className="px-6 py-3 text-text-secondary text-sm font-medium rounded hover:text-text transition-colors"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
