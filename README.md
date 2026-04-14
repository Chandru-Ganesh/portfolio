# Portfolio — Next.js + Tailwind + Framer Motion

A clean, premium portfolio for a Product Developer. Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

**All your personal data lives in one file:**

```
src/data/data.ts
```

Edit `PERSONAL`, `CASE_STUDIES`, and `PROJECTS` — everything on the site updates automatically.

### Adding a Case Study

```ts
// In src/data/data.ts → CASE_STUDIES array
{
  id: "my-project",          // used in URL: /case-studies/my-project
  title: "My Project",
  subtitle: "One-liner",
  description: "Short description shown on cards",
  tags: ["React", "UX"],
  coverImage: "/images/case-studies/my-project-cover.jpg",
  year: "2024",
  featured: true,            // shows on homepage preview
  sections: [
    {
      type: "problem",
      title: "The Problem",
      body: "Your text here...",
      media: [
        {
          src: "my-image.jpg",  // file lives at /public/images/case-studies/my-project/my-image.jpg
          type: "image",        // "image" | "video" | "gif"
          alt: "Alt text",
          caption: "Optional caption"
        }
      ]
    },
    // Add as many sections as needed
  ]
}
```

### Adding a Project

```ts
// In src/data/data.ts → PROJECTS array
{
  id: "my-tool",
  title: "My Tool",
  description: "What it does",
  techStack: ["React", "TypeScript"],
  category: "Web",            // "Web" | "UI/UX" | "Mobile" | "OSS"
  image: "/images/projects/my-tool.jpg",
  liveUrl: "https://...",
  githubUrl: "https://...",
  year: "2024",
  featured: true,             // shows on homepage preview
}
```

---

## Media & Assets

| What | Where |
|------|-------|
| Project images | `/public/images/projects/` |
| Case study covers | `/public/images/case-studies/` |
| Case study media | `/public/images/case-studies/{id}/` |
| Videos (protected) | `/public/videos/` |
| Your headshot | `/public/images/about/headshot.jpg` |
| Resume PDF | `/public/resume.pdf` |
| OG image | `/public/og-image.png` |

### Video & GIF support

In case study `media` entries, set `type: "video"` for `.mp4` files or `type: "gif"` for animated GIFs. Videos are served with `controlsList="nodownload"` to prevent direct download.

---

## Deploying

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Build locally
```bash
npm run build
npm start
```

---

## Updating your domain

1. Change `metadataBase` in `src/app/layout.tsx`
2. Update the base URL in `src/app/sitemap.ts`
3. Update `robots.txt` in `/public/`

---

## Structure

```
src/
├── app/
│   ├── page.tsx                   # Home
│   ├── case-studies/
│   │   ├── page.tsx               # All case studies
│   │   └── [id]/page.tsx          # Individual case study
│   ├── projects/page.tsx          # All projects
│   ├── layout.tsx                 # Root layout + SEO
│   ├── sitemap.ts                 # Auto-generated sitemap
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CaseStudyPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── FadeIn.tsx             # Scroll-triggered animations
│       └── SecureMedia.tsx        # Protected images/videos/GIFs
├── data/
│   └── data.ts                    # ← All your content lives here
└── lib/
    └── animations.ts              # Shared Framer Motion variants
```
