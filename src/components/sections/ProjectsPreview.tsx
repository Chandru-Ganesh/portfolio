"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/data";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectsPreview() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-32 md:py-40 bg-canvas-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-3">
              Built Things
            </p>
            <h2 className="font-display italic text-[clamp(2.2rem,5vw,3.8rem)] leading-tight tracking-tighter text-ink">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors border-b border-ink-faint hover:border-ink pb-0.5 whitespace-nowrap"
          >
            View All Projects
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-canvas-card rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500 flex flex-col"
    >
      {/* Image with hover overlay */}
      <div className="relative h-52 overflow-hidden bg-canvas-warm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/75 transition-all duration-500 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-canvas-card/95 text-ink flex items-center justify-center hover:bg-canvas-card transition-colors"
              aria-label="Live site"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-canvas-card/95 text-ink flex items-center justify-center hover:bg-canvas-card transition-colors"
              aria-label="GitHub repo"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="p-7 flex flex-col gap-4 flex-1">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.15em] text-ink-faint uppercase mb-2">
            {project.year} · {project.category}
          </p>
          <h3 className="text-[1.15rem] font-semibold text-ink tracking-tight leading-snug mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[0.7rem] font-mono text-ink-muted bg-canvas-warm px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
