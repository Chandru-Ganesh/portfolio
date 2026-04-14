import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES, PERSONAL } from "@/data/data";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `UX and product case studies by ${PERSONAL.name} — deep dives into problem solving, research, and design decisions.`,
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-32 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Page header */}
        <FadeIn className="mb-20">
          <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-4">
            Selected Work
          </p>
          <h1 className="font-display italic text-[clamp(3rem,7vw,5.5rem)] leading-[0.93] tracking-tighter text-ink mb-6">
            Case Studies
          </h1>
          <p className="text-[1.05rem] text-ink-muted font-light max-w-lg leading-relaxed">
            Full breakdowns of product challenges — from early research to shipped solutions.
          </p>
        </FadeIn>

        {/* List */}
        <div className="flex flex-col gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <FadeIn key={cs.id} delay={i * 0.1}>
              <Link href={`/case-studies/${cs.id}`} className="block group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-canvas-card shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.09)] transition-all duration-500">
                  {/* Image */}
                  <div className="md:col-span-5 relative h-60 md:h-auto overflow-hidden bg-canvas-warm">
                    <Image
                      src={cs.coverImage}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono tracking-wide text-ink-muted bg-canvas-warm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase mb-3">
                        {cs.year}
                        {cs.client && ` · ${cs.client}`}
                        {cs.duration && ` · ${cs.duration}`}
                      </p>
                      <h2 className="font-display italic text-[2rem] md:text-[2.5rem] leading-tight tracking-tight text-ink mb-3">
                        {cs.title}
                      </h2>
                      <p className="text-sm text-ink-muted leading-relaxed max-w-md">
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
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
