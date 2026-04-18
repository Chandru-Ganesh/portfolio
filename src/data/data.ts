// ============================================================
// PORTFOLIO DATA — Edit this file to customize your portfolio
// ============================================================

export const PERSONAL = {
  name: "Chandru",
  firstName: "Chandru",
  lastName: "Ganesh",
  title: "Product Developer",
  tagline: "I build products that feel inevitable.",
  bio: `I'm a product developer focused on the intersection of engineering and design. I work with early-stage startups and scale-ups to ship polished digital products — from concept to code. My process is grounded in user research, rapid prototyping, and an obsessive attention to detail that shows up in every interaction.

Currently open to select freelance projects and long-term collaborations where craft matters.`,
  location: "Tamil Nadu, India",
  available: true,
  email: "hello@arjunmehta.dev",
  resume: "/resume.pdf",
  social: {
    twitter: "",
    github: "https://github.com/Chandru-Ganesh",
    linkedin: "https://linkedin.com/in/Chandru-Ganesh",
    dribbble: "",
  },
  seo: {
    description:
      "Chandru Ganesh — Product Developer crafting clean, fast, and thoughtful digital experiences. Available for freelance.",
    keywords: ["product developer", "web developer", "UI developer", "freelance", "Next.js", "React","Chandru","chandru","product","developer"],
    ogImage: "/og-image.png",
  },
};

// ============================================================
// CASE STUDIES — Add as many as you want
// ============================================================

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  coverImage: string; // path in /public/images/case-studies/
  year: string;
  featured: boolean;
  client?: string;
  role?: string;
  duration?: string;
  liveUrl?: string;
  sections: CaseStudySection[];
};

export type CaseStudySection = {
  type: "problem" | "research" | "wireframes" | "finalui" | "outcome" | "text";
  title: string;
  body: string;
  // Media: can be image path, video path (.mp4), or gif path (.gif)
  // All served from /public/images/case-studies/{id}/
  media?: CaseStudyMedia[];
};

export type CaseStudyMedia = {
  src: string; // filename only — resolved relative to /images/case-studies/{caseStudyId}/
  type: "image" | "video" | "gif";
  alt?: string;
  caption?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
];

// ============================================================
// PROJECTS — Add as many as you want
// ============================================================

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "Web" | "UI/UX" | "Mobile" | "OSS";
  image: string; // path in /public/images/projects/
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "fahh-error",
    title: "Fahh error sound",
    description: "An Visual Studio Code extension that plays famous meme sound 'FAHH' whenever an user saves an error file or faces error in terminal while execution.",
    techStack: [ "TypeScript"],
    category: "OSS",
    image: "/images/projects/fahh.png",
    githubUrl: "https://github.com/Chandru-Ganesh/fahh-extention-vs.git",
    liveUrl: "https://open-vsx.org/extension/chandrug0110/fahhhhhhhhhhh",
    year: "2026",
    featured: true,
  },
  {
    id: "NPM-json2any",
    title: "JSON2Any",
    description: "Used json2csv to efficiently convert large-scale JSON data into multiple formats with minimal data loss. Built to handle high-volume datasets reliably while keeping performance smooth and consistent.",
    techStack: ["JavaScript", "Node.js","'Under Development"],
    category: "OSS",
    image: "/images/projects/npm.png",
    githubUrl: "https://github.com/Chandru-Ganesh/json2any.git",
    year: "2026",
    featured: true,
  },
];
