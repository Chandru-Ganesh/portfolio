import { MetadataRoute } from "next";
import { CASE_STUDIES, PROJECTS } from "@/data/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arjunmehta.dev";

  const caseStudyUrls = CASE_STUDIES.map((cs) => ({
    url: `${base}/case-studies/${cs.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...caseStudyUrls,
  ];
}
