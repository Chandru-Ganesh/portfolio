"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/data";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight, Github } from "lucide-react";

const FILTERS = ["All", "Web", "UI/UX", "Mobile", "OSS"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="pt-32 pb-32 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn className="mb-16">
          <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-4">
            Built Things
          </p>
          <h1 className="font-display italic text-[clamp(3rem,7vw,5.5rem)] leading-[0.93] tracking-tighter text-ink mb-6">
            Projects
          </h1>
          <p className="text-[1.05rem] text-ink-muted font-light max-w-lg leading-relaxed">
            A collection of products, tools, and experiments — shipped and open-source.
          </p>
        </FadeIn>

        {/* Filter pills */}
        <FadeIn delay={0.1} className="mb-12">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === filter
                    ? "bg-ink text-canvas-card shadow-sm"
                    : "bg-canvas-warm text-ink-muted hover:text-ink hover:bg-canvas-card border border-black/6"
                }`}
              >
                {filter}
                {filter !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({PROJECTS.filter((p) => p.category === filter).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-ink-muted font-light">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-canvas-card rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-canvas-warm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Hover overlay with action links */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/70 transition-all duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-canvas-card text-ink text-xs font-medium px-4 py-2 rounded-full hover:bg-canvas-warm transition-colors"
              aria-label="Live site"
            >
              <ArrowUpRight size={13} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-canvas-card text-ink text-xs font-medium px-4 py-2 rounded-full hover:bg-canvas-warm transition-colors"
              aria-label="GitHub"
            >
              <Github size={13} />
              Source
            </a>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[0.65rem] font-mono tracking-wide text-ink bg-canvas-card/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-4 flex-1">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase mb-2">
            {project.year}
          </p>
          <h3 className="text-[1.1rem] font-semibold text-ink tracking-tight leading-snug mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[0.68rem] font-mono text-ink-muted bg-canvas-warm px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
