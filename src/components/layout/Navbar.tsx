"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { PERSONAL } from "@/data/data";

const navLinks = [
  { label: "Work", href: "/case-studies" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    if (y > lastY && y > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(y);
  });

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFAF8]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display italic text-[1.15rem] text-ink tracking-tight hover:text-accent transition-colors duration-300"
        >
          {PERSONAL.firstName}{" "}
          <span className="font-sans not-italic font-light text-ink-muted">
            {PERSONAL.lastName}
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          {PERSONAL.available && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-accent bg-accent-pale px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available
            </span>
          )}
        </div>

        {/* Mobile menu — simple */}
        <MobileMenu />
      </nav>
    </motion.header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 flex flex-col justify-center gap-1.5 group"
        aria-label="Toggle menu"
      >
        <span
          className={`h-px bg-ink transition-all duration-300 origin-center ${
            open ? "w-6 rotate-45 translate-y-[3px]" : "w-6"
          }`}
        />
        <span
          className={`h-px bg-ink transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-4"
          }`}
        />
        <span
          className={`h-px bg-ink transition-all duration-300 origin-center ${
            open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
          }`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute top-16 left-0 right-0 bg-[#FAFAF8]/98 backdrop-blur-md border-b border-black/5 py-6 px-6"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-soft hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
