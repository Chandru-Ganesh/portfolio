import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import { PERSONAL } from "@/data/data";

export const metadata: Metadata = {
  title: `${PERSONAL.name} — ${PERSONAL.title}`,
  description: PERSONAL.seo.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CaseStudyPreview />
      <ProjectsPreview />
      <AboutSection />
      <ContactSection />
    </>
  );
}
