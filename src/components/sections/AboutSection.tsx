"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { PERSONAL } from "@/data/data";

const skills = [
  "Next.js", "React", "TypeScript",
  "Node.js", "PostgreSQL", "Figma",
  "Framer Motion", "Tailwind CSS",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn className="mb-16">
          <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-3">
            About
          </p>
          <h2 className="font-display italic text-[clamp(2.2rem,5vw,3.8rem)] leading-tight tracking-tighter text-ink">
            The person behind the work
          </h2>
        </FadeIn>

        {/*
          Asymmetric split:
          Left → stacked stat blocks (tall, narrow)
          Right → large text + image tucked below
          Creates a magazine-editorial feel vs a boring 50/50
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left column — stats + image */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Headshot */}
            <FadeIn delay={0.1}>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-canvas-warm">
                <Image
                  src="/images/about/headshot.jpg"
                  alt={`${PERSONAL.name} — ${PERSONAL.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
                {/* Placeholder if image missing */}
                <div className="absolute inset-0 bg-canvas-warm flex items-end p-6">
                  <p className="font-mono text-xs text-ink-faint">
                    /images/about/headshot.jpg
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: "5+", label: "Years building" },
                  { num: "20+", label: "Projects shipped" },
                  { num: "12+", label: "Happy clients" },
                  { num: "3", label: "OSS projects" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-canvas-warm rounded-xl p-5"
                  >
                    <p className="font-display italic text-3xl text-ink mb-1">
                      {stat.num}
                    </p>
                    <p className="text-xs text-ink-muted font-mono">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column — bio + skills */}
          <div className="md:col-span-8 flex flex-col gap-8 md:pt-4">
            <FadeIn delay={0.15}>
              {PERSONAL.bio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[1.05rem] text-ink-soft leading-[1.8] font-light mb-6 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </FadeIn>

            {/* Skills */}
            <FadeIn delay={0.25}>
              <p className="font-mono text-xs tracking-[0.15em] text-ink-muted uppercase mb-4">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-ink-soft bg-canvas-warm border border-black/5 px-4 py-2 rounded-full hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Currently section */}
            <FadeIn delay={0.3}>
              <div className="border-t border-black/6 pt-8">
                <p className="font-mono text-xs tracking-[0.15em] text-ink-muted uppercase mb-4">
                  Currently
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Based in", value: PERSONAL.location },
                    { label: "Status", value: PERSONAL.available ? "Open to freelance projects" : "Not available" },
                    { label: "Interests", value: "Design systems, developer tools, fintech" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 text-sm">
                      <span className="text-ink-faint w-24 shrink-0">{item.label}</span>
                      <span
                        className={`text-ink-soft ${
                          item.label === "Status" && PERSONAL.available
                            ? "text-accent font-medium"
                            : ""
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
