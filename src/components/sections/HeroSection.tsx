"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PERSONAL } from "@/data/data";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax on hero text
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-canvas"
    >
      {/* Subtle background ornament */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[720px] max-h-[720px] rounded-full opacity-[0.035] bg-accent blur-[120px] pointer-events-none"
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-8"
        >
          {PERSONAL.title}
        </motion.p>

        {/* Name — large display */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-tighter text-ink"
          >
            {PERSONAL.firstName}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.32, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-tighter text-ink"
          >
            {PERSONAL.lastName}
            <span className="text-accent">.</span>
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="text-[1.05rem] text-ink-muted max-w-[420px] leading-relaxed font-light">
            {PERSONAL.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 bg-ink text-canvas-card px-7 py-3.5 rounded-full text-sm font-medium hover:bg-ink-soft transition-all duration-300"
            >
              View Case Studies
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <a
              href={PERSONAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-muted hover:text-ink transition-colors border-b border-ink-faint hover:border-ink pb-0.5"
            >
              Download Résumé
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-ink/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
