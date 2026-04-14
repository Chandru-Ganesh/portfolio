import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES, PERSONAL } from "@/data/data";
import FadeIn from "@/components/ui/FadeIn";
import SecureMedia from "@/components/ui/SecureMedia";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ id: cs.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = CASE_STUDIES.find((c) => c.id === params.id);
  if (!cs) return { title: "Not Found" };
  return {
    title: cs.title,
    description: cs.description,
  };
}

const sectionIcons: Record<string, string> = {
  problem: "01",
  research: "02",
  wireframes: "03",
  finalui: "04",
  outcome: "05",
  text: "—",
};

export default function CaseStudyPage({ params }: Props) {
  const cs = CASE_STUDIES.find((c) => c.id === params.id);
  if (!cs) notFound();

  return (
    <article className="min-h-screen bg-canvas pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Back */}
        <FadeIn className="mb-14">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            All Case Studies
          </Link>
        </FadeIn>

        {/* Hero */}
        <FadeIn className="mb-6">
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
          <h1 className="font-display italic text-[clamp(2.5rem,7vw,5rem)] leading-[0.93] tracking-tighter text-ink mb-5">
            {cs.title}
          </h1>
          <p className="text-[1.1rem] text-ink-muted font-light leading-relaxed max-w-2xl">
            {cs.description}
          </p>
        </FadeIn>

        {/* Meta strip */}
        <FadeIn delay={0.1} className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-7 border-y border-black/6">
            {[
              { label: "Year", value: cs.year },
              { label: "Client", value: cs.client || "Personal" },
              { label: "Role", value: cs.role || PERSONAL.title },
              { label: "Duration", value: cs.duration || "—" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[0.65rem] tracking-[0.15em] text-ink-faint uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-ink-soft font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Cover image */}
        <FadeIn delay={0.15} className="mb-20">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-canvas-warm">
            <Image
              src={cs.coverImage}
              alt={`${cs.title} cover`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          {cs.liveUrl && (
            <div className="mt-5 flex">
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors border-b border-ink-faint hover:border-accent pb-0.5"
              >
                <ExternalLink size={13} />
                View Live Project
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </FadeIn>

        {/* Sections */}
        <div className="flex flex-col gap-24">
          {cs.sections.map((section, i) => (
            <FadeIn key={i} delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
                {/* Section label */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2 sticky top-24">
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] text-ink-faint">
                      {sectionIcons[section.type] || "—"}
                    </span>
                    <p className="font-mono text-xs tracking-[0.12em] text-ink-muted uppercase">
                      {section.title}
                    </p>
                  </div>
                </div>

                {/* Section body */}
                <div className="md:col-span-9 flex flex-col gap-8">
                  <p className="text-[1.05rem] text-ink-soft leading-[1.85] font-light">
                    {section.body}
                  </p>

                  {/* Media */}
                  {section.media && section.media.length > 0 && (
                    <div className="flex flex-col gap-6">
                      {section.media.map((m, mi) => (
                        <SecureMedia
                          key={mi}
                          src={`/images/case-studies/${cs.id}/${m.src}`}
                          alt={m.alt || section.title}
                          type={m.type}
                          caption={m.caption}
                          width={1200}
                          height={675}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Next case study */}
        <FadeIn className="mt-32 pt-12 border-t border-black/6">
          <p className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase mb-5">
            Next Case Study
          </p>
          {(() => {
            const currentIndex = CASE_STUDIES.findIndex((c) => c.id === cs.id);
            const next = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
            return (
              <Link
                href={`/case-studies/${next.id}`}
                className="group inline-flex items-center gap-3"
              >
                <span className="font-display italic text-[clamp(1.5rem,4vw,2.8rem)] tracking-tighter text-ink group-hover:text-accent transition-colors duration-300">
                  {next.title}
                </span>
                <ArrowUpRight
                  size={28}
                  className="text-ink-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            );
          })()}
        </FadeIn>
      </div>
    </article>
  );
}
