import Link from "next/link";
import { PERSONAL } from "@/data/data";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/6 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display italic text-lg text-ink">
              {PERSONAL.name}
            </p>
            <p className="text-sm text-ink-muted mt-0.5">{PERSONAL.title}</p>
          </div>

          <div className="flex items-center gap-5">
            {PERSONAL.social.github && (
              <a
                href={PERSONAL.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink-faint hover:text-ink transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {PERSONAL.social.linkedin && (
              <a
                href={PERSONAL.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink-faint hover:text-ink transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {PERSONAL.social.twitter && (
              <a
                href={PERSONAL.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-ink-faint hover:text-ink transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>

          <p className="text-sm text-ink-faint">
            © {year} {PERSONAL.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
