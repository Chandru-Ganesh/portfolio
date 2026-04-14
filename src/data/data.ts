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
  {
    id: "fintrack",
    title: "FinTrack",
    subtitle: "Redesigning personal finance for clarity",
    description:
      "A mobile-first finance dashboard that reduced user anxiety around money management by 60% through clear information hierarchy and calm visual design.",
    tags: ["Product Design", "React Native", "Data Viz"],
    coverImage: "/images/case-studies/fintrack-cover.jpg",
    year: "2024",
    featured: true,
    client: "FinTrack Inc.",
    role: "Lead Product Developer",
    duration: "12 weeks",
    liveUrl: "https://example.com",
    sections: [
      {
        type: "problem",
        title: "The Problem",
        body: "Users were abandoning the app within the first week. The existing UI crammed too much information onto a single screen, triggering financial anxiety rather than calm decision-making. The core challenge: how do you make complex financial data feel simple without losing depth?",
        media: [],
      },
      {
        type: "research",
        title: "Research & Discovery",
        body: "I ran 12 user interviews and analyzed 3 months of session recordings. Key insight: users didn't want to see all their data at once — they wanted progressive disclosure, surfacing what mattered most at the right time. Competitive analysis of 6 apps revealed a shared failure: designing for power users while alienating casual ones.",
        media: [
          { src: "research-notes.jpg", type: "image", alt: "Research notes and affinity mapping", caption: "Affinity mapping from 12 user interviews" },
        ],
      },
      {
        type: "wireframes",
        title: "Wireframes & Prototyping",
        body: "I started with low-fidelity paper sketches, tested 3 information architecture concepts, then moved to Figma for mid-fidelity wireframes. Iterated through 4 rounds of usability testing, each time reducing cognitive load.",
        media: [
          { src: "wireframes.jpg", type: "image", alt: "Low fidelity wireframes", caption: "Early wireframe explorations" },
        ],
      },
      {
        type: "finalui",
        title: "Final Design",
        body: "The final product uses a card-based architecture with a clear visual hierarchy. A single 'health score' metric leads the dashboard, with drill-down access to detailed views. The design system uses a restrained palette of 4 colors to reduce visual noise.",
        media: [
          { src: "final-ui.jpg", type: "image", alt: "Final UI screens", caption: "Final product screens across key user flows" },
        ],
      },
      {
        type: "outcome",
        title: "Outcome",
        body: "After launch: 68% reduction in drop-off rate. User session length increased from 1.2 min to 4.8 min. App Store rating moved from 3.1 to 4.6. The redesign directly contributed to a 40% increase in premium conversions.",
        media: [],
      },
    ],
  },
  {
    id: "sheltr",
    title: "Sheltr",
    subtitle: "A property search experience that doesn't suck",
    description:
      "End-to-end redesign of a real estate platform — from search to shortlist to booking a visit — with a focus on trust and speed.",
    tags: ["Full-Stack", "Next.js", "UX Design"],
    coverImage: "/images/case-studies/sheltr-cover.jpg",
    year: "2023",
    featured: true,
    client: "Sheltr Homes",
    role: "Product Developer",
    duration: "8 weeks",
    sections: [
      {
        type: "problem",
        title: "The Problem",
        body: "Property search in India is plagued by stale listings, hidden fees, and zero transparency. Sheltr wanted to be different — but their existing web app felt like 2012. Users couldn't trust the data, and the UX made them feel like they were being sold to rather than helped.",
        media: [],
      },
      {
        type: "research",
        title: "Research",
        body: "Conducted guerrilla testing with 8 house hunters over 2 weeks. The single biggest complaint: 'I can never tell what's real.' Trust signals, recency indicators, and transparent pricing emerged as the three pillars of a better experience.",
        media: [],
      },
      {
        type: "wireframes",
        title: "Wireframes",
        body: "Designed a map-first search interface inspired by Airbnb's exploration model. Cards show 'Last updated X hours ago' timestamps and verified badges prominently. Removed 30% of form fields from the enquiry flow.",
        media: [],
      },
      {
        type: "finalui",
        title: "Final Design",
        body: "Clean, photo-forward listing cards with generous whitespace. A persistent comparison drawer lets users shortlist and compare up to 3 properties without losing their place in search.",
        media: [],
      },
      {
        type: "outcome",
        title: "Outcome",
        body: "Enquiry completion rate up 55%. Bounce rate down 38%. Average session depth up from 2 pages to 7 pages. Client revenue grew 2.3× in the quarter following launch.",
        media: [],
      },
    ],
  },
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
    id: "pulse-ui",
    title: "Pulse UI",
    description: "An open-source component library built on Radix UI with a design-token-first architecture.",
    techStack: ["React", "TypeScript", "Radix UI", "Storybook"],
    category: "OSS",
    image: "/images/projects/pulse-ui.jpg",
    githubUrl: "https://github.com/",
    year: "2024",
    featured: true,
  },
  {
    id: "codeflow",
    title: "CodeFlow",
    description: "A real-time collaborative code review tool that integrates with GitHub and surfaces review bottlenecks.",
    techStack: ["Next.js", "Supabase", "WebSockets", "Tailwind"],
    category: "Web",
    image: "/images/projects/codeflow.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    year: "2024",
    featured: true,
  },
  {
    id: "motionkit",
    title: "MotionKit",
    description: "Drag-and-drop animation builder that exports clean Framer Motion code.",
    techStack: ["React", "Framer Motion", "Zustand"],
    category: "Web",
    image: "/images/projects/motionkit.jpg",
    liveUrl: "https://example.com",
    year: "2023",
    featured: true,
  },
  {
    id: "typeset",
    title: "TypeSet",
    description: "Visual type pairing tool — find perfect font combinations with live preview.",
    techStack: ["SvelteKit", "Google Fonts API"],
    category: "Web",
    image: "/images/projects/typeset.jpg",
    liveUrl: "https://example.com",
    year: "2023",
  },
  {
    id: "datacanvas",
    title: "DataCanvas",
    description: "No-code dashboard builder for non-technical founders — connect any API in minutes.",
    techStack: ["Next.js", "Recharts", "Prisma", "PostgreSQL"],
    category: "Web",
    image: "/images/projects/datacanvas.jpg",
    year: "2023",
  },
  {
    id: "pockethabit",
    title: "PocketHabit",
    description: "Minimal iOS habit tracker focused on the 2-minute rule with smart nudges.",
    techStack: ["React Native", "Expo", "SQLite"],
    category: "Mobile",
    image: "/images/projects/pockethabit.jpg",
    year: "2022",
  },
];
