"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { PERSONAL } from "@/data/data";
import { Github, Linkedin, Twitter, ArrowUpRight, Mail } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: PERSONAL.social.twitter },
    { icon: Github, label: "GitHub", href: PERSONAL.social.github },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL.social.linkedin },
  ].filter((s) => s.href);

  return (
    <section
      id="contact"
      className="py-32 md:py-40 bg-canvas-warm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div>
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-3">
                Contact
              </p>
              <h2 className="font-display italic text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tighter text-ink mb-8">
                Let's build something worth using.
              </h2>
              <p className="text-[1rem] text-ink-muted leading-relaxed font-light max-w-sm">
                I'm selective about projects — I take on work where I can genuinely move the needle. If you have a product challenge worth solving, reach out.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-10">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="group inline-flex items-center gap-3 text-ink hover:text-accent transition-colors duration-300"
              >
                <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent-pale transition-all duration-300">
                  <Mail size={16} />
                </span>
                <span className="text-[0.95rem] font-medium border-b border-ink-faint group-hover:border-accent pb-0.5 transition-colors duration-300">
                  {PERSONAL.email}
                </span>
              </a>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.2}>
              <p className="font-mono text-xs tracking-[0.15em] text-ink-muted uppercase mb-5">
                Find me elsewhere
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 px-5 rounded-xl border border-black/6 bg-canvas-card hover:border-accent/20 hover:bg-accent-pale/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className="text-ink-muted group-hover:text-accent transition-colors"
                      />
                      <span className="text-sm font-medium text-ink-soft group-hover:text-ink">
                        {label}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-ink-faint group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href={PERSONAL.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors border-b border-ink-faint hover:border-ink pb-0.5"
              >
                Download Résumé
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
