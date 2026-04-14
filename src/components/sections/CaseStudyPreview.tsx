"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/data";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudyPreview() {
  const featured = CASE_STUDIES.filter((cs) => cs.featured).slice(0, 2);

  return (
    <section id="case-studies" className="py-32 md:py-40 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <FadeIn className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-3">
              Featured Work
            </p>
            <h2 className="font-display italic text-[clamp(2.2rem,5vw,3.8rem)] leading-tight tracking-tighter text-ink">
              Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors border-b border-ink-faint hover:border-ink pb-0.5 whitespace-nowrap"
          >
            View All Case Studies
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </FadeIn>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {featured.map((cs, i) => (
            <FadeIn key={cs.id} delay={i * 0.12}>
              <CaseStudyCard cs={cs} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ cs, index }: { cs: (typeof CASE_STUDIES)[0]; index: number }) {
  return (
    <Link href={`/case-studies/${cs.id}`} className="block group">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`rounded-2xl overflow-hidden flex flex-col ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } bg-canvas-card shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500`}
      >
        {/* Image */}
        <div className="md:w-[55%] relative h-64 md:h-auto overflow-hidden bg-canvas-warm">
          <div className="absolute inset-0 bg-canvas-warm animate-pulse" />
          <Image
            src={cs.coverImage}
            alt={cs.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/8 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-between gap-8">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono tracking-wide text-ink-muted bg-canvas-warm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase mb-2">
              {cs.year} {cs.client && `· ${cs.client}`}
            </p>
            <h3 className="font-display italic text-[2.2rem] leading-tight tracking-tight text-ink mb-4">
              {cs.title}
            </h3>
            <p className="text-ink-muted text-[0.95rem] leading-relaxed">
              {cs.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent transition-colors duration-300">
            View Case Study
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
